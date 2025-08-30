"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Square, Code, Clock, CheckCircle } from "lucide-react"
import { Editor } from "@monaco-editor/react"
import { runTests, runAndWait, type TestRunResult } from "@/src/services/judge0"
import type { CodingQuestion, SessionData } from "../types/proctoring"

interface CodingEnvironmentProps {
  questions: CodingQuestion[]
  testCases?: Record<string, Array<{ input: string; output: string }>>
  timer?: number
  numberOfQuestions?: number
  currentQuestionIndex: number
  onQuestionChange: (index: number) => void
  onSessionComplete: () => void
  sessionData?: SessionData
  onUpdateSession?: (updates: Partial<SessionData>) => void
  onAddEvent?: (event: any) => void
}

export function CodingEnvironment({
  questions,
  testCases,
  timer,
  numberOfQuestions,
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
  const [lastResults, setLastResults] = useState<TestRunResult[] | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [timeSpent, setTimeSpent] = useState(0)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [customInput, setCustomInput] = useState("")
  const [customOutput, setCustomOutput] = useState("")
  const [lastRunMode, setLastRunMode] = useState<'tests' | 'custom' | null>(null)
  const editorRef = useRef<any>(null)
  const [editorDom, setEditorDom] = useState<HTMLElement | null>(null)

  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastCodeSaveRef = useRef<string>("")
  const keystrokeCountRef = useRef<number>(0)
  const startTimeRef = useRef<number>(Date.now())
  const lastFocusTimeRef = useRef<number>(Date.now())
  const totalFocusTimeRef = useRef<number>(0)

  const currentQuestion = questions[currentQuestionIndex]

  const storageKey = useMemo(() => `draft:${currentQuestion?.id ?? 'unknown'}:${language}`,[currentQuestion?.id, language])
  useEffect(() => {
    if (!currentQuestion) return
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      setCode(saved)
    } else if ((currentQuestion as any).templates?.[language]) {
      setCode((currentQuestion as any).templates[language])
    } else {
      const defaults: Record<string, string> = {
        javascript: `function solution(input){\n  // TODO\n  return '';\n}\nconst fs = require('fs');\nconst data = fs.readFileSync(0,'utf8').trim();\nconsole.log(solution(data));\n`,
        python: `def solution(input: str):\n    # TODO\n    return ''\n\nimport sys\nprint(solution(sys.stdin.read().strip()))\n`,
        java: `import java.io.*;\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    String input = new String(System.in.readAllBytes()).trim();\n    System.out.print(solution(input));\n  }\n  static String solution(String input){\n    // TODO\n    return \"\";\n  }\n}\n`,
        cpp: `#include <bits/stdc++.h>\nusing namespace std;\nstring solution(string input){\n  // TODO\n  return \"\";\n}\nint main(){\n  ios::sync_with_stdio(false);cin.tie(nullptr);\n  string input, line;\n  while (getline(cin, line)) { if (!input.empty()) input += \"\\n\"; input += line; }\n  cout << solution(input);\n}\n`,
      }
      setCode(defaults[language] || "")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion?.id, language])

  useEffect(() => {
    localStorage.setItem(storageKey, code)
  }, [storageKey, code])

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
    const start = Date.now()
    const t = setInterval(() => {
      setTimeSpent((prev) => prev + 1)
      if (timer) {
        const elapsed = Math.floor((Date.now() - start) / 1000)
        setRemaining(Math.max(0, timer - elapsed))
      }
    }, 1000)
    return () => clearInterval(t)
  }, [currentQuestionIndex, timer])

  const handleRunCode = async () => {
    setIsRunning(true)
    setOutput("")
    setLastResults(null)
    try {
      const q = questions[currentQuestionIndex]
      const tests = testCases?.[q.id]

      if (onAddEvent) {
        onAddEvent({
          eventType: "code_execution",
          severity: "info" as const,
          context: "coding",
          data: { language, codeLength: code.length, linesOfCode: code.split("\n").length },
        })
      }

      // If user provided custom input, run a single execution with that input.
      if (customInput.trim().length > 0) {
        setLastRunMode('custom')
        const res = await runAndWait({ language: language as any, sourceCode: code, stdin: customInput })
        const out = (res.stdout ?? '').trim()
        setCustomOutput(out || '(no output)')
        setOutput(out)
        setLastResults(null)
      } else {
        // Otherwise run defined tests and show pass count
        if (!tests || tests.length === 0) {
          setOutput('No test cases found for this question. Add them in coding-questions.json under testCases.')
          return
        }
        setLastRunMode('tests')
        const results = await runTests({ language: language as any, sourceCode: code, tests })
        setLastResults(results)
        const passed = results.filter((r) => r.pass).length
        const summary = `Tests: ${passed}/${results.length} passed`
        setOutput(summary)
      }
    } catch (e: any) {
      setOutput(`Run failed: ${e?.message || e}`)
    } finally {
      setIsRunning(false)
    }
  }

  const handleSubmit = async () => {
    // For now, submit runs official tests regardless of custom input and shows pass count.
    setIsRunning(true)
    setOutput("")
    setLastResults(null)
    setLastRunMode('tests')
    try {
      const q = questions[currentQuestionIndex]
      const tests = testCases?.[q.id]
      if (!tests || tests.length === 0) {
        setOutput('No test cases found for this question. Add them in coding-questions.json under testCases.')
        return
      }
      const results = await runTests({ language: language as any, sourceCode: code, tests })
      setLastResults(results)
      const passed = results.filter((r) => r.pass).length
      setOutput(`Submitted. Tests: ${passed}/${results.length} passed`)
    } catch (e: any) {
      setOutput(`Submit failed: ${e?.message || e}`)
    } finally {
      setIsRunning(false)
    }
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

  const handleSelectQuestion = (index: number) => {
    if (index === currentQuestionIndex) return
    onQuestionChange(index)
    setCode("")
    setOutput("")
    setTimeSpent(0)
    keystrokeCountRef.current = 0
    startTimeRef.current = Date.now()
    totalFocusTimeRef.current = 0
  }

  // Block copy/cut/paste in the editor and count as violations
  useEffect(() => {
    const el: any = editorRef.current && typeof editorRef.current.getDomNode === 'function' ? editorRef.current.getDomNode() : editorDom
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
  }, [onAddEvent, editorDom])

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
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-mono">Spent: {formatTime(timeSpent)}</span>
                </div>
                {typeof remaining === 'number' && (
                  <Badge variant="outline" title="Remaining time">⏳ {formatTime(remaining)}</Badge>
                )}
              </div>
              <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar: compact, only question numbers */}
        <aside className="w-16 border-r bg-card overflow-y-auto">
          <div className="p-2 space-y-2">
            {questions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => handleSelectQuestion(i)}
                aria-label={`Question ${i + 1}: ${q.title}`}
                title={`Question ${i + 1}: ${q.title}`}
                className={`w-full rounded px-0 py-2 transition-colors flex items-center justify-center ${
                  i === currentQuestionIndex ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                <span className="text-sm font-semibold">{i + 1}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Problem description */}
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

            {/* Navigation via sidebar; previous/next controls removed */}
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
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              <Editor
                height="100%"
                defaultLanguage={language}
                language={language}
                theme="vs-dark"
                value={code}
                onChange={(v?: string) => handleCodeChange(v || '')}
                onMount={(editor: any) => {
                  editorRef.current = editor
                  const node = editor?.getDomNode?.()
                  if (node) setEditorDom(node as HTMLElement)
                }}
                options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true, wordWrap: 'on', tabSize: 2 }}
              />
            </div>

            {/* Bottom panel: input + Run/Submit + summary/results */}
            <div className="border-t bg-card p-4 space-y-3">
              <label className="text-sm font-medium">Input (optional)</label>
              <textarea
                className="w-full h-24 rounded border bg-background p-2 font-mono text-sm"
                placeholder="Provide custom input to run a single case; leave empty to run all tests"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
              />
              <div className="flex items-center gap-3">
                <Button onClick={handleRunCode} disabled={isRunning || !code.trim()} size="sm">
                  {isRunning ? <Square className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isRunning ? "Running..." : "Run"}
                </Button>
                <Button variant="secondary" onClick={handleSubmit} disabled={isRunning || !code.trim()} size="sm">
                  Submit
                </Button>
                <div className="text-sm text-muted-foreground">
                  {output || 'Run to see results here'}
                </div>
              </div>

              {lastRunMode === 'tests' && lastResults && lastResults.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm font-medium">Test results</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {lastResults.map((r, i) => (
                      <div key={i} className={`flex items-center gap-2 rounded border px-2 py-1 text-xs ${r.pass ? 'border-green-600 text-green-700' : 'border-red-600 text-red-700'}`}>
                        <CheckCircle className={`h-3 w-3 ${r.pass ? 'text-green-600' : 'text-red-600'}`} />
                        <span>#{i + 1}: {r.pass ? 'PASS' : 'FAIL'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {lastRunMode === 'custom' && (
                <div className="space-y-2">
                  <div className="text-sm font-medium">Program output</div>
                  <pre className="bg-gray-50 dark:bg-gray-900 rounded p-3 font-mono text-sm whitespace-pre-wrap">{customOutput}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
