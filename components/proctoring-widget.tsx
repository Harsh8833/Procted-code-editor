"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Camera, Eye, CheckCircle, AlertTriangle, Monitor, Code, Play } from "lucide-react"
import { PreCheckComponent } from "./precheck-component"
import { CodingEnvironment } from "./coding-environment"
import { FloatingVideoWidget } from "./floating-video-widget"
import { useProctoringSession } from "../hooks/use-proctoring-session"
import type { ProctoringPhase, CodingQuestion, SessionData } from "../types/proctoring"

interface ProctoringWidgetProps {
  questions?: CodingQuestion[]
  onReadyToStart?: () => void
  onUpdate?: (payload: SessionData) => void
  onComplete?: (payload: SessionData) => void
}

export default function ProctoringWidget({
  questions = [],
  onReadyToStart,
  onUpdate,
  onComplete,
}: ProctoringWidgetProps) {
  const [phase, setPhase] = useState<ProctoringPhase>("initial")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const { sessionData, monitoringStatus, startSession, updateSession, addEvent, completeSession, isMonitoring } =
    useProctoringSession()

  const handleStartProctoring = useCallback(() => {
    console.log("[v0] Starting proctoring session...")
    setPhase("precheck")
  }, [])

  const handlePreCheckComplete = useCallback(
    (preCheckResults: any) => {
      console.log("[v0] Pre-checks completed successfully:", preCheckResults)
      startSession(preCheckResults)
      setPhase("coding")
      onReadyToStart?.()
    },
    [startSession, onReadyToStart],
  )

  const handleQuestionChange = useCallback(
    (questionIndex: number) => {
      setCurrentQuestionIndex(questionIndex)
      updateSession({
        currentQuestion: {
          questionId: questions[questionIndex]?.id || "",
          startTime: Date.now(),
          language: "javascript",
        },
      })
    },
    [questions, updateSession],
  )

  const handleSessionComplete = useCallback(() => {
    const finalData = completeSession()
    setPhase("complete")
    onComplete?.(finalData)
  }, [completeSession, onComplete])

  const handleSessionUpdate = useCallback(
    (updates: Partial<SessionData>) => {
      console.log("[v0] Updating session from floating widget:", updates)
      updateSession(updates)
    },
    [updateSession],
  )

  const handleAddEvent = useCallback(
    (event: any) => {
      console.log("[v0] Adding event from coding environment:", event)
      addEvent(event)
    },
    [addEvent],
  )

  useEffect(() => {
    if (sessionData && onUpdate) {
      onUpdate(sessionData)
    }
  }, [sessionData, onUpdate])

  if (phase === "initial") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Proctoring System
            </CardTitle>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive examination monitoring with real-time analysis and coding environment integration.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Camera className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Face Detection</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-time monitoring</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Code className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Coding Environment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Integrated editor</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Monitor className="h-8 w-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Environment Check</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">System verification</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Eye className="h-8 w-8 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Behavioral Analysis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Advanced monitoring</p>
                </div>
              </div>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                This system will monitor your camera, microphone, and screen activity during the assessment. Please
                ensure you're in a quiet, well-lit environment with a single monitor.
              </AlertDescription>
            </Alert>

            <Button onClick={handleStartProctoring} className="w-full py-6 text-lg font-semibold" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Start Proctoring Session
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (phase === "precheck") {
    return (
      <PreCheckComponent
        onComplete={handlePreCheckComplete}
        onError={(error) => console.error("[v0] Pre-check error:", error)}
      />
    )
  }

  if (phase === "coding") {
    return (
      <div className="min-h-screen bg-background">
        <CodingEnvironment
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          onQuestionChange={handleQuestionChange}
          onSessionComplete={handleSessionComplete}
          sessionData={sessionData ?? undefined}
          onUpdateSession={handleSessionUpdate}
          onAddEvent={handleAddEvent}
        />

        {isMonitoring && (
          <FloatingVideoWidget
            monitoringStatus={monitoringStatus}
            sessionData={sessionData ?? undefined}
            onStatusChange={(status) => console.log("[v0] Monitoring status:", status)}
            onUpdateSession={handleSessionUpdate}
            onAddEvent={handleAddEvent}
          />
        )}
      </div>
    )
  }

  if (phase === "complete") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-4">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Session Complete</CardTitle>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your proctored coding session has been successfully completed and recorded.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {sessionData?.sessionStats.questionsAttempted || 0}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Questions Attempted</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round((sessionData?.sessionStats.totalDuration || 0) / 60)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Minutes</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}
