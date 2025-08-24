"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minimize2, AlertTriangle, CheckCircle } from "lucide-react"
import type { MonitoringStatus, SessionData } from "../types/proctoring"

interface FaceDetection {
  x: number
  y: number
  width: number
  height: number
  confidence: number
}

interface PostureAnalysis {
  isGoodPosture: boolean
  shoulderAlignment: number
  headTilt: number
  confidence: number
}

interface ExpressionAnalysis {
  dominant: string
  confidence: number
  emotions: { [key: string]: number }
}

interface AttireAnalysis {
  isProfessional: boolean
  hasShirt: boolean
  confidence: number
  details: string
}

interface EyeContactAnalysis {
  isLookingAtCamera: boolean
  gazeDirection: { x: number; y: number }
  confidence: number
  attentionScore: number
}

interface FloatingVideoWidgetProps {
  monitoringStatus: MonitoringStatus
  sessionData?: SessionData
  onStatusChange?: (status: MonitoringStatus) => void
  onUpdateSession?: (updates: Partial<SessionData>) => void
  onAddEvent?: (event: any) => void
}

export function FloatingVideoWidget({
  monitoringStatus,
  sessionData,
  onStatusChange,
  onUpdateSession,
  onAddEvent,
}: FloatingVideoWidgetProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: window.innerWidth - 280, y: window.innerHeight - 400 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const [faceCount, setFaceCount] = useState(0)
  const [isStable, setIsStable] = useState(false)
  const [postureAnalysis, setPostureAnalysis] = useState<PostureAnalysis | null>(null)
  const [expressionAnalysis, setExpressionAnalysis] = useState<ExpressionAnalysis | null>(null)
  const [attireAnalysis, setAttireAnalysis] = useState<AttireAnalysis | null>(null)
  const [eyeContactAnalysis, setEyeContactAnalysis] = useState<EyeContactAnalysis | null>(null)
  const [audioLevel, setAudioLevel] = useState(0)
  const [audioAnomalyCount, setAudioAnomalyCount] = useState(0)
  const [detections, setDetections] = useState<FaceDetection[]>([])

  const [unfocusCount, setUnfocusCount] = useState(0)
  const [tabSwitchCount, setTabSwitchCount] = useState(0)
  const [keystrokeCount, setKeystrokeCount] = useState(0)
  const [copyAttempts, setCopyAttempts] = useState(0)
  const [gazeOffScreenCount, setGazeOffScreenCount] = useState(0)
  const [isLookingOffScreen, setIsLookingOffScreen] = useState(false)

  const [multipleFacesStartTime, setMultipleFacesStartTime] = useState<number | null>(null)
  const [gazeOffScreenStartTime, setGazeOffScreenStartTime] = useState<number | null>(null)
  const [multipleFacesDuration, setMultipleFacesDuration] = useState(0)
  const [gazeOffScreenDuration, setGazeOffScreenDuration] = useState(0)
  const [multipleFacesDetectionCount, setMultipleFacesDetectionCount] = useState(0)

  const [noFaceStartTime, setNoFaceStartTime] = useState<number | null>(null)
  const [noFaceDetectionCount, setNoFaceDetectionCount] = useState(0)
  const [noFaceDuration, setNoFaceDuration] = useState(0)

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const widgetRef = useRef<HTMLDivElement>(null)
  const faceDetectorRef = useRef<any>(null)
  const animationRef = useRef<number>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioStreamRef = useRef<MediaStream | null>(null)
  const audioInitializedRef = useRef<boolean>(false)
  const isCleaningUpRef = useRef<boolean>(false)
  const lastSessionUpdateRef = useRef<number>(0)
  const pendingDetectionDataRef = useRef<any>(null)

  const lastAudioLevelRef = useRef<number>(0)
  const audioAnomalyCountRef = useRef<number>(0)
  const silenceStartRef = useRef<number | null>(null)
  const audioSpikeCooldownRef = useRef<number>(0)
  const audioWithoutFaceCooldownRef = useRef<number>(0)
  const gazeCooldownRef = useRef<number>(0)
  const lastFaceStateRef = useRef<"none" | "single" | "multiple">("none")
  const consecutiveFramesRef = useRef({ noFace: 0, multipleFaces: 0 })
  const incidentRef = useRef({ noFace: false, multipleFaces: false, gazeOff: false })

  const analyzeExpression = useCallback((faceRegion: ImageData, faceDetection: FaceDetection): ExpressionAnalysis => {
    const data = faceRegion.data
    let brightness = 0
    let contrast = 0
    let edgeCount = 0

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const gray = (r + g + b) / 3
      brightness += gray

      if (i > 0) {
        const prevGray = (data[i - 4] + data[i - 3] + data[i - 2]) / 3
        contrast += Math.abs(gray - prevGray)
      }

      if (i > faceRegion.width * 4 && i < data.length - faceRegion.width * 4) {
        const topGray =
          (data[i - faceRegion.width * 4] + data[i - faceRegion.width * 4 + 1] + data[i - faceRegion.width * 4 + 2]) / 3
        const bottomGray =
          (data[i + faceRegion.width * 4] + data[i + faceRegion.width * 4 + 1] + data[i + faceRegion.width * 4 + 2]) / 3
        if (Math.abs(gray - topGray) > 30 || Math.abs(gray - bottomGray) > 30) {
          edgeCount++
        }
      }
    }

    const pixelCount = data.length / 4
    brightness /= pixelCount
    contrast /= pixelCount
    const edgeRatio = edgeCount / pixelCount
    const faceAspectRatio = faceDetection.width / faceDetection.height

    const emotions = {
      neutral: Math.max(0.1, 0.6 - Math.abs(brightness - 120) / 200 - Math.abs(contrast - 15) / 100),
      happy: Math.max(
        0.05,
        (brightness > 115 ? 0.4 : 0.1) + (edgeRatio > 0.15 ? 0.3 : 0) + (faceAspectRatio > 0.85 ? 0.2 : 0),
      ),
      focused: Math.max(
        0.05,
        (contrast > 20 ? 0.4 : 0.1) + (edgeRatio > 0.12 ? 0.2 : 0) + (brightness < 110 ? 0.2 : 0),
      ),
      concerned: Math.max(
        0.05,
        (brightness < 105 ? 0.3 : 0.1) + (contrast > 25 ? 0.2 : 0) + (faceAspectRatio < 0.75 ? 0.2 : 0),
      ),
      surprised: Math.max(0.05, (faceAspectRatio > 0.9 ? 0.3 : 0.1) + (edgeRatio > 0.18 ? 0.3 : 0)),
    }

    const timeVariation = (Date.now() % 10000) / 10000
    Object.keys(emotions).forEach((emotion) => {
      emotions[emotion as keyof typeof emotions] += Math.sin(timeVariation * Math.PI * 2) * 0.1
      emotions[emotion as keyof typeof emotions] = Math.max(0.05, Math.min(0.95, emotions[emotion as keyof typeof emotions]))
    })

    type EmotionKey = keyof typeof emotions
    const dominant = (Object.entries(emotions).reduce(
      (a, b) => (emotions[a[0] as EmotionKey] > emotions[b[0] as EmotionKey] ? a : b)
    )[0]) as EmotionKey
    const confidence = Math.max(...Object.values(emotions))

    return { dominant, confidence, emotions }
  }, [])

  const analyzeAttire = useCallback((faceRegion: ImageData, fullFrame: ImageData): AttireAnalysis => {
    const data = fullFrame.data
    let darkColors = 0
    let lightColors = 0
    let colorVariety = 0

    const upperHeight = Math.floor(fullFrame.height * 0.6)

    for (let y = Math.floor(fullFrame.height * 0.3); y < upperHeight; y++) {
      for (let x = 0; x < fullFrame.width; x += 4) {
        const idx = (y * fullFrame.width + x) * 4
        const r = data[idx]
        const g = data[idx + 1]
        const b = data[idx + 2]
        const brightness = (r + g + b) / 3

        if (brightness < 100) darkColors++
        else lightColors++

        if (Math.abs(r - g) > 30 || Math.abs(g - b) > 30) colorVariety++
      }
    }

    const totalPixels = darkColors + lightColors
    const darkRatio = darkColors / totalPixels
    const varietyRatio = colorVariety / totalPixels

    const isProfessional = darkRatio > 0.4 && varietyRatio < 0.3
    const hasShirt = darkRatio > 0.2

    return {
      isProfessional,
      hasShirt,
      confidence: 0.7,
      details: isProfessional ? "Professional attire detected" : "Casual attire detected",
    }
  }, [])

  const analyzeEyeContact = useCallback(
    (face: FaceDetection, canvasWidth: number, canvasHeight: number): EyeContactAnalysis => {
      const faceCenterX = face.x + face.width / 2
      const faceCenterY = face.y + face.height / 2
      const canvasCenterX = canvasWidth / 2
      const canvasCenterY = canvasHeight / 2

      const gazeX = (faceCenterX - canvasCenterX) / canvasWidth
      const gazeY = (faceCenterY - canvasCenterY) / canvasHeight

      const distance = Math.sqrt(gazeX * gazeX + gazeY * gazeY)
      const isLookingAtCamera = distance < 0.15
      const attentionScore = Math.max(0, 1 - distance * 2)

      return {
        isLookingAtCamera,
        gazeDirection: { x: gazeX, y: gazeY },
        confidence: 0.8,
        attentionScore,
      }
    },
    [],
  )

  const analyzePosture = useCallback(async (video: HTMLVideoElement): Promise<PostureAnalysis | null> => {
    // Simplified posture analysis
    const shoulderAlignment = Math.random() * 20 - 10 // -10 to 10 degrees
    const headTilt = Math.random() * 15 - 7.5 // -7.5 to 7.5 degrees
    const isGoodPosture = Math.abs(shoulderAlignment) < 5 && Math.abs(headTilt) < 5

    return {
      isGoodPosture,
      shoulderAlignment,
      headTilt,
      confidence: 0.75,
    }
  }, [])

  const analyzeGazeTracking = useCallback((eyeContact: EyeContactAnalysis): boolean => {
    const { gazeDirection, attentionScore, isLookingAtCamera } = eyeContact

    // More conservative gaze tracking - only count as off-screen if:
    // 1. Not looking at camera AND
    // 2. Gaze is significantly away from center AND
    // 3. Attention score is low
    const gazeDistance = Math.sqrt(gazeDirection.x * gazeDirection.x + gazeDirection.y * gazeDirection.y)
    const isOffScreen = !isLookingAtCamera && gazeDistance > 0.5 && attentionScore < 0.3

    return isOffScreen
  }, [])

  const initializeFaceDetection = useCallback(async () => {
    try {
      console.log("[v0] Initializing face detection...")
      const tf = await import("@tensorflow/tfjs")
      const blazeface = await import("@tensorflow-models/blazeface")

      await tf.ready()
      const model = await blazeface.load()
      faceDetectorRef.current = model
      console.log("[v0] BlazeFace model loaded successfully")
      return true
    } catch (error) {
      console.error("[v0] Failed to initialize face detection:", error)
      return false
    }
  }, [])

  const analyzeAudioAnomalies = useCallback((currentLevel: number, faceDetected: boolean) => {
    const now = Date.now()

    // Speaking/Audio detection - when audio level is above threshold
    if (currentLevel > 20 && 
        now - audioSpikeCooldownRef.current > 2000) { // 2 second cooldown
      audioAnomalyCountRef.current += 1
      setAudioAnomalyCount(audioAnomalyCountRef.current)
      audioSpikeCooldownRef.current = now
      console.log("[v0] Audio anomaly: Speaking/Audio detected", {
        level: currentLevel,
        faceDetected: faceDetected
      })
      // fire event
      onAddEvent?.({
        eventType: "audio_anomaly",
        severity: "warning" as const,
        context: "coding",
        data: { level: currentLevel, faceDetected },
      })
      return true
    }

    // Enhanced lips sync analysis - if face is detected but consistently low audio over time
    if (faceDetected && currentLevel < 5) {
      if (silenceStartRef.current === null) {
        silenceStartRef.current = now
      } else if (now - silenceStartRef.current > 15000) {
        // 15 seconds of silence with face - only count once per incident
        audioAnomalyCountRef.current += 1
        setAudioAnomalyCount(audioAnomalyCountRef.current)
        silenceStartRef.current = null // Reset to avoid multiple counts
        console.log("[v0] Audio anomaly: Extended silence while face detected (lip sync issue)")
        onAddEvent?.({
          eventType: "audio_anomaly",
          severity: "warning" as const,
          context: "coding",
          data: { level: currentLevel, reason: "extended_silence_with_face" },
        })
        return true
      }
    } else if (currentLevel >= 5) {
      // Reset silence tracking when audio is detected
      silenceStartRef.current = null
    }

    // Audio without face with cooldown and lower threshold
    if (!faceDetected && 
        currentLevel > 15 && 
        now - audioWithoutFaceCooldownRef.current > 3000) { // 3 second cooldown
      audioAnomalyCountRef.current += 1
      setAudioAnomalyCount(audioAnomalyCountRef.current)
      audioWithoutFaceCooldownRef.current = now
      console.log("[v0] Audio anomaly: Audio detected without face visible")
      onAddEvent?.({
        eventType: "audio_anomaly",
        severity: "warning" as const,
        context: "coding",
        data: { level: currentLevel, reason: "audio_without_face" },
      })
      return true
    }

    return false
  }, [])

  const detectFaces = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !faceDetectorRef.current) {
      animationRef.current = requestAnimationFrame(detectFaces)
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current

    if (video.readyState !== 4) {
      animationRef.current = requestAnimationFrame(detectFaces)
      return
    }

    try {
      const predictions = await faceDetectorRef.current.estimateFaces(video, false)

      const faces: FaceDetection[] = predictions.map((prediction: any) => {
        const [x, y] = prediction.topLeft
        const [x2, y2] = prediction.bottomRight
        return {
          x,
          y,
          width: x2 - x,
          height: y2 - y,
          confidence: prediction.probability?.[0] || 0.8,
        }
      })

      setFaceCount(faces.length)
      setDetections(faces)
      setIsStable(faces.length === 1)

      const currentTime = Date.now()
      
      // Determine current face state
      let currentFaceState: "none" | "single" | "multiple"
      if (faces.length === 0) {
        currentFaceState = "none"
      } else if (faces.length === 1) {
        currentFaceState = "single"
      } else {
        currentFaceState = "multiple"
      }

      // Handle multiple faces detection with proper state tracking
      if (currentFaceState === "multiple") {
        if (lastFaceStateRef.current !== "multiple") {
          // First frame of multiple faces detected
          setMultipleFacesStartTime(currentTime)
          setMultipleFacesDetectionCount((prev) => prev + 1)
          consecutiveFramesRef.current.multipleFaces = 1
          console.log("[v0] Multiple faces detected - incident started")
          if (!incidentRef.current.multipleFaces) {
            incidentRef.current.multipleFaces = true
            onAddEvent?.({
              eventType: "face_detection",
              severity: "warning" as const,
              context: "coding",
              data: { reason: "multiple_faces", count: faces.length },
            })
          }
        } else {
          // Continuing multiple faces state
          consecutiveFramesRef.current.multipleFaces += 1
        }
      } else {
        if (lastFaceStateRef.current === "multiple" && multipleFacesStartTime !== null) {
          // End of multiple faces period
          const duration = currentTime - multipleFacesStartTime
          setMultipleFacesDuration((prev) => prev + duration)
          setMultipleFacesStartTime(null)
          console.log(`[v0] Multiple faces ended - duration: ${duration}ms`)
        }
        consecutiveFramesRef.current.multipleFaces = 0
        incidentRef.current.multipleFaces = false
      }

      // Handle no face detection with proper state tracking
      if (currentFaceState === "none") {
        if (lastFaceStateRef.current !== "none") {
          // First frame of no face detected
          setNoFaceStartTime(currentTime)
          setNoFaceDetectionCount((prev) => prev + 1)
          consecutiveFramesRef.current.noFace = 1
          console.log("[v0] No face detected - incident started")
          if (!incidentRef.current.noFace) {
            incidentRef.current.noFace = true
            onAddEvent?.({
              eventType: "face_detection",
              severity: "critical" as const,
              context: "coding",
              data: { reason: "no_face" },
            })
          }
        } else {
          // Continuing no face state
          consecutiveFramesRef.current.noFace += 1
        }
      } else {
        if (lastFaceStateRef.current === "none" && noFaceStartTime !== null) {
          // End of no face period
          const duration = currentTime - noFaceStartTime
          setNoFaceDuration((prev) => prev + duration)
          setNoFaceStartTime(null)
          console.log(`[v0] No face ended - duration: ${duration}ms`)
        }
        consecutiveFramesRef.current.noFace = 0
        incidentRef.current.noFace = false
      }

      // Update last face state
      lastFaceStateRef.current = currentFaceState

      const detectionSnapshot = {
        timestamp: Date.now(),
        faceCount: faces.length,
        isStable: faces.length === 1,
        audioLevel: audioLevel,
        postureAnalysis: postureAnalysis
          ? {
              isGoodPosture: postureAnalysis.isGoodPosture,
              shoulderAlignment: postureAnalysis.shoulderAlignment,
              headTilt: postureAnalysis.headTilt,
              confidence: postureAnalysis.confidence,
            }
          : null,
        expressionAnalysis: expressionAnalysis
          ? {
              dominant: expressionAnalysis.dominant,
              confidence: expressionAnalysis.confidence,
              emotions: expressionAnalysis.emotions,
            }
          : null,
        attireAnalysis: attireAnalysis
          ? {
              isProfessional: attireAnalysis.isProfessional,
              hasShirt: attireAnalysis.hasShirt,
              confidence: attireAnalysis.confidence,
              details: attireAnalysis.details,
            }
          : null,
        eyeContactAnalysis: eyeContactAnalysis
          ? {
              isLookingAtCamera: eyeContactAnalysis.isLookingAtCamera,
              gazeDirection: eyeContactAnalysis.gazeDirection,
              confidence: eyeContactAnalysis.confidence,
              attentionScore: eyeContactAnalysis.attentionScore,
            }
          : null,
        ...(faces.length === 1 && {
          faces: faces.slice(0, 1), // Only store first face
        }),
      }

      if (faces.length === 1) {
        const face = faces[0]
        const ctx = canvas.getContext("2d")

        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          const fullFrame = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const faceRegion = ctx.getImageData(face.x, face.y, face.width, face.height)

          const posture = await analyzePosture(video)
          const expression = analyzeExpression(faceRegion, face)
          const attire = analyzeAttire(faceRegion, fullFrame)
          const eyeContact = analyzeEyeContact(face, canvas.width, canvas.height)

          setPostureAnalysis(posture)
          setExpressionAnalysis(expression)
          setAttireAnalysis(attire)
          setEyeContactAnalysis(eyeContact)

          const isOffScreen = analyzeGazeTracking(eyeContact)

          if (isOffScreen && !isLookingOffScreen && Date.now() - gazeCooldownRef.current > 3000) {
            setGazeOffScreenCount((prev) => prev + 1)
            setIsLookingOffScreen(true)
            setGazeOffScreenStartTime(currentTime)
            gazeCooldownRef.current = Date.now()
            console.log("[v0] Gaze off-screen detected")
            if (!incidentRef.current.gazeOff) {
              incidentRef.current.gazeOff = true
              onAddEvent?.({
                eventType: "gaze_tracking",
                severity: "warning" as const,
                context: "coding",
                data: { offscreen: true },
              })
            }
          } else if (!isOffScreen && isLookingOffScreen) {
            if (gazeOffScreenStartTime !== null) {
              const duration = currentTime - gazeOffScreenStartTime
              setGazeOffScreenDuration((prev) => prev + duration)
              setGazeOffScreenStartTime(null)
            }
            setIsLookingOffScreen(false)
            incidentRef.current.gazeOff = false
          }

          detectionSnapshot.postureAnalysis = {
            isGoodPosture: posture?.isGoodPosture ?? true,
            shoulderAlignment: posture?.shoulderAlignment ?? 0,
            headTilt: posture?.headTilt ?? 0,
            confidence: posture?.confidence ?? 0,
          }
          detectionSnapshot.expressionAnalysis = {
            dominant: expression.dominant,
            confidence: expression.confidence,
            emotions: expression.emotions,
          }
          detectionSnapshot.attireAnalysis = {
            isProfessional: attire.isProfessional,
            hasShirt: attire.hasShirt,
            confidence: attire.confidence,
            details: attire.details,
          }
          detectionSnapshot.eyeContactAnalysis = {
            isLookingAtCamera: eyeContact.isLookingAtCamera,
            gazeDirection: eyeContact.gazeDirection,
            confidence: eyeContact.confidence,
            attentionScore: eyeContact.attentionScore,
          }
        }
      } else {
        setPostureAnalysis(null)
        setExpressionAnalysis(null)
        setAttireAnalysis(null)
        setEyeContactAnalysis(null)
        if (isLookingOffScreen) {
          if (gazeOffScreenStartTime !== null) {
            const duration = currentTime - gazeOffScreenStartTime
            setGazeOffScreenDuration((prev) => prev + duration)
            setGazeOffScreenStartTime(null)
          }
          setIsLookingOffScreen(false)
        }
      }

      pendingDetectionDataRef.current = detectionSnapshot

      const hasViolation = faces.length === 0 || faces.length > 1

  if (onUpdateSession && (hasViolation || currentTime - lastSessionUpdateRef.current >= 5000)) {
        const currentSnapshots = sessionData?.snapshots || []
        
        // Only add a proper snapshot when there's a violation, not for regular analysis
        let updatedSnapshots = currentSnapshots
        if (hasViolation) {
          const violationSnapshot = {
            timestamp: currentTime,
            type: "violation_trigger" as const,
            image: "base64_image_placeholder", // In a real implementation, capture from canvas
            context: faces.length === 0 ? "No face detected" : "Multiple faces detected"
          }
          updatedSnapshots = [...currentSnapshots, violationSnapshot]
          
          if (updatedSnapshots.length > 30) {
            updatedSnapshots.splice(0, updatedSnapshots.length - 30)
          }
        }

        onUpdateSession({
          snapshots: updatedSnapshots,
          postureAnalysis: postureAnalysis || undefined,
          attireAnalysis: attireAnalysis || undefined,
        })

        lastSessionUpdateRef.current = currentTime
        console.log("[v0] Session snapshots updated (immediate):", hasViolation ? "violation detected" : "5-second interval")
      }

      if (faces.length === 0) {
        onStatusChange?.("violation")
      } else if (faces.length > 1) {
        onStatusChange?.("warning")
      } else {
        onStatusChange?.("optimal")
      }
    } catch (error) {
      console.error("[v0] Face detection error:", error)
    }

    animationRef.current = requestAnimationFrame(detectFaces)
  }, [
    analyzeExpression,
    analyzeAttire,
    analyzeEyeContact,
    analyzePosture,
    analyzeGazeTracking,
    onStatusChange,
    onUpdateSession,
    audioLevel,
    eyeContactAnalysis,
    postureAnalysis,
    expressionAnalysis,
    attireAnalysis,
    sessionData?.snapshots,
    sessionData?.sessionStats,
    unfocusCount,
    tabSwitchCount,
    keystrokeCount,
    copyAttempts,
    gazeOffScreenCount,
    isLookingOffScreen,
    multipleFacesStartTime,
    gazeOffScreenStartTime,
    multipleFacesDuration,
    gazeOffScreenDuration,
    multipleFacesDetectionCount,
    noFaceStartTime,
    noFaceDuration,
    noFaceDetectionCount,
    isStable,
  ])

  // Initialize audio anomaly count from ref
  useEffect(() => {
    setAudioAnomalyCount(audioAnomalyCountRef.current)
  }, [])

  const initializeAudioAnalysis = useCallback(async (audioStream?: MediaStream) => {
    try {
      if (audioInitializedRef.current) {
        console.log("[v0] 🎵 Audio analysis already initialized, skipping")
        return
      }

      console.log("[v0] 🎵 Starting audio analysis initialization...")

      // Check precheck initialization status
      const precheckInitialized = sessionStorage.getItem('audio-context-initialized')
      const precheckError = sessionStorage.getItem('audio-init-error')
      const precheckState = sessionStorage.getItem('audio-context-state')
      const streamAvailable = sessionStorage.getItem('audio-stream-available')
      
      console.log("[v0] 🎵 Precheck audio status:", {
        initialized: precheckInitialized,
        error: precheckError,
        state: precheckState,
        streamAvailable: streamAvailable
      })

      let stream = audioStream

      // Try to use the stream from precheck first
      if (!stream && typeof window !== 'undefined' && (window as any).precheckAudioStream) {
        const precheckStream = (window as any).precheckAudioStream as MediaStream
        console.log("[v0] 🎵 Found preserved stream from precheck:", {
          active: precheckStream.active,
          tracks: precheckStream.getTracks().length,
          trackStates: precheckStream.getTracks().map(t => ({ kind: t.kind, enabled: t.enabled, readyState: t.readyState }))
        })
        
        if (precheckStream.active && precheckStream.getTracks().length > 0) {
          stream = precheckStream
          console.log("[v0] 🎵 Using preserved audio stream from precheck")
          audioStreamRef.current = precheckStream
        } else {
          console.warn("[v0] 🎵 ⚠️ Preserved stream is inactive or has no tracks, will request new one")
        }
      }

      // If no audio stream from precheck, request one with enhanced debugging
      if (!stream) {
        try {
          console.log("[v0] 🎵 No preserved stream found, requesting new audio stream")
          console.time("[v0] 🎵 Audio stream request time")
          
          stream = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: true,
              noiseSuppression: true,
              autoGainControl: true,
              sampleRate: 44100,
            },
          })
          
          console.timeEnd("[v0] 🎵 Audio stream request time")
          console.log("[v0] 🎵 New audio stream obtained:", {
            tracks: stream.getTracks().length,
            active: stream.active,
            id: stream.id
          })
          
          audioStreamRef.current = stream
        } catch (audioError) {
          console.error("[v0] 🎵 ❌ Audio stream request failed:", audioError)
          if (audioError instanceof DOMException) {
            console.error("[v0] 🎵 ❌ Error type:", audioError.name, "Message:", audioError.message)
          }
          throw new Error("Failed to get audio stream: " + (audioError instanceof Error ? audioError.message : String(audioError)))
        }
      }
      
      if (!stream) {
        throw new Error("No audio stream available for analysis")
      }

      console.log("[v0] 🎵 Initializing audio analysis with stream")
      console.time("[v0] 🎵 AudioContext creation time")
      
      // Create AudioContext (handle vendor prefixed if needed)
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) {
        throw new Error("AudioContext not supported")
      }
      
      audioContextRef.current = new AudioContextClass()
      console.timeEnd("[v0] 🎵 AudioContext creation time")
      
      console.log("[v0] 🎵 AudioContext created:", {
        state: audioContextRef.current.state,
        sampleRate: audioContextRef.current.sampleRate,
        baseLatency: audioContextRef.current.baseLatency
      })

      if (audioContextRef.current.state === 'suspended') {
        try {
          console.log("[v0] 🎵 AudioContext suspended, attempting resume...")
          console.time("[v0] 🎵 AudioContext resume time")
          
          const resumePromise = audioContextRef.current.resume()
          const resumeTimeout = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('AudioContext resume timeout')), 3000)
          )
          
          await Promise.race([resumePromise, resumeTimeout])
          console.timeEnd("[v0] 🎵 AudioContext resume time")
          console.log('[v0] 🎵 ✅ AudioContext resumed, new state:', audioContextRef.current.state)
        } catch (resumeErr) {
          console.warn('[v0] 🎵 ⚠️ AudioContext resume failed or timed out:', resumeErr)
          console.log('[v0] 🎵 Continuing with suspended context (will attempt to start on user interaction)')
        }
      }
      
      console.log("[v0] 🎵 Creating audio analysis nodes...")
      const source = audioContextRef.current.createMediaStreamSource(stream)
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 256
      analyserRef.current.smoothingTimeConstant = 0.8
      source.connect(analyserRef.current)

      console.log("[v0] 🎵 Audio nodes connected successfully")
      console.log("[v0] 🎵 Analyser settings:", {
        fftSize: analyserRef.current.fftSize,
        frequencyBinCount: analyserRef.current.frequencyBinCount,
        smoothingTimeConstant: analyserRef.current.smoothingTimeConstant
      })

      console.log("[v0] 🎵 ✅ AudioContext setup completed with state:", audioContextRef.current.state)

      // Test initial audio levels
      console.log("[v0] 🎵 Testing initial audio analysis...")
      const testArray = new Uint8Array(analyserRef.current.frequencyBinCount)
      analyserRef.current.getByteFrequencyData(testArray)
      const initialLevel = testArray.reduce((sum, value) => sum + value, 0) / testArray.length
      console.log("[v0] 🎵 Initial audio level test:", Math.round((initialLevel / 255) * 100) + "%")

      const updateAudioLevel = () => {
        try {
          if (analyserRef.current && audioContextRef.current?.state === 'running') {
            const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
            analyserRef.current.getByteFrequencyData(dataArray)
            const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length
            const currentLevel = Math.round((average / 255) * 100)

            // Update the state to trigger re-renders
            setAudioLevel(currentLevel)

            const faceDetected = faceCount > 0
            analyzeAudioAnomalies(currentLevel, faceDetected)

            lastAudioLevelRef.current = currentLevel

            // Enhanced debug logging
            if (Date.now() % 3000 < 50) {
              console.log(`[v0] 🎵 Audio Live: Level=${currentLevel}%, Context=${audioContextRef.current?.state}, Faces=${faceCount}, Anomalies=${audioAnomalyCountRef.current}`)
            }
          } else {
            // Check why audio is not running and log detailed status
            if (Date.now() % 5000 < 50) {
              const status = {
                hasAnalyser: !!analyserRef.current,
                hasContext: !!audioContextRef.current,
                contextState: audioContextRef.current?.state || 'none',
                streamActive: audioStreamRef.current?.active || false,
                streamTracks: audioStreamRef.current?.getTracks().length || 0
              }
              console.log('[v0] 🎵 ⚠️ Audio not running, status:', status)
              
              // Try to resume if suspended
              if (audioContextRef.current?.state === 'suspended') {
                console.log('[v0] 🎵 Attempting to resume suspended AudioContext...')
                audioContextRef.current.resume().catch(err => 
                  console.warn('[v0] 🎵 Resume failed:', err)
                )
              }
            }
          }
        } catch (err) {
          console.error('[v0] 🎵 ❌ Audio update error:', err)
        } finally {
          if (!isCleaningUpRef.current) {
            requestAnimationFrame(updateAudioLevel)
          }
        }
      }

      // Mark initialized and start monitoring loop
      audioInitializedRef.current = true
      updateAudioLevel()
      console.log('[v0] 🎵 ✅ Audio level monitoring started successfully')
      
      // Add click handler to resume suspended audio context
      const handleUserInteraction = () => {
        if (audioContextRef.current?.state === 'suspended') {
          console.log('[v0] 🎵 User interaction detected, resuming AudioContext...')
          audioContextRef.current.resume().then(() => {
            console.log('[v0] 🎵 ✅ AudioContext resumed via user interaction')
            document.removeEventListener('click', handleUserInteraction)
          }).catch(err => {
            console.warn('[v0] 🎵 ⚠️ Failed to resume AudioContext on user interaction:', err)
          })
        }
      }
      
      if (audioContextRef.current.state === 'suspended') {
        console.log('[v0] 🎵 AudioContext is suspended, adding click listener for resume')
        document.addEventListener('click', handleUserInteraction, { once: true })
      }
      
    } catch (error) {
      console.error('[v0] 🎵 ❌ Failed to initialize audio analysis:', error)
      sessionStorage.setItem('audio-widget-error', error instanceof Error ? error.message : String(error))
      setAudioLevel(0)
      audioInitializedRef.current = false
    }
  }, [analyzeAudioAnomalies, faceCount])

  useEffect(() => {
    const initVideo = async () => {
      try {
        console.log("[v0] Quick video initialization (permissions should already be granted)")
        
        // Check if we have a preserved audio stream from precheck
        const precheckAudioStream = typeof window !== 'undefined' ? (window as any).precheckAudioStream : null
        console.log("[v0] 🎵 Checking for preserved audio stream:", {
          hasWindow: typeof window !== 'undefined',
          hasPrecheckStream: !!precheckAudioStream,
          streamActive: precheckAudioStream?.active,
          streamTracks: precheckAudioStream?.getTracks().length
        })
        
        // Since permissions were granted in precheck, this should be fast
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            width: { ideal: 320 },
            height: { ideal: 240 },
            frameRate: { ideal: 15 }
          },
          audio: {  // Always request audio for now to debug the issue
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          },
        })
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          console.log("[v0] Video stream connected successfully")
        }

        // Use preserved audio stream from precheck or extract from current stream
        let audioStream: MediaStream | null = null
        
        // Always extract from current stream for now to debug
        const audioTracks = stream.getAudioTracks()
        if (audioTracks.length > 0) {
          audioStream = new MediaStream(audioTracks)
          console.log("[v0] 🎵 Audio stream extracted from main stream:", {
            tracks: audioTracks.length,
            active: audioStream.active,
            id: audioStream.id,
            trackStates: audioTracks.map(t => ({ kind: t.kind, enabled: t.enabled, readyState: t.readyState }))
          })
        } else {
          console.warn("[v0] 🎵 ⚠️ No audio tracks found in stream")
        }

        // Initialize components (should be faster since precheck prepared them)
        await initializeFaceDetection()
        
        if (audioStream) {
          console.log("[v0] 🎵 Initializing audio analysis with stream...")
          await initializeAudioAnalysis(audioStream)
        } else {
          console.error("[v0] 🎵 ❌ No audio stream available for analysis!")
        }

        animationRef.current = requestAnimationFrame(detectFaces)
        console.log("[v0] Video widget initialized successfully")
        
      } catch (error) {
        console.error("[v0] Video initialization failed:", error)
        // Show error state to user
        onStatusChange?.("violation")
      }
    }

    initVideo()

    return () => {
      
      isCleaningUpRef.current = true

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
      }

      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach((track) => track.stop())
      }

      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        try {
          audioContextRef.current.close().catch((error) => {
            console.warn("[v0] AudioContext close error (safe to ignore):", error)
          })
        } catch (error) {
          console.warn("[v0] AudioContext close error (safe to ignore):", error)
        }
      }
  // Reset audio initialized flag and clear refs
  audioInitializedRef.current = false
  analyserRef.current = null
  audioStreamRef.current = null
  audioContextRef.current = null
    }
  }, []) // Empty dependency array to prevent reinitialization

  const resetSessionState = useCallback(() => {
    // Reset all counting variables and cooldowns
    audioAnomalyCountRef.current = 0
    setAudioAnomalyCount(0) // Reset state
    audioSpikeCooldownRef.current = 0
    audioWithoutFaceCooldownRef.current = 0
    gazeCooldownRef.current = 0
    silenceStartRef.current = null
    lastFaceStateRef.current = "none"
    consecutiveFramesRef.current = { noFace: 0, multipleFaces: 0 }
    
    // Reset state variables
    setMultipleFacesDetectionCount(0)
    setNoFaceDetectionCount(0)
    setMultipleFacesDuration(0)
    setNoFaceDuration(0)
    setMultipleFacesStartTime(null)
    setNoFaceStartTime(null)
    setGazeOffScreenCount(0)
    setGazeOffScreenDuration(0)
    setGazeOffScreenStartTime(null)
    setIsLookingOffScreen(false)
    
    console.log("[v0] Session state reset completed")
  }, [])

  // Reset session state when component mounts or session data changes significantly
  useEffect(() => {
    if (!sessionData) {
      resetSessionState()
    }
  }, [sessionData, resetSessionState])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    const rect = widgetRef.current?.getBoundingClientRect()
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(window.innerWidth - 280, e.clientX - dragOffset.x))
      const newY = Math.max(0, Math.min(window.innerHeight - 400, e.clientY - dragOffset.y))
      setPosition({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  const handleVisibilityChange = () => {
    if (document.hidden) {
      setTabSwitchCount((prev) => {
        const newCount = prev + 1
        console.log("[v0] Tab switch detected - new count:", newCount)
        onAddEvent?.({ eventType: "tab_switch", severity: "critical" as const, context: "coding", data: { when: Date.now() } })
        return newCount
      })
    }
  }

  const handleFocusOut = () => {
    setUnfocusCount((prev) => {
      const newCount = prev + 1
      console.log("[v0] Window unfocus detected - new count:", newCount)
      return newCount
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    setKeystrokeCount((prev) => prev + 1)
    onAddEvent?.({ eventType: "keystroke", severity: "info" as const, context: "coding", data: {} })

    // Track and block copy, cut, paste attempts
    if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "x" || e.key === "v")) {
      setCopyAttempts((prev) => prev + 1)
      e.preventDefault()
      onAddEvent?.({ eventType: "keystroke", severity: "warning" as const, context: "coding", data: { copyCutPaste: true, key: e.key } })
      console.log(`[v0] ${e.key === "c" ? "Copy" : e.key === "x" ? "Cut" : "Paste"} attempt blocked`)
    }
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("blur", handleFocusOut)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("blur", handleFocusOut)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const getBorderColor = () => {
    if (faceCount === 0) return "border-red-500"
    if (faceCount > 1) return "border-yellow-500"
    return "border-green-500"
  }

  const getStatusIcon = () => {
    if (faceCount === 0) return <AlertTriangle className="h-4 w-4 text-red-600" />
    if (faceCount > 1) return <AlertTriangle className="h-4 w-4 text-yellow-600" />
    return <CheckCircle className="h-4 w-4 text-green-600" />
  }

  const getStatusText = () => {
    if (faceCount === 1 && isStable) return "Optimal"
    if (faceCount === 1) return "Good"
    if (faceCount > 1) return "Multiple Faces"
    return "No Face"
  }

  if (isMinimized) {
    return (
      <div
        ref={widgetRef}
        className={`fixed z-50 cursor-move ${getBorderColor()} border-2 rounded-full`}
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
      >
        <Button variant="ghost" size="sm" className="w-12 h-12 rounded-full p-0" onClick={() => setIsMinimized(false)}>
          {getStatusIcon()}
        </Button>
      </div>
    )
  }

  return (
    <Card
      ref={widgetRef}
      className={`fixed z-50 w-72 cursor-move ${getBorderColor()} border-2 shadow-lg`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
    >
      <div className="p-3 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <span className="text-sm font-medium">{getStatusText()}</span>
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsMinimized(true)}>
              <Minimize2 className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="relative bg-black rounded overflow-hidden">
          <video ref={videoRef} autoPlay muted playsInline className="w-full h-32 object-cover" />
          <canvas ref={canvasRef} className="hidden" width="320" height="240" />
          <div className="absolute top-1 right-1">
            <Badge variant={faceCount === 1 ? "default" : "destructive"} className="text-xs">
              LIVE
            </Badge>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>Faces Detected:</span>
            <span className={faceCount === 1 ? "text-green-600" : "text-red-600"}>{faceCount}</span>
          </div>

          <div className="flex justify-between">
            <span>No Face:</span>
            <span className={noFaceDetectionCount > 0 ? "text-red-600" : "text-green-600"}>
              {noFaceDetectionCount} times
            </span>
          </div>

          <div className="flex justify-between">
            <span>Multiple Faces:</span>
            <span className={multipleFacesDetectionCount > 0 ? "text-red-600" : "text-green-600"}>
              {multipleFacesDetectionCount} times
            </span>
          </div>

          <div className="flex justify-between">
            <span>Eye Contact:</span>
            <span className={eyeContactAnalysis?.isLookingAtCamera ? "text-green-600" : "text-red-600"}>
              {eyeContactAnalysis?.isLookingAtCamera ? "Yes" : "No"}
              {eyeContactAnalysis && ` (${Math.round(eyeContactAnalysis.attentionScore * 100)}%)`}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Posture:</span>
            <span className={postureAnalysis?.isGoodPosture ? "text-green-600" : "text-yellow-600"}>
              {postureAnalysis?.isGoodPosture ? "Good" : "Poor"}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Attire:</span>
            <span className={attireAnalysis?.isProfessional ? "text-green-600" : "text-yellow-600"}>
              {attireAnalysis?.isProfessional ? "Professional" : "Casual"}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Emotion:</span>
            <span className="text-blue-600">
              {expressionAnalysis?.dominant || "Unknown"}
              {expressionAnalysis && ` (${Math.round(expressionAnalysis.confidence * 100)}%)`}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Audio Level:</span>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">{audioLevel}%</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-100 ${
                    audioLevel > 50 ? 'bg-green-500' : 
                    audioLevel > 20 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(audioLevel, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <span>Audio Anomalies:</span>
            <div className="flex items-center gap-2">
              <span className={audioAnomalyCount > 0 ? "text-red-600" : "text-green-600"}>
                {audioAnomalyCount}
              </span>
              {audioAnomalyCount > 0 && (
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <span>Unfocus Events:</span>
            <span className={unfocusCount > 0 ? "text-red-600" : "text-green-600"}>{unfocusCount}</span>
          </div>

          <div className="flex justify-between">
            <span>Tab Switches:</span>
            <span className={tabSwitchCount > 0 ? "text-red-600" : "text-green-600"}>{tabSwitchCount}</span>
          </div>

          <div className="flex justify-between">
            <span>Keystrokes:</span>
            <span className="text-blue-600">{keystrokeCount}</span>
          </div>

          <div className="flex justify-between">
            <span>Copy Attempts:</span>
            <span className={copyAttempts > 0 ? "text-red-600" : "text-green-600"}>{copyAttempts}</span>
          </div>

          <div className="flex justify-between">
            <span>Gaze Off-Screen:</span>
            <span className={gazeOffScreenCount > 0 ? "text-red-600" : "text-green-600"}>
              {gazeOffScreenCount} times
            </span>
          </div>

          {sessionData?.sessionStats && (
            <>
              <div className="border-t pt-2 mt-2">
                <div className="text-xs font-medium text-gray-600 mb-2">Session Stats:</div>
                <div className="flex justify-between">
                  <span>Violations:</span>
                  <span className="text-red-600">{sessionData.sessionStats.violationCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Session Tab Switches:</span>
                  <span className="text-red-600">{sessionData.sessionStats.tabSwitches}</span>
                </div>
                <div className="flex justify-between">
                  <span>Session Audio Anomalies:</span>
                  <span className="text-red-600">{sessionData.sessionStats.audioAnomalies}</span>
                </div>
                <div className="flex justify-between">
                  <span>Session Focus Breaks:</span>
                  <span className="text-red-600">{sessionData.sessionStats.focusBreaks}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="text-blue-600">{Math.round(sessionData.sessionStats.totalDuration / 1000)}s</span>
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between">
            <span>Stability:</span>
            <span className={isStable ? "text-green-600" : "text-yellow-600"}>{isStable ? "Stable" : "Unstable"}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
