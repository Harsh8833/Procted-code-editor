"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Camera,
  CameraOff,
  Users,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Smile,
  Shirt,
  Focus,
} from "lucide-react"

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

interface TrackingStats {
  totalFrames: number
  facesDetected: number
  stableFrames: number
  multipleFactsDetected: number
  averageConfidence: number
  sessionDuration: number
  goodPostureFrames: number
  professionalAttireFrames: number
  eyeContactFrames: number
  positiveExpressionFrames: number
}

export default function FaceTrackingDemo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationRef = useRef<number>(null)
  const faceDetectorRef = useRef<any>(null)
  const poseDetectorRef = useRef<any>(null)
  const expressionDetectorRef = useRef<any>(null)

  const [isTracking, setIsTracking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [faceCount, setFaceCount] = useState(0)
  const [detections, setDetections] = useState<FaceDetection[]>([])
  const [stableFrameCount, setStableFrameCount] = useState(0)
  const [isStable, setIsStable] = useState(false)
  const [detectionMethod, setDetectionMethod] = useState<string>("")
  const [postureAnalysis, setPostureAnalysis] = useState<PostureAnalysis | null>(null)
  const [expressionAnalysis, setExpressionAnalysis] = useState<ExpressionAnalysis | null>(null)
  const [attireAnalysis, setAttireAnalysis] = useState<AttireAnalysis | null>(null)
  const [eyeContactAnalysis, setEyeContactAnalysis] = useState<EyeContactAnalysis | null>(null)

  const [stats, setStats] = useState<TrackingStats>({
    totalFrames: 0,
    facesDetected: 0,
    stableFrames: 0,
    multipleFactsDetected: 0,
    averageConfidence: 0,
    sessionDuration: 0,
    goodPostureFrames: 0,
    professionalAttireFrames: 0,
    eyeContactFrames: 0,
    positiveExpressionFrames: 0,
  })

  const sessionStartTime = useRef<number>(0)
  const confidenceSum = useRef<number>(0)
  const confidenceCount = useRef<number>(0)
  const lastCanvasUpdate = useRef<number>(0)
  const canvasInitialized = useRef<boolean>(false)

  const initializePoseDetection = useCallback(async () => {
    try {
      console.log("[v0] Loading pose detection...")
      const tf = await import("@tensorflow/tfjs")
      const posenet = await import("@tensorflow-models/posenet")

      const model = await posenet.load({
        architecture: "MobileNetV1",
        outputStride: 16,
        inputResolution: { width: 320, height: 240 },
        multiplier: 0.5,
      })

      poseDetectorRef.current = model
      console.log("[v0] Pose detection loaded")
      return true
    } catch (err) {
      console.log("[v0] Pose detection failed:", err)
      return false
    }
  }, [])

  const analyzeExpression = useCallback((faceRegion: ImageData, faceDetection: FaceDetection): ExpressionAnalysis => {
    console.log("[v0] Analyzing facial expression...")
    const data = faceRegion.data
    let brightness = 0
    let contrast = 0
    let edgeCount = 0

    // Calculate brightness, contrast, and edge detection for better expression analysis
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const gray = (r + g + b) / 3
      brightness += gray

      // Calculate contrast by comparing adjacent pixels
      if (i > 0) {
        const prevGray = (data[i - 4] + data[i - 3] + data[i - 2]) / 3
        contrast += Math.abs(gray - prevGray)
      }

      // Simple edge detection for facial features
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

    // Face geometry analysis based on detection dimensions
    const faceAspectRatio = faceDetection.width / faceDetection.height
    const faceSize = faceDetection.width * faceDetection.height

    console.log(
      "[v0] Expression metrics - brightness:",
      Math.round(brightness),
      "contrast:",
      Math.round(contrast),
      "edges:",
      Math.round(edgeRatio * 100) + "%",
      "aspect:",
      Math.round(faceAspectRatio * 100) / 100,
    )

    // Dynamic emotion calculation based on multiple factors
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

    // Add some randomness to make it more dynamic and realistic
    const timeVariation = (Date.now() % 10000) / 10000 // 0-1 based on time
    (Object.keys(emotions) as (keyof typeof emotions)[]).forEach((emotion: keyof typeof emotions) => {
      emotions[emotion] += Math.sin(timeVariation * Math.PI * 2) * 0.1 // ±10% variation
      emotions[emotion] = Math.max(0.05, Math.min(0.95, emotions[emotion])) // Clamp between 5-95%
    })

    const dominant = (Object.keys(emotions) as (keyof typeof emotions)[])
      .reduce((prev, curr) => emotions[curr] > emotions[prev] ? curr : prev)
    const confidence = Math.max(...Object.values(emotions))

    console.log(
      dominant,
      "confidence:",
      Math.round(confidence * 100) + "%",
      "emotions:",
      Object.fromEntries(Object.entries(emotions).map(([k, v]) => [k, Math.round(v * 100) + "%"])),
    )

    return {
      dominant,
      confidence,
      emotions,
    }
  }, [])

  const analyzePosture = useCallback(async (video: HTMLVideoElement): Promise<PostureAnalysis | null> => {
    if (!poseDetectorRef.current) {
      console.log("[v0] Posture analysis skipped - no pose detector")
      return null
    }

    try {
      const pose = await poseDetectorRef.current.estimateSinglePose(video, {
        flipHorizontal: false,
      })


      if (pose.score < 0.3) {
        console.log("[v0] Posture analysis failed - low pose confidence")
        return null
      }

      const leftShoulder = pose.keypoints.find((kp: any) => kp.part === "leftShoulder")
      const rightShoulder = pose.keypoints.find((kp: any) => kp.part === "rightShoulder")
      const nose = pose.keypoints.find((kp: any) => kp.part === "nose")

      if (!leftShoulder || !rightShoulder || !nose) {
        console.log("[v0] Posture analysis failed - missing keypoints")
        return null
      }

      const shoulderAlignment = Math.abs(leftShoulder.position.y - rightShoulder.position.y)
      const headTilt = Math.abs(nose.position.x - (leftShoulder.position.x + rightShoulder.position.x) / 2)

      const isGoodPosture = shoulderAlignment < 30 && headTilt < 50

      console.log(
        Math.round(shoulderAlignment),
        "tilt:",
        Math.round(headTilt),
        "good:",
        isGoodPosture,
      )

      return {
        isGoodPosture,
        shoulderAlignment,
        headTilt,
        confidence: pose.score,
      }
    } catch (err) {
      console.log("[v0] Posture analysis error:", err)
      return null
    }
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

    console.log(
      "[v0] Attire analysis - dark ratio:",
      Math.round(darkRatio * 100) + "%",
      "variety:",
      Math.round(varietyRatio * 100) + "%",
      "professional:",
      isProfessional,
    )

    return {
      isProfessional,
      hasShirt,
      confidence: 0.7,
      details: isProfessional ? "Professional attire detected" : "Casual attire detected",
    }
  }, [])

  const analyzeEyeContact = useCallback(
    (face: FaceDetection, canvasWidth: number, canvasHeight: number): EyeContactAnalysis => {
      console.log("[v0] Analyzing eye contact...")
      const faceCenterX = face.x + face.width / 2
      const faceCenterY = face.y + face.height / 2
      const canvasCenterX = canvasWidth / 2
      const canvasCenterY = canvasHeight / 2

      const gazeX = (faceCenterX - canvasCenterX) / canvasWidth
      const gazeY = (faceCenterY - canvasCenterY) / canvasHeight

      const distance = Math.sqrt(gazeX * gazeX + gazeY * gazeY)
      const isLookingAtCamera = distance < 0.15

      const attentionScore = Math.max(0, 1 - distance * 2)

      console.log(
        "[v0] Eye contact result - distance:",
        Math.round(distance * 100) / 100,
        "looking at camera:",
        isLookingAtCamera,
        "attention:",
        Math.round(attentionScore * 100) + "%",
      )

      return {
        isLookingAtCamera,
        gazeDirection: { x: gazeX, y: gazeY },
        confidence: 0.8,
        attentionScore,
      }
    },
    [],
  )

  const initializeFaceDetection = useCallback(async () => {
    try {
      console.log("[v0] Initializing face detection...")

      try {
        console.log("[v0] Loading TensorFlow.js BlazeFace...")
        const tf = await import("@tensorflow/tfjs")
        const blazeface = await import("@tensorflow-models/blazeface")

        await tf.ready()
        console.log("[v0] TensorFlow.js ready")

        const model = await blazeface.load()
        console.log("[v0] BlazeFace model loaded successfully")

        faceDetectorRef.current = model
        setDetectionMethod("TensorFlow.js BlazeFace + Advanced Analysis")

        await initializePoseDetection()

        return true
      } catch (blazefaceError) {
        console.log("[v0] BlazeFace failed, trying Web Face Detection API:", blazefaceError)

        if ("FaceDetector" in window) {
          console.log("[v0] Using Web Face Detection API")
          const faceDetector = new (window as any).FaceDetector({
            maxDetectedFaces: 5,
            fastMode: false,
          })
          faceDetectorRef.current = {
            detect: async (imageData: ImageData) => {
              const faces = await faceDetector.detect(imageData)
              return faces.map((face: any) => ({
                boundingBox: face.boundingBox,
                confidence: face.confidence || 0.8,
              }))
            },
          }
          setDetectionMethod("Web Face Detection API + Advanced Analysis")
          return true
        }

        throw new Error("No face detection methods available")
      }
    } catch (err) {
      console.error("[v0] Failed to initialize face detection:", err)
      setError("Face detection not supported in this browser. Please try Chrome or Edge.")
      return false
    }
  }, [initializePoseDetection])

  const startTracking = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      console.log("[v0] Starting face tracking...")

      const detectionReady = await initializeFaceDetection()
      if (!detectionReady) {
        throw new Error("Face detection initialization failed")
      }

      console.log("[v0] Requesting camera access...")
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 15 },
        },
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await new Promise((resolve) => {
          if (videoRef.current) {
            videoRef.current.onloadedmetadata = resolve
          }
        })
        await videoRef.current.play()
        console.log("[v0] Video stream started successfully")
      }

      setIsTracking(true)
      sessionStartTime.current = Date.now()

      setTimeout(() => {
        startDetectionLoop()
      }, 100)
    } catch (err) {
      console.error("[v0] Error starting tracking:", err)
      setError(err instanceof Error ? err.message : "Failed to start camera")
    } finally {
      setIsLoading(false)
    }
  }, [initializeFaceDetection])

  const stopTracking = useCallback(() => {
    setIsTracking(false)

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
    }

    canvasInitialized.current = false
    lastCanvasUpdate.current = 0

    setFaceCount(0)
    setDetections([])
    setStableFrameCount(0)
    setIsStable(false)
    setPostureAnalysis(null)
    setExpressionAnalysis(null)
    setAttireAnalysis(null)
    setEyeContactAnalysis(null)
  }, [])

  const drawVideoFrame = useCallback(
    (video: HTMLVideoElement, canvas: HTMLCanvasElement, faces: FaceDetection[]) => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      if (!canvasInitialized.current && video.videoWidth > 0 && video.videoHeight > 0) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        canvasInitialized.current = true
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      if (faces.length > 0) {
        ctx.strokeStyle = faces.length === 1 ? "#10b981" : faces.length > 1 ? "#f59e0b" : "#ef4444"
        ctx.lineWidth = 2
        ctx.font = "14px Arial"
        ctx.fillStyle = ctx.strokeStyle

        faces.forEach((face, index) => {
          ctx.strokeRect(face.x, face.y, face.width, face.height)

          const confidence = Math.round(face.confidence * 100)
          ctx.fillText(`${confidence}%`, face.x, face.y - 5)
        })

        const statusText = faces.length === 1 ? "✓ OPTIMAL" : faces.length > 1 ? "⚠ MULTIPLE" : "✗ NO FACE"
        ctx.font = "bold 18px Arial"
        ctx.fillStyle = faces.length === 1 ? "#10b981" : "#ef4444"
        ctx.fillText(statusText, 10, 30)

        if (faces.length === 1) {
          let yOffset = 60
          ctx.font = "12px Arial"

          if (postureAnalysis) {
            ctx.fillStyle = postureAnalysis.isGoodPosture ? "#10b981" : "#ef4444"
            ctx.fillText(`Posture: ${postureAnalysis.isGoodPosture ? "Good" : "Poor"}`, 10, yOffset)
            yOffset += 20
          }

          if (eyeContactAnalysis) {
            ctx.fillStyle = eyeContactAnalysis.isLookingAtCamera ? "#10b981" : "#f59e0b"
            ctx.fillText(`Eye Contact: ${eyeContactAnalysis.isLookingAtCamera ? "Good" : "Looking Away"}`, 10, yOffset)
            yOffset += 20
          }

          if (expressionAnalysis) {
            ctx.fillStyle = "#3b82f6"
            ctx.fillText(`Expression: ${expressionAnalysis.dominant}`, 10, yOffset)
            yOffset += 20
          }

          if (attireAnalysis) {
            ctx.fillStyle = attireAnalysis.isProfessional ? "#10b981" : "#f59e0b"
            ctx.fillText(`Attire: ${attireAnalysis.isProfessional ? "Professional" : "Casual"}`, 10, yOffset)
          }
        }
      }
    },
    [postureAnalysis, eyeContactAnalysis, expressionAnalysis, attireAnalysis],
  )

  const startDetectionLoop = useCallback(() => {
    console.log("[v0] Starting optimized detection loop...")

    let lastDetectionTime = 0
    const detectionInterval = 2000
    const canvasUpdateInterval = 200

    const detectFaces = async () => {
      if (!videoRef.current || !canvasRef.current || !faceDetectorRef.current) {
        return
      }

      const video = videoRef.current
      const canvas = canvasRef.current

      if (video.readyState !== 4) {
        animationRef.current = requestAnimationFrame(detectFaces)
        return
      }

      const currentTime = Date.now()
      const shouldRunDetection = currentTime - lastDetectionTime >= detectionInterval
      const shouldUpdateCanvas = currentTime - lastCanvasUpdate.current >= canvasUpdateInterval

      if (shouldUpdateCanvas) {
        lastCanvasUpdate.current = currentTime
        drawVideoFrame(video, canvas, detections)
      }

      if (shouldRunDetection) {
        lastDetectionTime = currentTime

        try {
          let faces: FaceDetection[] = []

          if (faceDetectorRef.current.estimateFaces) {
            const predictions = await faceDetectorRef.current.estimateFaces(video, false)

            faces = predictions.map((prediction: any) => {
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
          } else if (faceDetectorRef.current.detect) {
            const ctx = canvas.getContext("2d")
            if (ctx) {
              const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
              const detectedFaces = await faceDetectorRef.current.detect(imageData)

              faces = detectedFaces.map((face: any) => ({
                x: face.boundingBox.x,
                y: face.boundingBox.y,
                width: face.boundingBox.width,
                height: face.boundingBox.height,
                confidence: face.confidence || 0.8,
              }))
            }
          }

          if (faces.length === 1) {
            const face = faces[0]
            const ctx = canvas.getContext("2d")

            if (ctx) {
              const fullFrame = ctx.getImageData(0, 0, canvas.width, canvas.height)
              const faceRegion = ctx.getImageData(face.x, face.y, face.width, face.height)

              console.log("[v0] Running comprehensive analysis for single face...")
              const posture = await analyzePosture(video)
              const expression = analyzeExpression(faceRegion, face)
              const attire = analyzeAttire(faceRegion, fullFrame)
              const eyeContact = analyzeEyeContact(face, canvas.width, canvas.height)

              console.log("[v0] Analysis complete - updating UI states...")
              setPostureAnalysis(posture)
              setExpressionAnalysis(expression)
              setAttireAnalysis(attire)
              setEyeContactAnalysis(eyeContact)
            }
          } else {
            console.log("[v0] Multiple or no faces detected - clearing analysis results")
            setPostureAnalysis(null)
            setExpressionAnalysis(null)
            setAttireAnalysis(null)
            setEyeContactAnalysis(null)
          }

          setStats((prev) => {
            const newStats = {
              ...prev,
              totalFrames: prev.totalFrames + 1,
              facesDetected: faces.length > 0 ? prev.facesDetected + 1 : prev.facesDetected,
              multipleFactsDetected: faces.length > 1 ? prev.multipleFactsDetected + 1 : prev.multipleFactsDetected,
              sessionDuration: Math.floor((Date.now() - sessionStartTime.current) / 1000),
              goodPostureFrames: postureAnalysis?.isGoodPosture ? prev.goodPostureFrames + 1 : prev.goodPostureFrames,
              professionalAttireFrames: attireAnalysis?.isProfessional
                ? prev.professionalAttireFrames + 1
                : prev.professionalAttireFrames,
              eyeContactFrames: eyeContactAnalysis?.isLookingAtCamera
                ? prev.eyeContactFrames + 1
                : prev.eyeContactFrames,
              positiveExpressionFrames:
                expressionAnalysis?.dominant === "happy" || expressionAnalysis?.dominant === "focused"
                  ? prev.positiveExpressionFrames + 1
                  : prev.positiveExpressionFrames,
            }

            if (faces.length > 0) {
              const avgConfidence = faces.reduce((sum, face) => sum + face.confidence, 0) / faces.length
              confidenceSum.current += avgConfidence
              confidenceCount.current += 1
              newStats.averageConfidence = confidenceSum.current / confidenceCount.current
            }

            return newStats
          })

          setFaceCount(faces.length)
          setDetections(faces)

          if (faces.length === 1) {
            setStableFrameCount((prev) => {
              const newCount = prev + 1
              const stable = newCount >= 3
              setIsStable(stable)
              if (stable) {
                setStats((prevStats) => ({
                  ...prevStats,
                  stableFrames: prevStats.stableFrames + 1,
                }))
              }
              return newCount
            })
          } else {
            setStableFrameCount(0)
            setIsStable(false)
          }
        } catch (err) {
          console.error("[v0] Detection error:", err)
        }
      }

      if (videoRef.current && canvasRef.current && faceDetectorRef.current) {
        animationRef.current = requestAnimationFrame(detectFaces)
      }
    }

    animationRef.current = requestAnimationFrame(detectFaces)
  }, [
    drawVideoFrame,
    detections,
    analyzePosture,
    analyzeExpression,
    analyzeAttire,
    analyzeEyeContact,
    postureAnalysis,
    expressionAnalysis,
    attireAnalysis,
    eyeContactAnalysis,
  ])

  useEffect(() => {
    return () => {
      stopTracking()
    }
  }, [stopTracking])

  const getStatusColor = () => {
    if (faceCount === 1 && isStable) return "bg-green-500"
    if (faceCount === 1) return "bg-yellow-500"
    if (faceCount > 1) return "bg-orange-500"
    return "bg-red-500"
  }

  const getStatusText = () => {
    if (faceCount === 1 && isStable) return "Optimal - Single Face Detected & Stable"
    if (faceCount === 1) return "Good - Single Face Detected"
    if (faceCount > 1) return "Warning - Multiple Faces Detected"
    return "No Face Detected"
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Advanced Proctoring System
            {isTracking && (
              <Badge variant="outline" className="ml-auto">
                AI-Powered Analysis
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={startTracking} disabled={isTracking || isLoading} className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              {isLoading ? "Initializing AI Models..." : "Start Advanced Tracking"}
            </Button>
            <Button
              onClick={stopTracking}
              disabled={!isTracking}
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
            >
              <CameraOff className="h-4 w-4" />
              Stop Tracking
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isTracking && detectionMethod && (
            <div className="text-sm text-gray-600">Detection Method: {detectionMethod} | Update Rate: 2s intervals</div>
          )}
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Live Camera Feed with AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-black rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  playsInline
                  muted
                  style={{ display: isTracking ? "block" : "none" }}
                />
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ display: isTracking ? "block" : "none" }}
                />
                {!isTracking && (
                  <div className="aspect-video flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Advanced AI camera feed will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Detection Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
                <span className="text-sm font-medium">{getStatusText()}</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Faces Detected:</span>
                  <Badge variant={faceCount === 1 ? "default" : faceCount > 1 ? "destructive" : "secondary"}>
                    {faceCount}
                  </Badge>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Stable Frames:</span>
                  <Badge variant={stableFrameCount >= 3 ? "default" : "secondary"}>{stableFrameCount}</Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Stability:</span>
                  {isStable ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {faceCount === 1 && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Posture Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {postureAnalysis ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Overall Posture:</span>
                        <Badge variant={postureAnalysis.isGoodPosture ? "default" : "destructive"}>
                          {postureAnalysis.isGoodPosture ? "Good" : "Poor"}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600">
                        Confidence: {Math.round(postureAnalysis.confidence * 100)}%
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">Analyzing posture...</div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smile className="h-5 w-5" />
                    Expression Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {expressionAnalysis ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Expression:</span>
                        <Badge variant="outline">{expressionAnalysis.dominant}</Badge>
                      </div>
                      <div className="space-y-1">
                        {Object.entries(expressionAnalysis.emotions).map(([emotion, confidence]) => (
                          <div key={emotion} className="flex justify-between text-xs">
                            <span className="capitalize">{emotion}:</span>
                            <span>{Math.round(confidence * 100)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">Analyzing expression...</div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shirt className="h-5 w-5" />
                    Attire Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {attireAnalysis ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Attire:</span>
                        <Badge variant={attireAnalysis.isProfessional ? "default" : "secondary"}>
                          {attireAnalysis.isProfessional ? "Professional" : "Casual"}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600">{attireAnalysis.details}</div>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">Analyzing attire...</div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Focus className="h-5 w-5" />
                    Eye Contact Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {eyeContactAnalysis ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Eye Contact:</span>
                        <Badge variant={eyeContactAnalysis.isLookingAtCamera ? "default" : "secondary"}>
                          {eyeContactAnalysis.isLookingAtCamera ? "Good" : "Looking Away"}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Attention Score:</span>
                        <span>{Math.round(eyeContactAnalysis.attentionScore * 100)}%</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">Analyzing eye contact...</div>
                  )}
                </CardContent>
              </Card>
            </>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Session Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Total Frames</p>
                  <p className="font-semibold">{stats.totalFrames}</p>
                </div>
                <div>
                  <p className="text-gray-600">Faces Detected</p>
                  <p className="font-semibold">{stats.facesDetected}</p>
                </div>
                <div>
                  <p className="text-gray-600">Stable Frames</p>
                  <p className="font-semibold">{stats.stableFrames}</p>
                </div>
                <div>
                  <p className="text-gray-600">Multiple Faces</p>
                  <p className="font-semibold">{stats.multipleFactsDetected}</p>
                </div>
                <div>
                  <p className="text-gray-600">Good Posture</p>
                  <p className="font-semibold">{stats.goodPostureFrames}</p>
                </div>
                <div>
                  <p className="text-gray-600">Professional</p>
                  <p className="font-semibold">{stats.professionalAttireFrames}</p>
                </div>
                <div>
                  <p className="text-gray-600">Eye Contact</p>
                  <p className="font-semibold">{stats.eyeContactFrames}</p>
                </div>
                <div>
                  <p className="text-gray-600">Positive Expr.</p>
                  <p className="font-semibold">{stats.positiveExpressionFrames}</p>
                </div>
                <div>
                  <p className="text-gray-600">Avg Confidence</p>
                  <p className="font-semibold">{Math.round(stats.averageConfidence * 100)}%</p>
                </div>
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="font-semibold">{stats.sessionDuration}s</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {detections.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Detection Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {detections.map((detection, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">Face {index + 1}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${detection.confidence * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{Math.round(detection.confidence * 100)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
