import { useState, useEffect, useRef, useCallback } from "react"
import type { CodingQuestion, SessionData } from "../types/proctoring"

export type CodingEnvironmentProps = {
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
  const [activeTab, setActiveTab] = useState<"editor" | "output">("editor")
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
    if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current)
    debounceTimeoutRef.current = setTimeout(() => {
      if (newCode !== lastCodeSaveRef.current && newCode.trim().length > 0) {
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
          (sessionData as any)?.codingMetrics ?? {
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
            averageTypingSpeed: keystrokeCountRef.current / ((Date.now() - startTimeRef.current) / 60000),
          },
        })
      }

      debouncedSaveCode(newCode)
    },
    [debouncedSaveCode, onUpdateSession, sessionData?.codingMetrics, onAddEvent]
  )

  const handleFocus = useCallback(() => {
    lastFocusTimeRef.current = Date.now()
  }, [])

  const handleBlur = useCallback(() => {
    const focusTime = Date.now() - lastFocusTimeRef.current
    totalFocusTimeRef.current += focusTime
    onAddEvent?.({
      eventType: "gaze_tracking",
      severity: "warning" as const,
      context: "coding",
      data: { focusTimeMs: focusTime, totalFocusMs: totalFocusTimeRef.current, type: "focus_break" },
    })
  }, [onAddEvent])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onAddEvent?.({ eventType: "tab_switch", severity: "critical" as const, context: "coding", data: { timestamp: Date.now() } })
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [onAddEvent])

  useEffect(() => {
    const timer = setInterval(() => setTimeSpent((p) => p + 1), 1000)
    return () => {
      clearInterval(timer)
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current)
    }
  }, [currentQuestionIndex])

  const handleRunCode = async () => {
    setIsRunning(true)
    onAddEvent?.({
      eventType: "code_execution",
      severity: "info" as const,
      context: "coding",
      data: { language, codeLength: code.length, linesOfCode: code.split("\n").length },
    })
    setTimeout(() => {
      setOutput(`Code executed successfully!\nLanguage: ${language}\nLines: ${code.split("\n").length}`)
      setIsRunning(false)
  setActiveTab("output")
    }, 1000)
  }

  const handleNextQuestion = () => {
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
    if (currentQuestionIndex > 0) onQuestionChange(currentQuestionIndex - 1)
  }

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`

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
    el.addEventListener("copy", onCopy as any)
    el.addEventListener("cut", onCut as any)
    el.addEventListener("paste", onPaste as any)
    return () => {
      el.removeEventListener("copy", onCopy as any)
      el.removeEventListener("cut", onCut as any)
      el.removeEventListener("paste", onPaste as any)
    }
  }, [onAddEvent])

  if (!currentQuestion) {
    return (
      <div className="ce-min-h ce-center">
        <div className="ce-card ce-w-md">
          <div className="ce-card-content ce-p-8 ce-text-center">
            <h2 className="ce-text-xl ce-font-semibold ce-mb-4">No Questions Available</h2>
            <p className="ce-text-muted ce-mb-4">Please load questions to begin the coding assessment.</p>
            <button className="ce-btn" onClick={onSessionComplete}>Complete Session</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ce-root">
      <div className="ce-topbar">
        <div className="ce-container">
          <div className="ce-row">
            <div className="ce-row ce-gap-4">
              <h1 className="ce-text-xl ce-font-semibold">Coding Assessment</h1>
              <span className="ce-badge">Question {currentQuestionIndex + 1} of {questions.length}</span>
              <span className={`ce-badge ${currentQuestion.difficulty}`}>{currentQuestion.difficulty}</span>
            </div>
            <div className="ce-row ce-gap-4">
              <div className="ce-row ce-gap-2">
                <span className="ce-mono">{formatTime(timeSpent)}</span>
              </div>
              <div className="ce-progress"><div className="ce-progress-bar" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ce-main">
        <div className="ce-left">
          <div className="ce-p-6 ce-space-y-6">
            <div>
              <h2 className="ce-text-2xl ce-font-bold ce-mb-4">{currentQuestion.title}</h2>
              <p className="ce-text-body">{currentQuestion.description}</p>
            </div>

            {currentQuestion.constraints.length > 0 && (
              <div>
                <h3 className="ce-text-lg ce-font-semibold ce-mb-3">Constraints</h3>
                <ul className="ce-space-y-2">
                  {currentQuestion.constraints.map((constraint, index) => (
                    <li key={index} className="ce-row-start">
                      <span className="ce-bullet">•</span>
                      <span className="ce-text-muted">{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentQuestion.examples.length > 0 && (
              <div>
                <h3 className="ce-text-lg ce-font-semibold ce-mb-3">Examples</h3>
                <div className="ce-space-y-4">
                  {currentQuestion.examples.map((ex, i) => (
                    <div key={i} className="ce-example">
                      <div className="ce-grid-2 ce-gap-4">
                        <div>
                          <h4 className="ce-font-medium ce-text-sm ce-mb-2">Input:</h4>
                          <code className="ce-code-block">{ex.input}</code>
                        </div>
                        <div>
                          <h4 className="ce-font-medium ce-text-sm ce-mb-2">Output:</h4>
                          <code className="ce-code-block">{ex.output}</code>
                        </div>
                      </div>
                      {ex.explanation && (
                        <div className="ce-mt-3">
                          <h4 className="ce-font-medium ce-text-sm ce-mb-1">Explanation:</h4>
                          <p className="ce-text-muted-sm">{ex.explanation}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="ce-row-between ce-pt-4 ce-border-top">
              <button className="ce-btn ce-btn-outline" onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
              <button className={`ce-btn ${currentQuestionIndex === questions.length - 1 ? "ce-btn-success" : ""}`} onClick={handleNextQuestion}>
                {currentQuestionIndex === questions.length - 1 ? "Complete" : "Next"}
              </button>
            </div>
          </div>
        </div>

        <div className="ce-right">
          <div className="ce-toolbar">
            <div className="ce-row ce-gap-4">
              <span className="ce-font-medium">Code Editor</span>
            </div>
            <div className="ce-row ce-gap-4">
              <select className="ce-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
              <button className="ce-btn ce-btn-sm" onClick={handleRunCode} disabled={isRunning || !code.trim()}>
                {isRunning ? "Running..." : "Run Code"}
              </button>
            </div>
          </div>

          <div className="ce-editor">
            <div className="ce-tabs">
              <div className="ce-tabs-list">
                <button className={`ce-tab ${activeTab === "editor" ? "ce-active" : ""}`} type="button" onClick={() => setActiveTab("editor")}>Editor</button>
                <button className={`ce-tab ${activeTab === "output" ? "ce-active" : ""}`} type="button" onClick={() => setActiveTab("output")}>Output</button>
              </div>
              {activeTab === "editor" ? (
                <div className="ce-tab-panel">
                  <textarea
                    ref={editorRef}
                    value={code}
                    onChange={(e) => handleCodeChange(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="ce-textarea"
                    placeholder={`// Write your ${language} solution here...\n\nfunction solution() {\n    // Your code here\n}`}
                    spellCheck={false}
                  />
                </div>
              ) : (
                <div className="ce-tab-panel">
                  <pre className="ce-output">{output || "Run your code to see the output here..."}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
      .ce-root { min-height: 100vh; background: var(--ce-bg, #fff); color: var(--ce-fg, #0a0a0a); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
      .ce-topbar { border-bottom: 1px solid #e5e7eb; background: var(--ce-card, #fff); }
      .ce-container { max-width: 1200px; margin: 0 auto; padding: 12px 16px; }
      .ce-row { display: flex; align-items: center; }
      .ce-row-start { display: flex; align-items: flex-start; gap: 8px; }
      .ce-row-between { display: flex; align-items: center; justify-content: space-between; }
      .ce-gap-2 { gap: 8px } .ce-gap-4 { gap: 16px }
      .ce-badge { display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 999px; border: 1px solid #e5e7eb; font-size: 12px }
      .ce-badge.medium { background:#f3f4f6 } .ce-badge.hard { background:#fee2e2; color:#991b1b }
      .ce-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      .ce-progress { width: 128px; height: 6px; border-radius: 999px; background: #f3f4f6; overflow:hidden }
      .ce-progress-bar { height: 100%; background:#3b82f6 }
      .ce-main { display: flex; height: calc(100vh - 64px); }
      .ce-left { width: 40%; border-right: 1px solid #e5e7eb; background: var(--ce-card, #fff); overflow: auto; }
      .ce-right { flex: 1; display: flex; flex-direction: column }
      .ce-p-6 { padding: 24px } .ce-space-y-6 > * + * { margin-top: 24px }
      .ce-text-2xl { font-size: 24px } .ce-text-xl { font-size: 20px } .ce-font-bold { font-weight:700 } .ce-font-semibold { font-weight:600 }
      .ce-mb-4 { margin-bottom: 16px }
      .ce-text-body { color: #374151 }
      .ce-text-muted { color: #6b7280 }
      .ce-text-muted-sm { color:#6b7280; font-size: 14px }
      .ce-example { background: #f9fafb; border-radius: 8px; padding: 16px }
      .ce-code-block { display:block; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 13px; background:#f3f4f6; padding:8px; border-radius:6px }
      .ce-grid-2 { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); }
      .ce-gap-4 { gap:16px }
      .ce-pt-4 { padding-top: 16px } .ce-border-top { border-top:1px solid #e5e7eb }
      .ce-btn { display:inline-flex; align-items:center; justify-content:center; height:36px; padding:0 16px; border-radius:8px; background:#0f172a; color:#fff; border:1px solid transparent; cursor:pointer }
      .ce-btn:hover { background:#1e293b }
      .ce-btn:disabled { opacity:0.5; cursor:not-allowed }
      .ce-btn-outline { background:#fff; color:#0f172a; border-color:#e5e7eb }
      .ce-btn-outline:hover { background:#f9fafb }
      .ce-btn-sm { height:32px; padding: 0 12px }
      .ce-btn-success { background:#16a34a }
      .ce-toolbar { display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #e5e7eb; background:var(--ce-card,#fff); padding:12px 16px }
      .ce-select { height:36px; border-radius:8px; border:1px solid #e5e7eb; padding:0 12px; background:#fff }
      .ce-editor { flex: 1; display:flex; flex-direction:column }
      .ce-tabs { display:flex; flex-direction:column; height:100% }
      .ce-tabs-list { display:grid; grid-template-columns: repeat(2, 1fr); border-bottom:1px solid #e5e7eb }
      .ce-tab { height:40px; background:transparent; border:0; cursor:pointer }
      .ce-active { font-weight:600 }
      .ce-tab-panel { flex:1 }
      .ce-textarea { width:100%; height:100%; padding:16px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 13px; background:#0b1020; color:#e2e8f0; border:0; resize:none; outline:none }
      .ce-output { height:100%; padding:16px; background:#0b1020; color:#e2e8f0; overflow:auto; white-space:pre-wrap }
      .ce-min-h { min-height:100vh } .ce-center { display:flex; align-items:center; justify-content:center }
      .ce-card { background:#fff; border-radius:12px; border:1px solid #e5e7eb; }
      .ce-w-md { width: 480px } .ce-card-content { padding: 16px }
      .ce-text-center { text-align:center }
      `}</style>
    </div>
  )
}

export default CodingEnvironment
