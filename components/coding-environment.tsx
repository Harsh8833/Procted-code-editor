"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Play, Square, Code, Clock, CheckCircle } from "lucide-react"
import type { CodingQuestion, SessionData } from "../types/proctoring"

interface CodingEnvironmentProps {
  questions: CodingQuestion[]
  currentQuestionIndex: number
  onQuestionChange: (index: number) => void
  onSessionComplete: () => void
  sessionData?: SessionData
  onUpdateSession?: (updates: Partial<SessionData>) => void
  onAddEvent?: (event: any) => void
}

export function CodingEnvironment({
  questions,
  currentQuestionIndex,
  onQuestionChange,
  onSessionComplete,
  sessionData,
  onUpdateSession,
  onAddEvent,
}: CodingEnvironmentProps) {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [timeSpent, setTimeSpent] = useState(0)
  const editorRef = useRef<HTMLTextAreaElement>(null)

  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastCodeSaveRef = useRef<string>("")
  const keystrokeCountRef = useRef<number>(0)
  const startTimeRef = useRef<number>(Date.now())
  const lastFocusTimeRef = useRef<number>(Date.now())
  const totalFocusTimeRef = useRef<number>(0)

  const currentQuestion = questions[currentQuestionIndex]

  const debouncedSaveCode = useCallback((newCode: string) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    debounceTimeoutRef.current = setTimeout(() => {
      if (newCode !== lastCodeSaveRef.current && newCode.trim().length > 0) {
        console.log("[v0] Saving code changes to session (debounced)")
        lastCodeSaveRef.current = newCode
      }
    }, 2000)
  }, [])

  const handleCodeChange = useCallback(
    (newCode: string) => {
      setCode(newCode)
      keystrokeCountRef.current += 1
  onAddEvent?.({ eventType: "keystroke", severity: "info" as const, context: "coding", data: {} })

      if (onUpdateSession) {
        const linesOfCode = newCode.split("\n").filter((line) => line.trim().length > 0).length
        const base =
          sessionData?.codingMetrics ?? {
            totalKeystrokes: 0,
            linesOfCode: 0,
            codeExecutions: 0,
            externalCopyEvents: 0,
            languageSwitches: 0,
            averageTypingSpeed: 0,
            codingTimeVsReadingTime: { coding: 0, reading: 0 },
          }
        onUpdateSession({
          codingMetrics: {
            ...base,
            totalKeystrokes: keystrokeCountRef.current,
            linesOfCode,
            averageTypingSpeed: keystrokeCountRef.current / ((Date.now() - startTimeRef.current) / 60000), // WPM
          },
        })
      }

      debouncedSaveCode(newCode)
    },
  [debouncedSaveCode, onUpdateSession, sessionData?.codingMetrics, onAddEvent],
  )

  const handleFocus = useCallback(() => {
    lastFocusTimeRef.current = Date.now()
    console.log("[v0] Editor focused")
  }, [])

  const handleBlur = useCallback(() => {
    const focusTime = Date.now() - lastFocusTimeRef.current
    totalFocusTimeRef.current += focusTime

    if (onAddEvent) {
      onAddEvent({
        eventType: "gaze_tracking",
        severity: "warning" as const,
        context: "coding",
        data: { focusTimeMs: focusTime, totalFocusMs: totalFocusTimeRef.current, type: "focus_break" },
      })
    }

    console.log("[v0] Editor lost focus, duration:", focusTime)
  }, [onAddEvent])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (onAddEvent) {
          onAddEvent({
            eventType: "tab_switch",
            severity: "critical" as const,
            context: "coding",
            data: { timestamp: Date.now() },
          })
        }
        console.log("[v0] Tab switched away from assessment")
      } else {
        console.log("[v0] Tab focused back on assessment")
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [onAddEvent, onUpdateSession, sessionData?.sessionStats])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1)

  // totalDuration is maintained centrally by the session store ticker
    }, 1000)

    return () => {
      clearInterval(timer)
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
    }
  }, [currentQuestionIndex, onUpdateSession, sessionData?.sessionStats, sessionData?.startTime])

  const handleRunCode = async () => {
    setIsRunning(true)
    console.log("[v0] Executing code:", { language, code })

    if (onAddEvent) {
      onAddEvent({
        eventType: "code_execution",
        severity: "info" as const,
        context: "coding",
        data: { language, codeLength: code.length, linesOfCode: code.split("\n").length },
      })
    }

    setTimeout(() => {
      setOutput(`Code executed successfully!\nLanguage: ${language}\nLines: ${code.split("\n").length}`)
      setIsRunning(false)
    }, 1500)
  }

  const handleNextQuestion = () => {
  // questionsAttempted should be updated by the container using a centralized reducer; avoid direct mutation here

    if (currentQuestionIndex < questions.length - 1) {
      onQuestionChange(currentQuestionIndex + 1)
      setCode("")
      setOutput("")
      setTimeSpent(0)
      keystrokeCountRef.current = 0
      startTimeRef.current = Date.now()
      totalFocusTimeRef.current = 0
    } else {
      onSessionComplete()
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      onQuestionChange(currentQuestionIndex - 1)
    }
  }

  // Block copy/cut/paste in the editor and count as violations
  useEffect(() => {
    const el = editorRef.current
    if (!el) return
    const onCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      onAddEvent?.({ eventType: "keystroke", severity: "warning" as const, context: "coding", data: { copyCutPaste: true, action: "copy" } })
    }
    const onCut = (e: ClipboardEvent) => {
      e.preventDefault()
      onAddEvent?.({ eventType: "keystroke", severity: "warning" as const, context: "coding", data: { copyCutPaste: true, action: "cut" } })
    }
    const onPaste = (e: ClipboardEvent) => {
      e.preventDefault()
      onAddEvent?.({ eventType: "keystroke", severity: "warning" as const, context: "coding", data: { copyCutPaste: true, action: "paste" } })
    }
    el.addEventListener("copy", onCopy)
    el.addEventListener("cut", onCut)
    el.addEventListener("paste", onPaste)
    return () => {
      el.removeEventListener("copy", onCopy)
      el.removeEventListener("cut", onCut)
      el.removeEventListener("paste", onPaste)
    }
  }, [onAddEvent])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center p-8">
            <h2 className="text-xl font-semibold mb-4">No Questions Available</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Please load questions to begin the coding assessment.
            </p>
            <Button onClick={onSessionComplete}>Complete Session</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Coding Assessment</h1>
              <Badge variant="outline">
                Question {currentQuestionIndex + 1} of {questions.length}
              </Badge>
              <Badge
                variant={
                  currentQuestion.difficulty === "easy"
                    ? "default"
                    : currentQuestion.difficulty === "medium"
                      ? "secondary"
                      : "destructive"
                }
              >
                {currentQuestion.difficulty}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="font-mono">{formatTime(timeSpent)}</span>
              </div>
              <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        <div className="w-2/5 border-r bg-card overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">{currentQuestion.title}</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentQuestion.description}</p>
              </div>
            </div>

            {currentQuestion.constraints.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Constraints</h3>
                <ul className="space-y-2">
                  {currentQuestion.constraints.map((constraint, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentQuestion.examples.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Examples</h3>
                <div className="space-y-4">
                  {currentQuestion.examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Input:</h4>
                          <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                            {example.input}
                          </code>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Output:</h4>
                          <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                            {example.output}
                          </code>
                        </div>
                      </div>
                      {example.explanation && (
                        <div className="mt-3">
                          <h4 className="font-medium text-sm mb-1">Explanation:</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{example.explanation}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4 border-t">
              <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleNextQuestion}
                className={currentQuestionIndex === questions.length - 1 ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {currentQuestionIndex === questions.length - 1 ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Complete
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="border-b bg-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Code className="h-5 w-5" />
                <span className="font-medium">Code Editor</span>
              </div>
              <div className="flex items-center space-x-4">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleRunCode} disabled={isRunning || !code.trim()} size="sm">
                  {isRunning ? <Square className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <Tabs defaultValue="editor" className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="output">Output</TabsTrigger>
              </TabsList>

              <TabsContent value="editor" className="flex-1 mt-0">
                <textarea
                  ref={editorRef}
                  value={code}
                  onChange={(e) => handleCodeChange(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full h-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 border-0 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`// Write your ${language} solution here...\n\nfunction solution() {\n    // Your code here\n}`}
                  spellCheck={false}
                />
              </TabsContent>

              <TabsContent value="output" className="flex-1 mt-0">
                <div className="h-full p-4 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
                  <pre className="font-mono text-sm whitespace-pre-wrap">
                    {output || "Run your code to see the output here..."}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
