"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Camera, Mic, Monitor, CheckCircle, AlertTriangle, Loader2, User } from "lucide-react"
import type { PreCheckResults } from "../types/proctoring"
import { createMicMeter } from "@/lib/audio/meter"
import { detectFace } from "@/lib/vision/face"

interface PreCheckComponentProps {
  onComplete: (results: PreCheckResults) => void
  onError: (error: string) => void
}

export function PreCheckComponent({ onComplete, onError }: PreCheckComponentProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<Partial<PreCheckResults>>({})
  const [isRunning, setIsRunning] = useState(false)
  const [faceDetectionFrames, setFaceDetectionFrames] = useState(0)
  const [micLevel, setMicLevel] = useState(0)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showPermissionHelp, setShowPermissionHelp] = useState(false)
  const [errorsByStep, setErrorsByStep] = useState<Record<string, string>>({})
  const [needsWindowPermission, setNeedsWindowPermission] = useState(false)
  const [windowPermissionState, setWindowPermissionState] = useState<PermissionState | 'unsupported' | null>(null)

  // Keep references to streams and meter for cleanup
  const camStreamRef = useRef<MediaStream | null>(null)
  const micStreamRef = useRef<MediaStream | null>(null)
  const micMeterRef = useRef<ReturnType<typeof createMicMeter> | null>(null)
  const animRef = useRef<number | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const userGestureResolverRef = useRef<((value: unknown) => void) | null>(null)
  const screenCountAfterPromptRef = useRef<number | null>(null)

  const steps = [
    { id: "camera", label: "Camera Access", icon: Camera },
    { id: "microphone", label: "Microphone Access", icon: Mic },
    { id: "face", label: "Face Detection", icon: User },
  { id: "monitor", label: "Monitor Verification", icon: Monitor },
    { id: "browser", label: "Browser Support", icon: CheckCircle },
  ]

  const stopStreamsAndMeter = () => {
    try { camStreamRef.current?.getTracks().forEach(t => t.stop()) } catch {}
    try { micStreamRef.current?.getTracks().forEach(t => t.stop()) } catch {}
    camStreamRef.current = null
    micStreamRef.current = null
    if (micMeterRef.current) {
      micMeterRef.current.dispose().catch(() => {})
      micMeterRef.current = null
    }
    if (animRef.current) {
      cancelAnimationFrame(animRef.current)
      animRef.current = null
    }
  }

  const runPreChecks = useCallback(async () => {
    setIsRunning(true)
    const checkResults: Partial<PreCheckResults> = {}

    try {
  // Step 1: Camera Access with preview
      setCurrentStep(0)
      setProgress(20)
      console.log("[v0] Checking camera access...")

      try {
        // Request camera permission with timeout to avoid hanging
        const cameraTimeout = new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error("Camera access timeout")), 8000)
        )
        
        const cameraPromise = navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            frameRate: { ideal: 15 },
          },
        })

        const cameraStream = (await Promise.race([cameraPromise, cameraTimeout])) as MediaStream
        camStreamRef.current = cameraStream
        checkResults.cameraAccess = true
        console.log("[v0] Camera access granted")

        // Attach to a hidden/local video element for face detection
        if (!videoRef.current) {
          const v = document.createElement('video')
          v.muted = true
          v.playsInline = true
          videoRef.current = v
        }
        videoRef.current.srcObject = cameraStream
        try { await videoRef.current.play() } catch {}

        // Step 2: Microphone Access with timeout
        setCurrentStep(1)
        setProgress(40)
        console.log("[v0] Checking microphone access...")

        const audioTimeout = new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error("Audio access timeout")), 5000)
        )
        
        const audioPromise = navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        })

        const audioStream = (await Promise.race([audioPromise, audioTimeout])) as MediaStream
        micStreamRef.current = audioStream
        checkResults.microphoneAccess = true
        console.log("[v0] Microphone access granted")

        // Step 3: Initialize Audio Analysis (prepare for later use)
        console.log("[v0] Initializing audio analysis...")
        await initializeAudioContext(audioStream)
        // Start live mic meter
        try {
          const meter = createMicMeter(audioStream)
          micMeterRef.current = meter
          const loop = () => {
            setMicLevel(meter.getLevel())
            animRef.current = requestAnimationFrame(loop)
          }
          animRef.current = requestAnimationFrame(loop)
        } catch (e) {
          console.warn('[v0] Mic meter failed:', e)
        }

    // Step 4: Face Detection Verification
        setCurrentStep(2)
        setProgress(60)
        console.log("[v0] Verifying face detection...")

  const faceDetectionResult = await verifyFaceDetection(cameraStream)
  checkResults.faceDetection = faceDetectionResult

  // Check window-management permission right after face detection (no prompt here)
  setWindowPermissionState(await requestWindowManagementPermission())

        // Step 5: Initialize Face Detection Model (prepare for later use)
        console.log("[v0] Initializing face detection model...")
        await initializeFaceDetectionModel()

  // Keep streams active for monitor step and mic meter. We'll clean later.

      } catch (mediaError) {
        console.error("[v0] Media access error:", mediaError)
        
        // Handle specific permission errors
        if (mediaError instanceof DOMException) {
          switch (mediaError.name) {
            case 'NotAllowedError':
              {
                const msg = "Camera and microphone permissions were denied. Please click the camera icon in your browser's address bar to allow access, then click 'Retry'."
                setErrorsByStep(prev => ({ ...prev, [steps[currentStep].id]: msg }))
                throw new Error(msg)
              }
            case 'NotFoundError':
              {
                const msg = "Camera or microphone not found. Please ensure your devices are connected and try again."
                setErrorsByStep(prev => ({ ...prev, [steps[currentStep].id]: msg }))
                throw new Error(msg)
              }
            case 'NotReadableError':
              {
                const msg = "Camera or microphone is already in use by another application. Please close other apps using these devices and try again."
                setErrorsByStep(prev => ({ ...prev, [steps[currentStep].id]: msg }))
                throw new Error(msg)
              }
            case 'OverconstrainedError':
              {
                const msg = "Camera or microphone constraints could not be satisfied. Please check your device settings and try again."
                setErrorsByStep(prev => ({ ...prev, [steps[currentStep].id]: msg }))
                throw new Error(msg)
              }
            default:
              {
                const msg = `Media access failed: ${mediaError.message}. Please check your permissions and try again.`
                setErrorsByStep(prev => ({ ...prev, [steps[currentStep].id]: msg }))
                throw new Error(msg)
              }
          }
        }
        
        checkResults.cameraAccess = false
        checkResults.microphoneAccess = false
        setErrorsByStep(prev => ({ ...prev, [steps[currentStep].id]: (mediaError as Error)?.message || 'Failed' }))
        throw mediaError
      }

  // Step 4: Monitor Verification
      setCurrentStep(3)
      setProgress(80)
  console.log("[v0] Checking monitor configuration...")

      const monitorCount = await checkMonitorCount()
      checkResults.monitorCount = monitorCount

      if (monitorCount > 1) {
        console.warn("[v0] Multiple monitors detected:", monitorCount)
      }

      // Step 5: Browser Support
      setCurrentStep(4)
      setProgress(100)
      console.log("[v0] Verifying browser support...")

      checkResults.browserSupport = checkBrowserSupport()
      checkResults.codeEditorReady = true

      const finalResults: PreCheckResults = {
        cameraAccess: checkResults.cameraAccess || false,
        microphoneAccess: checkResults.microphoneAccess || false,
        faceDetection: checkResults.faceDetection || { status: false, confidence: 0, timestamp: Date.now() },
        monitorCount: checkResults.monitorCount || 1,
        browserSupport: checkResults.browserSupport || false,
        codeEditorReady: checkResults.codeEditorReady || false,
      }

      setResults(finalResults)

      // Check if all critical checks passed
      const allPassed =
        finalResults.cameraAccess &&
        finalResults.microphoneAccess &&
        finalResults.faceDetection.status &&
        finalResults.browserSupport

      if (allPassed) {
        console.log("[v0] All pre-checks passed successfully")
        setTimeout(() => onComplete(finalResults), 1000)
      } else {
        const failedChecks: string[] = []
        if (!finalResults.cameraAccess) { failedChecks.push("Camera access"); setErrorsByStep(prev => ({ ...prev, camera: prev.camera || 'Camera access failed' })) }
        if (!finalResults.microphoneAccess) { failedChecks.push("Microphone access"); setErrorsByStep(prev => ({ ...prev, microphone: prev.microphone || 'Microphone access failed' })) }
  if (!finalResults.browserSupport) { failedChecks.push("Browser support"); setErrorsByStep(prev => ({ ...prev, browser: prev.browser || 'Browser not supported' })) }
        throw new Error(`Pre-checks failed: ${failedChecks.join(", ")}.`)
      }
    } catch (error) {
      console.error("[v0] Pre-check failed:", error)
      setHasError(true)
      setErrorMessage(error instanceof Error ? error.message : "Pre-check failed")
      onError(error instanceof Error ? error.message : "Pre-check failed")
    } finally {
  setIsRunning(false)
  // Stop streams & meter once done
  stopStreamsAndMeter()
    }
  }, [onComplete, onError])

  const retryPreChecks = useCallback(() => {
  stopStreamsAndMeter()
    setHasError(false)
    setErrorMessage("")
    setShowPermissionHelp(false)
    setCurrentStep(0)
    setProgress(0)
    setResults({})
    setFaceDetectionFrames(0)
  setMicLevel(0)
    runPreChecks()
  }, [runPreChecks])

  const requestPermissionsManually = useCallback(async () => {
    try {
      console.log("[v0] Manual permission request initiated")
      
      // Request camera and microphone permissions explicitly
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })
      
      // Stop the stream immediately after getting permission
      stream.getTracks().forEach(track => track.stop())
      
      console.log("[v0] Manual permissions granted, restarting pre-checks")
      setShowPermissionHelp(false)
      retryPreChecks()
      
    } catch (error) {
      console.error("[v0] Manual permission request failed:", error)
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setErrorMessage("Permissions are still blocked. Please check your browser settings: Click the camera/microphone icon in the address bar and allow access, then refresh the page.")
      } else {
        setErrorMessage("Please manually allow camera and microphone permissions in your browser settings, then refresh the page.")
      }
    }
  }, [retryPreChecks])

  // Initialize audio context for later use
  const initializeAudioContext = async (audioStream: MediaStream): Promise<void> => {
    try {
      console.log("[v0] 🎵 Starting audio analysis setup...")
      console.log("[v0] 🎵 Audio stream tracks:", audioStream.getTracks().length)
      console.log("[v0] 🎵 Audio stream active:", audioStream.active)
      
      // Check if AudioContext is supported
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) {
        throw new Error("AudioContext not supported in this browser")
      }
      
      const audioContext = new AudioContextClass()
      console.log("[v0] 🎵 AudioContext created, initial state:", audioContext.state)
      
      if (audioContext.state === 'suspended') {
        console.log("[v0] 🎵 AudioContext suspended, attempting to resume...")
        await audioContext.resume()
        console.log("[v0] 🎵 AudioContext resumed, new state:", audioContext.state)
      }
      
      // Create audio analysis nodes
      const source = audioContext.createMediaStreamSource(audioStream)
      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 256
      analyser.smoothingTimeConstant = 0.8
      source.connect(analyser)
      
      console.log("[v0] 🎵 Audio analysis nodes created and connected")
      
      // Test audio analysis with a quick sample
      const dataArray = new Uint8Array(analyser.frequencyBinCount)
      analyser.getByteFrequencyData(dataArray)
      const testLevel = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length
      console.log("[v0] 🎵 Test audio level:", Math.round((testLevel / 255) * 100) + "%")
      
      // Store initialization success flags and stream reference
      sessionStorage.setItem('audio-context-initialized', 'true')
      sessionStorage.setItem('audio-context-state', audioContext.state)
      sessionStorage.setItem('audio-sample-rate', audioContext.sampleRate.toString())
      sessionStorage.setItem('audio-stream-available', 'true')
      
      console.log("[v0] 🎵 Audio context setup completed successfully")
      console.log("[v0] 🎵 Sample rate:", audioContext.sampleRate)
      console.log("[v0] 🎵 Base latency:", audioContext.baseLatency)
      
      // Store the audio stream globally for the floating widget to use
      if (typeof window !== 'undefined') {
        (window as any).precheckAudioStream = audioStream
        console.log("[v0] 🎵 Audio stream stored globally for main app")
      }
      
      // Clean up test context but preserve the stream
      source.disconnect()
      audioContext.close()
      console.log("[v0] 🎵 Test audio context cleaned up, stream preserved")
      
    } catch (error) {
      console.error("[v0] 🎵 ❌ Audio context initialization failed:", error)
      sessionStorage.setItem('audio-context-initialized', 'false')
      sessionStorage.setItem('audio-init-error', error instanceof Error ? error.message : String(error))
      // Don't fail precheck for audio issues, but log the problem
    }
  }

  // Initialize face detection model for later use
  const initializeFaceDetectionModel = async (): Promise<void> => {
    try {
      console.log("[v0] Loading face detection model...")
      
      // Check if Face Detection API is available
      if ('FaceDetector' in window) {
        const faceDetector = new (window as any).FaceDetector({
          maxDetectedFaces: 5,
          fastMode: true
        })
        
        // Store availability flag
        sessionStorage.setItem('face-detector-available', 'true')
        console.log("[v0] Native FaceDetector API available")
      } else {
        console.log("[v0] Native FaceDetector not available, will use fallback")
        sessionStorage.setItem('face-detector-available', 'false')
      }
      
      console.log("[v0] Face detection model ready")
    } catch (error) {
      console.warn("[v0] Face detection model initialization failed:", error)
      sessionStorage.setItem('face-detector-available', 'false')
      // Don't fail precheck for face detection issues
    }
  }

  const verifyFaceDetection = async (
    stream: MediaStream,
  ): Promise<{ status: boolean; confidence: number; timestamp: number }> => {
    // Analyze up to 30 frames and require >= 5 positive detections
    const v = videoRef.current!
    let detectedFrames = 0
    let confidence = 0
    let frames = 0
    const maxFrames = 30
    while (frames < maxFrames && detectedFrames < 5) {
      try {
        const r = await detectFace(v)
        if (r.present) {
          detectedFrames += 1
          confidence = Math.max(confidence, r.confidence)
        }
      } catch {}
      frames++
      setFaceDetectionFrames(frames)
      await new Promise((r) => setTimeout(r, 100))
    }
    const status = detectedFrames >= 5
    return { status, confidence, timestamp: Date.now() }
  }

  const requestWindowManagementPermission = async (): Promise<PermissionState | 'unsupported'> => {
    try {
      if (!('permissions' in navigator)) return 'unsupported'
      // @ts-ignore: window-management is experimental
      const perm = await navigator.permissions.query({ name: 'window-management' as any })
      return perm.state as PermissionState
    } catch {
      return 'unsupported'
    }
  }

  const checkMonitorCount = async (): Promise<number> => {
    try {
      console.log("[v0] Attempting multi-screen detection...")
      
      // Check if we're in a secure context (required for advanced permissions)
      if (!window.isSecureContext) {
        console.warn("[v0] Not in secure context, using fallback screen detection")
        return estimateScreenCount()
      }
      // Window Management permission first (no prompt without gesture)
      if ('permissions' in navigator) {
        try {
          // @ts-ignore experimental name
          const permission = await navigator.permissions.query({ name: 'window-management' as any })
          console.log("[v0] Window management permission state:", permission.state)
          setWindowPermissionState(permission.state as PermissionState)
          if (permission.state === 'granted') {
            if ('getScreenDetails' in window) {
              const screenDetails = await (window as any).getScreenDetails()
              console.log("[v0] Window management granted, screens:", screenDetails.screens.length)
              return screenDetails.screens.length
            }
          } else if (permission.state === 'prompt') {
            // Show UI and wait for user gesture to trigger getScreenDetails
            console.log("[v0] Waiting for user gesture to request multi-screen permission...")
            setNeedsWindowPermission(true)
            await new Promise((resolve) => {
              userGestureResolverRef.current = resolve
            })
            setNeedsWindowPermission(false)
            // After user clicked and we attempted to get details, read result
            if (screenCountAfterPromptRef.current != null) {
              const count = screenCountAfterPromptRef.current
              screenCountAfterPromptRef.current = null
              console.log("[v0] Screens after user gesture:", count)
              return count
            }
            console.warn('[v0] User gesture did not yield screen details, falling back')
          }
        } catch (permissionError) {
          console.warn("[v0] Window management permission check failed:", permissionError)
        }
      }

      // Method 3: Fallback to basic screen detection
      return estimateScreenCount()
      
    } catch (error) {
      console.warn("[v0] All monitor detection methods failed:", error)
      return 1
    }
  }

  const handleRequestWindowPermission = async () => {
    try {
      if ('getScreenDetails' in window) {
        // @ts-ignore experimental
        const screenDetails = await (window as any).getScreenDetails()
        screenCountAfterPromptRef.current = screenDetails.screens.length
      } else {
        screenCountAfterPromptRef.current = null
      }
    } catch (e) {
      console.warn('[v0] getScreenDetails failed during user gesture:', e)
      screenCountAfterPromptRef.current = null
    } finally {
      userGestureResolverRef.current?.(true)
      userGestureResolverRef.current = null
      setNeedsWindowPermission(false)
    }
  }

  const estimateScreenCount = (): number => {
    try {
      const screenWidth = window.screen.width
      const availWidth = window.screen.availWidth
      const screenHeight = window.screen.height
      const availHeight = window.screen.availHeight
      
      // Check for ultra-wide screens that might span multiple monitors
      const aspectRatio = screenWidth / screenHeight
      
      // If screen is extremely wide (aspect ratio > 3:1), likely dual monitors
      if (aspectRatio > 3) {
        console.log("[v0] Ultra-wide display detected, likely multiple monitors")
        return 2
      }
      
      // If available width is significantly less than total width
      if (screenWidth > availWidth * 1.5) {
        console.log("[v0] Screen width analysis suggests multiple monitors")
        return 2
      }
      
      // Check for common dual monitor resolutions
      const commonDualWidths = [3840, 3360, 2560, 4480, 5120] // Common dual monitor setups
      if (commonDualWidths.includes(screenWidth)) {
        console.log("[v0] Common dual monitor resolution detected")
        return 2
      }
      
      console.log("[v0] Single monitor detected via analysis")
      return 1
    } catch (error) {
      console.warn("[v0] Screen analysis failed:", error)
      return 1
    }
  }

  const checkBrowserSupport = (): boolean => {
    const requiredAPIs = [
      "navigator.mediaDevices",
      "navigator.mediaDevices.getUserMedia",
      "requestAnimationFrame",
      "WebAssembly",
    ]

    return requiredAPIs.every((api) => {
      const parts = api.split(".")
      let obj: any = window
      for (const part of parts) {
        if (!(part in obj)) return false
        obj = obj[part]
      }
      return true
    })
  }

  const startedRef = useRef(false)
  useEffect(() => {
    if (!startedRef.current) {
      startedRef.current = true
      runPreChecks()
    }
    return () => stopStreamsAndMeter()
  }, [runPreChecks])

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStep) return "complete"
    if (stepIndex === currentStep && isRunning) return "running"
    return "pending"
  }

  const getStepIcon = (step: (typeof steps)[0], status: string) => {
    const IconComponent = step.icon

    if (status === "complete") return <CheckCircle className="h-5 w-5 text-green-600" />
    if (status === "running") return <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
    return <IconComponent className="h-5 w-5 text-gray-400" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <Card className="w-full max-w-2xl mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">System Pre-Check</CardTitle>
          <p className="text-gray-600 dark:text-gray-300">
            Verifying your system meets all requirements for proctored assessment
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-600">{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const status = getStepStatus(index)
              return (
                <div
                  key={step.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg border ${
                    status === "complete"
                      ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                      : status === "running"
                        ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
                        : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                  }`}
                >
                  {getStepIcon(step, status)}
                  <div className="flex-1">
                    <div className="font-medium">{step.label}</div>
                    {step.id === "face" && (
                      <div className="mt-2 flex items-center gap-3">
                        <video
                          ref={videoRef}
                          muted
                          playsInline
                          autoPlay
                          className="h-20 w-28 rounded-md bg-black object-cover"
                        />
                        {status === "running" && (
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Analyzing frames: {faceDetectionFrames}
                          </div>
                        )}
                      </div>
                    )}
                    {/* No screen sharing prompt; we rely on window-management/getScreenDetails only */}
                    {step.id === 'microphone' && status !== 'pending' && (
                      <div className="mt-1 h-2 w-40 rounded bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div
                          className="h-2 bg-emerald-500 transition-[width] duration-150"
                          style={{ width: `${Math.min(100, Math.round(micLevel * 200))}%` }}
                        />
                      </div>
                    )}
                    {errorsByStep[step.id] && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-red-600 dark:text-red-400">{errorsByStep[step.id]}</span>
                        <Button size="sm" variant="outline" disabled={isRunning} onClick={() => runPreChecks()}>
                          Retry
                        </Button>
                      </div>
                    )}
                    {step.id === 'monitor' && (status === 'running' || status === 'pending') && needsWindowPermission && (
                      <div className="mt-2 flex items-center gap-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Enable multi-screen detection</span>
                        <Button size="sm" onClick={handleRequestWindowPermission}>
                          Allow Window Management
                        </Button>
                     
                      </div>
                    )}
                  </div>
                  <Badge variant={status === "complete" ? "default" : "secondary"}>
                    {status === "complete" ? "Passed" : status === "running" ? "Checking..." : "Pending"}
                  </Badge>
                </div>
              )
            })}
          </div>

          {results.monitorCount && results.monitorCount > 1 && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Multiple monitors detected ({results.monitorCount}). Please ensure you're only using one monitor during
                the assessment.
              </AlertDescription>
            </Alert>
          )}

          {hasError && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-3">
                  <p>{errorMessage}</p>
                  
                  {errorMessage.includes("permissions were denied") && !showPermissionHelp && (
                    <Button 
                      onClick={() => setShowPermissionHelp(true)}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Camera className="h-4 w-4" />
                      Need Help with Permissions?
                    </Button>
                  )}
                  
                  {showPermissionHelp && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg space-y-2">
                      <p className="text-sm font-medium">To enable camera and microphone permissions:</p>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>Look for a camera/microphone icon in your browser's address bar</li>
                        <li>Click it and select "Always allow" for this site</li>
                        <li>Or go to browser Settings → Privacy & Security → Camera/Microphone</li>
                        <li>Make sure this site is allowed to access your camera and microphone</li>
                      </ol>
                      
                      <div className="flex gap-2 pt-2">
                        <Button onClick={requestPermissionsManually} variant="default" size="sm" className="flex items-center gap-2">
                          <Camera className="h-4 w-4" /> Request Permission Again
                        </Button>
                      </div>
                    </div>
                  )}
                  {/* Global retry removed; use per-step retry above */}
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Auto-start enabled; start button removed */}

          {!isRunning && !hasError && progress === 100 && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                All system checks completed successfully. You're ready to begin the proctored assessment.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
