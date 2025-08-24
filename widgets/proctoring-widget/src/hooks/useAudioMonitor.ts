"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { createMicMeter } from "../lib/audio/meter"

export type AudioMonitorStatus = "idle" | "running" | "error"

type EventCb = (evt: {
  eventType: "audio_anomaly"
  severity: "info" | "warning" | "critical"
  context: string
  data: Record<string, unknown>
}) => void

export function useAudioMonitor(options?: { onEvent?: EventCb; context?: string }) {
  const { onEvent, context = "coding" } = options || {}

  const [status, setStatus] = useState<AudioMonitorStatus>("idle")
  const [error, setError] = useState<string | undefined>(undefined)
  const [level, setLevel] = useState(0) // 0..100
  const [anomalyCount, setAnomalyCount] = useState(0)

  const meterRef = useRef<ReturnType<typeof createMicMeter> | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const rafRef = useRef<number | null>(null)

  const faceDetectedRef = useRef<boolean>(false)
  const cooldownSpikeRef = useRef<number>(0)
  const cooldownAudioNoFaceRef = useRef<number>(0)
  const silenceStartRef = useRef<number | null>(null)

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    try {
      meterRef.current?.dispose()
    } catch {}
    meterRef.current = null
    try {
      streamRef.current?.getTracks().forEach((t) => t.stop())
    } catch {}
    streamRef.current = null
    setStatus("idle")
  }, [])

  const analyze = useCallback(
    (currentLevelPct: number) => {
      const now = Date.now()
      const faceDetected = faceDetectedRef.current

      if (currentLevelPct > 18 && now - cooldownSpikeRef.current > 2000) {
        setAnomalyCount((c) => c + 1)
        cooldownSpikeRef.current = now
        onEvent?.({
          eventType: "audio_anomaly",
          severity: "warning",
          context,
          data: { level: currentLevelPct, reason: "audio_spike", faceDetected },
        })
      }

      if (faceDetected && currentLevelPct < 3) {
        if (silenceStartRef.current == null) silenceStartRef.current = now
        else if (now - silenceStartRef.current > 15000) {
          setAnomalyCount((c) => c + 1)
          silenceStartRef.current = null
          onEvent?.({
            eventType: "audio_anomaly",
            severity: "warning",
            context,
            data: { level: currentLevelPct, reason: "extended_silence_with_face" },
          })
        }
      } else if (currentLevelPct >= 3) {
        silenceStartRef.current = null
      }

      if (!faceDetected && currentLevelPct > 12 && now - cooldownAudioNoFaceRef.current > 3000) {
        setAnomalyCount((c) => c + 1)
        cooldownAudioNoFaceRef.current = now
        onEvent?.({
          eventType: "audio_anomaly",
          severity: "warning",
          context,
          data: { level: currentLevelPct, reason: "audio_without_face" },
        })
      }
    },
    [context, onEvent]
  )

  const loop = useCallback(() => {
    try {
      if (!meterRef.current) return
      const rms = meterRef.current.getLevel()
      const pct = Math.max(0, Math.min(100, Math.round(rms * 160)))
      setLevel(pct)
      analyze(pct)
    } finally {
      rafRef.current = requestAnimationFrame(loop)
    }
  }, [analyze])

  const start = useCallback(
    async (stream?: MediaStream) => {
      try {
        setError(undefined)
        setAnomalyCount(0)
        cooldownSpikeRef.current = 0
        cooldownAudioNoFaceRef.current = 0
        silenceStartRef.current = null

        let s = stream
        if (!s && typeof window !== "undefined" && (window as any).precheckAudioStream) {
          const pre = (window as any).precheckAudioStream as MediaStream
          if (pre?.active && pre.getAudioTracks().length > 0) s = pre
        }
        if (!s) {
          s = await navigator.mediaDevices.getUserMedia({
            audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, sampleRate: 44100 },
          })
        }
        streamRef.current = s
        const audioTracks = s.getAudioTracks()
        const audioStream = audioTracks.length ? new MediaStream(audioTracks) : s

        meterRef.current = createMicMeter(audioStream)
        setStatus("running")
        rafRef.current = requestAnimationFrame(loop)
      } catch (e) {
        setStatus("error")
        setError(e instanceof Error ? e.message : String(e))
      }
    },
    [loop]
  )

  const setFaceDetected = useCallback((present: boolean) => {
    faceDetectedRef.current = present
  }, [])

  useEffect(() => stop, [stop])

  return { status, error, level, anomalyCount, start, stop, setFaceDetected }
}
