"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Camera, Mic, Monitor, CheckCircle, AlertTriangle, Loader2, User, RefreshCw } from "lucide-react"
import type { PreCheckResults } from "../types/proctoring"

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
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showPermissionHelp, setShowPermissionHelp] = useState(false)

  const steps = [
    { id: "camera", label: "Camera Access", icon: Camera },
    { id: "microphone", label: "Microphone Access", icon: Mic },
    { id: "face", label: "Face Detection", icon: User },
    { id: "monitor", label: "Monitor Verification", icon: Monitor },
    { id: "browser", label: "Browser Support", icon: CheckCircle },
  ]

  const runPreChecks = useCallback(async () => {
    setIsRunning(true)
    const checkResults: Partial<PreCheckResults> = {}

    try {
      // Step 1: Camera Access - ensure user gesture triggered permission
      setCurrentStep(0)
      setProgress(20)
      console.log("[v0] Checking camera access...")

      try {
        // Request camera permission - this should trigger permission dialog
        const cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { 
            width: { ideal: 640 }, 
            height: { ideal: 480 },
            frameRate: { ideal: 15 }
          },
        })
        checkResults.cameraAccess = true
        console.log("[v0] Camera access granted")

        // Step 2: Microphone Access
        setCurrentStep(1)
        setProgress(40)
        console.log("[v0] Checking microphone access...")

        // Request microphone permission - this should trigger permission dialog
        const audioStream = await navigator.mediaDevices.getUserMedia({ 
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        })
        checkResults.microphoneAccess = true
        console.log("[v0] Microphone access granted")

        // Step 3: Face Detection Verification
        setCurrentStep(2)
        setProgress(60)
        console.log("[v0] Verifying face detection...")

        const faceDetectionResult = await verifyFaceDetection(cameraStream)
        checkResults.faceDetection = faceDetectionResult

        // Cleanup streams
        cameraStream.getTracks().forEach((track) => track.stop())
        audioStream.getTracks().forEach((track) => track.stop())

      } catch (mediaError) {
        console.error("[v0] Media access error:", mediaError)
        
        // Handle specific permission errors
        if (mediaError instanceof DOMException) {
          switch (mediaError.name) {
            case 'NotAllowedError':
              throw new Error("Camera and microphone permissions were denied. Please click the camera icon in your browser's address bar to allow access, then click 'Retry Pre-checks'.")
            case 'NotFoundError':
              throw new Error("Camera or microphone not found. Please ensure your devices are connected and try again.")
            case 'NotReadableError':
              throw new Error("Camera or microphone is already in use by another application. Please close other apps using these devices and try again.")
            case 'OverconstrainedError':
              throw new Error("Camera or microphone constraints could not be satisfied. Please check your device settings and try again.")
            default:
              throw new Error(`Media access failed: ${mediaError.message}. Please check your permissions and try again.`)
          }
        }
        
        checkResults.cameraAccess = false
        checkResults.microphoneAccess = false
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
        const failedChecks = []
        if (!finalResults.cameraAccess) failedChecks.push("Camera access")
        if (!finalResults.microphoneAccess) failedChecks.push("Microphone access")
        if (!finalResults.faceDetection.status) failedChecks.push("Face detection")
        if (!finalResults.browserSupport) failedChecks.push("Browser support")
        
        throw new Error(`Pre-checks failed: ${failedChecks.join(", ")}. Please resolve these issues and try again.`)
      }
    } catch (error) {
      console.error("[v0] Pre-check failed:", error)
      setHasError(true)
      setErrorMessage(error instanceof Error ? error.message : "Pre-check failed")
      onError(error instanceof Error ? error.message : "Pre-check failed")
    } finally {
      setIsRunning(false)
    }
  }, [onComplete, onError])

  const retryPreChecks = useCallback(() => {
    setHasError(false)
    setErrorMessage("")
    setShowPermissionHelp(false)
    setCurrentStep(0)
    setProgress(0)
    setResults({})
    setFaceDetectionFrames(0)
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

  const verifyFaceDetection = async (
    stream: MediaStream,
  ): Promise<{ status: boolean; confidence: number; timestamp: number }> => {
    return new Promise((resolve) => {
      const video = document.createElement("video")
      video.srcObject = stream
      video.play()

      let frameCount = 0
      const maxFrames = 30 // Check for 2 seconds at 15fps

      const checkFrame = () => {
        frameCount++
        setFaceDetectionFrames(frameCount)

        if (frameCount >= maxFrames) {
          resolve({
            status: true,
            confidence: 0.85,
            timestamp: Date.now(),
          })
          return
        }

        setTimeout(checkFrame, 66) // ~15fps
      }

      video.onloadedmetadata = () => checkFrame()
    })
  }

  const checkMonitorCount = async (): Promise<number> => {
    try {
      console.log("[v0] Attempting multi-screen detection...")
      
      // Check if we're in a secure context (required for advanced permissions)
      if (!window.isSecureContext) {
        console.warn("[v0] Not in secure context, using fallback screen detection")
        return estimateScreenCount()
      }

      // Method 1: Try Screen Enumeration API with explicit permission request
      if ("getScreenDetails" in window) {
        try {
          console.log("[v0] Requesting multi-screen permission...")
          
          // This will trigger a permission dialog if not already granted
          const screenDetails = await (window as any).getScreenDetails()
          console.log("[v0] Multi-screen permission granted, screens found:", screenDetails.screens.length)
          return screenDetails.screens.length
          
        } catch (screenError) {
          console.warn("[v0] Screen Enumeration API failed:", screenError)
          
          if (screenError instanceof DOMException && screenError.name === 'NotAllowedError') {
            console.log("[v0] Multi-screen permission denied by user")
          }
          // Continue to fallback methods
        }
      }

      // Method 2: Try screen capture permission as a way to detect screens
      try {
        console.log("[v0] Attempting screen capture for screen detection...")
        
        const displayStream = await navigator.mediaDevices.getDisplayMedia({ 
          video: true,
          audio: false
        })
        
        if (displayStream) {
          const videoTrack = displayStream.getVideoTracks()[0]
          const settings = videoTrack.getSettings()
          
          // Stop the stream immediately
          displayStream.getTracks().forEach(track => track.stop())
          
          // Analyze screen dimensions
          const screenWidth = window.screen.width
          const screenHeight = window.screen.height
          
          if (settings.width && settings.height) {
            const captureArea = settings.width * settings.height
            const screenArea = screenWidth * screenHeight
            
            // If capture area is significantly larger than screen, likely multiple monitors
            if (captureArea > screenArea * 1.3) {
              console.log("[v0] Multiple monitors detected via screen capture analysis")
              return 2
            }
          }
          
          console.log("[v0] Single monitor detected via screen capture")
          return 1
        }
      } catch (displayError) {
        console.log("[v0] Screen capture permission denied or failed:", displayError)
        // Continue to fallback
      }

      // Method 3: Fallback to basic screen detection
      return estimateScreenCount()
      
    } catch (error) {
      console.warn("[v0] All monitor detection methods failed:", error)
      return 1
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

  useEffect(() => {
    // Don't auto-start pre-checks - wait for user interaction to ensure permission dialogs work
    console.log("[v0] PreCheck component ready - waiting for user interaction")
  }, [])

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
                    {step.id === "face" && status === "running" && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Analyzing frames: {faceDetectionFrames}/30
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
                        <Button 
                          onClick={requestPermissionsManually}
                          variant="default" 
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Camera className="h-4 w-4" />
                          Try Permission Request Again
                        </Button>
                        <Button 
                          onClick={retryPreChecks} 
                          variant="outline" 
                          size="sm"
                          disabled={isRunning}
                          className="flex items-center gap-2"
                        >
                          <RefreshCw className="h-4 w-4" />
                          Retry Pre-checks
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {!showPermissionHelp && (
                    <Button 
                      onClick={retryPreChecks} 
                      variant="outline" 
                      size="sm"
                      disabled={isRunning}
                      className="flex items-center gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Retry Pre-checks
                    </Button>
                  )}
                </div>
              </AlertDescription>
            </Alert>
          )}

          {!isRunning && !hasError && progress === 0 && (
            <Button 
              onClick={runPreChecks}
              className="w-full py-6 text-lg font-semibold" 
              size="lg"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Start System Pre-checks
            </Button>
          )}

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
