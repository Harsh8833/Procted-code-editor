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
  // Mouth/lip state from vision
  const mouthMovingRef = useRef<boolean>(false)
  const mouthOpenRef = useRef<boolean | null>(null)
  const mouthActivityPctRef = useRef<number>(0) // 0..100
  // Simple rule timers: both audio and lips active
  const bothStartRef = useRef<number | null>(null)
  const bothCooldownRef = useRef<number>(0)

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
      // Simple rule: anomaly when both audio and lips exceed thresholds for a short dwell
      const AUDIO_THRESH = 10 // %
      const LIPS_THRESH = 30 // % activity or explicit moving/open
      const lipsActive = mouthMovingRef.current || (!!mouthOpenRef.current && mouthActivityPctRef.current > LIPS_THRESH) || mouthActivityPctRef.current > LIPS_THRESH
      const audioActive = currentLevelPct >= AUDIO_THRESH

      if (lipsActive && audioActive) {
        if (bothStartRef.current == null) bothStartRef.current = now
        const dwell = now - (bothStartRef.current ?? now)
        if (dwell > 100 && now - bothCooldownRef.current > 2000) {
          setAnomalyCount((c) => c + 1)
          bothCooldownRef.current = now
          bothStartRef.current = null
          onEvent?.({
            eventType: "audio_anomaly",
            severity: "warning",
            context,
            data: { level: currentLevelPct, lipsActivityPct: mouthActivityPctRef.current, reason: "audio_with_lips" },
          })
        }
      } else {
        bothStartRef.current = null
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
  bothStartRef.current = null
  bothCooldownRef.current = 0

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

  const setMouthState = useCallback((state: { moving?: boolean; open?: boolean | null; activityPct?: number }) => {
    if (typeof state.moving === 'boolean') mouthMovingRef.current = state.moving
    if (typeof state.open !== 'undefined') mouthOpenRef.current = state.open
    if (typeof state.activityPct === 'number' && !Number.isNaN(state.activityPct)) {
      mouthActivityPctRef.current = Math.max(0, Math.min(100, Math.round(state.activityPct)))
    }
  }, [])

  useEffect(() => stop, [stop])

  return { status, error, level, anomalyCount, start, stop, setFaceDetected, setMouthState }
}
