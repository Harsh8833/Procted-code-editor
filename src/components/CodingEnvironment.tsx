import { useState, useEffect, useRef, useCallback } from "react"
import type { CodingQuestion, SessionData } from "../types/proctoring"
import { runTests, runAndWait, runMany } from "../services/judge0"
import { Editor } from "@monaco-editor/react"
import type { OnMount } from "@monaco-editor/react"

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
  const [testResults, setTestResults] = useState<any[] | null>(null)
  const [selectedTestIndex, setSelectedTestIndex] = useState(0)
  const [editableTests, setEditableTests] = useState<Array<{ input: string; output: string }>>([])
  const [testsByQuestion, setTestsByQuestion] = useState<Record<string, Array<{ input: string; output: string }>>>({})
  const [isRunning, setIsRunning] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('ce-theme') as 'light' | 'dark') || 'light')
  const [timeRemainingByQuestion, setTimeRemainingByQuestion] = useState<Record<string, number>>({})
  // Resizable layout state
  const [leftWidthPct, setLeftWidthPct] = useState<number>(40)
  const [resultsHeightPx, setResultsHeightPx] = useState<number>(220)
  const mainRef = useRef<HTMLDivElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)
  const draggingRef = useRef<{ type: 'vertical' | 'horizontal' | null }>({ type: null })
  const editorRef = useRef<any>(null)
  // Store code per question per language
  const [codeByQuestionLang, setCodeByQuestionLang] = useState<Record<string, string>>({})

  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastCodeSaveRef = useRef<string>("")
  const keystrokeCountRef = useRef<number>(0)
  const startTimeRef = useRef<number>(Date.now())
  const lastFocusTimeRef = useRef<number>(Date.now())
  const totalFocusTimeRef = useRef<number>(0)

  const currentQuestion = questions[currentQuestionIndex]

  // Language starter templates (simple defaults)
  const templates: Record<string, string> = {
    javascript: `function solution(input){\n  // TODO\n  return ''\n}\n\nconst fs = require('fs');\nconst data = fs.readFileSync(0,'utf8');\nconsole.log(solution(data));\n`,
    python: `def solution(input: str):\n    # TODO\n    return ''\n\nimport sys\nprint(solution(sys.stdin.read()))\n`,
    java: `import java.io.*;\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    String input = new String(System.in.readAllBytes());\n    System.out.print(solution(input));\n  }\n  static String solution(String input){\n    // TODO\n    return "";\n  }\n}\n`,
    cpp: `#include <bits/stdc++.h>\nusing namespace std;\nstring solution(string input){\n  // TODO\n  return "";\n}\nint main(){\n  ios::sync_with_stdio(false);cin.tie(nullptr);\n  string s, line; while (getline(cin,line)) { s += line + "\n"; }\n  cout << solution(s);\n}\n`,
  }

  // When question changes, load saved code for current language or initialize from template
  useEffect(() => {
    if (!currentQuestion) return
    const qid = currentQuestion.id
    const key = `${qid}:${language}`
    const saved = codeByQuestionLang[key]
    if (saved !== undefined) {
      setCode(saved)
    } else {
      const initial = templates[language] || ""
      setCode(initial)
      setCodeByQuestionLang((m) => ({ ...m, [key]: initial }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex])

  // When language changes, swap to that language's code for this question or template
  useEffect(() => {
    if (!currentQuestion) return
    const qid = currentQuestion.id
    const key = `${qid}:${language}`
    const saved = codeByQuestionLang[key]
    if (saved !== undefined) {
      setCode(saved)
    } else {
      const initial = templates[language] || ""
      setCode(initial)
      setCodeByQuestionLang((m) => ({ ...m, [key]: initial }))
    }
  setTestResults(null)
  setOutput("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  // Initialize editable tests from per-question cache or question defaults
  useEffect(() => {
    if (!currentQuestion) return
    const qid = currentQuestion.id
    const saved = testsByQuestion[qid]
    if (saved !== undefined) {
      setEditableTests(saved)
    } else {
  const tests = (currentQuestion.testCases && currentQuestion.testCases.length > 0)
        ? [...currentQuestion.testCases]
        : [{ input: "", output: "" }]
      setEditableTests(tests)
      setTestsByQuestion((m) => ({ ...m, [qid]: tests }))
    }
    setSelectedTestIndex(0)
  }, [currentQuestionIndex])

  // Focus/blur tracking
  const handleFocus = useCallback(() => {
    lastFocusTimeRef.current = Date.now()
  }, [])

  const handleBlur = useCallback(() => {
    const focusTime = Date.now() - lastFocusTimeRef.current
    if (focusTime > 0) {
      totalFocusTimeRef.current += focusTime
    }
    if (onUpdateSession) {
      const base = (sessionData as any)?.codingMetrics ?? {
        totalKeystrokes: 0,
        linesOfCode: 0,
        externalCopyEvents: 0,
        languageSwitches: 0,
        averageTypingSpeed: 0,
        codingTimeVsReadingTime: { coding: 0, reading: 0 },
      }
      const coding = Math.floor(totalFocusTimeRef.current / 1000)
      const total = Date.now() - startTimeRef.current
      const reading = Math.max(0, Math.floor(total / 1000) - coding)
      onUpdateSession({
        codingMetrics: {
          ...base,
          codingTimeVsReadingTime: { coding, reading },
        },
      })
    }
  }, [onUpdateSession, sessionData])

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (!isRunning && code.trim()) handleRunCode()
    })
  // track focus/blur like before
  editor.onDidFocusEditorText(() => handleFocus())
  editor.onDidBlurEditorText(() => handleBlur())
  }

  // Splitter drag handlers
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingRef.current.type) return
      if (draggingRef.current.type === 'vertical') {
        const main = mainRef.current
        if (!main) return
        const rect = main.getBoundingClientRect()
        const sideNavWidth = 56 // matches .ce-side-nav
        const x = e.clientX - rect.left - sideNavWidth
        const usable = rect.width - sideNavWidth
        if (usable <= 0) return
        const pct = Math.max(20, Math.min(70, (x / usable) * 100))
        setLeftWidthPct(pct)
      } else if (draggingRef.current.type === 'horizontal') {
        const right = rightRef.current
        if (!right) return
        const rect = right.getBoundingClientRect()
        const fromBottom = rect.bottom - e.clientY
        const minResults = 140
        const maxResults = Math.max(minResults, rect.height - 160) // keep editor min height
        const h = Math.max(minResults, Math.min(maxResults, fromBottom))
        setResultsHeightPx(h)
      }
    }
    const onUp = () => {
      draggingRef.current.type = null
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

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
      if (currentQuestion) {
        const qid = currentQuestion.id
        const key = `${qid}:${language}`
        setCodeByQuestionLang((m) => ({ ...m, [key]: newCode }))
      }
      keystrokeCountRef.current += 1
      onAddEvent?.({ eventType: "keystroke", severity: "info" as const, context: "coding", data: {} })

      if (onUpdateSession) {
        const linesOfCode = newCode
          .split("\n")
          .filter((line) => line.trim().length > 0).length
        const base = (sessionData as any)?.codingMetrics ?? {
          totalKeystrokes: 0,
          linesOfCode: 0,
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
            averageTypingSpeed:
              keystrokeCountRef.current / ((Date.now() - startTimeRef.current) / 60000),
          },
        })
      }
      debouncedSaveCode(newCode)
    },
    [currentQuestion, language, onAddEvent, onUpdateSession, sessionData, debouncedSaveCode]
  )

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onAddEvent?.({ eventType: "tab_switch", severity: "critical" as const, context: "coding", data: { timestamp: Date.now() } })
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [onAddEvent])

  // Initialize and decrement per-question remaining time while active
  useEffect(() => {
    if (!currentQuestion) return
    const qid = currentQuestion.id
    // initialize remaining time for this question if first visit
  setTimeRemainingByQuestion((m) => (m[qid] !== undefined ? m : { ...m, [qid]: 1800 }))
    const interval = setInterval(() => {
      setTimeRemainingByQuestion((m) => {
        const cur = m[qid] ?? Math.max(0, currentQuestion.timeLimit ?? 60)
        if (cur <= 0) return m
        return { ...m, [qid]: cur - 1 }
      })
    }, 1000)
    return () => {
      clearInterval(interval)
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current)
    }
  }, [currentQuestionIndex])
  // Persist theme
  useEffect(() => {
    try { localStorage.setItem('ce-theme', theme) } catch {}
  }, [theme])

  // Generate expected outputs in batch using reference solution
  const handleGenerateExpected = useCallback(async () => {
    if (!currentQuestion) return
    const typedLanguage = (['javascript','python','java','cpp'] as const).includes(language as any)
      ? (language as 'javascript'|'python'|'java'|'cpp')
      : 'javascript'
    const ref = currentQuestion.referenceSolutions?.[typedLanguage]
    if (!ref) {
      setOutput('No reference solution available for this language to generate expected outputs.')
      return
    }
    setIsRunning(true)
    try {
      const qid = currentQuestion.id
      const tests = editableTests
      const stdins = tests.map((t) => t.input)
      const results = await runMany({ language: typedLanguage as any, sourceCode: ref, stdins })
      const filled = tests.map((t, i) => ({ input: t.input, output: (results[i]?.stdout ?? '').trim() }))
      setEditableTests(filled)
      setTestsByQuestion((m) => ({ ...m, [qid]: filled }))
      setOutput('Expected outputs generated from reference solution.')
    } catch (e: any) {
      setOutput(`Could not generate expected outputs: ${e?.message || e}`)
    } finally {
      setIsRunning(false)
    }
  }, [currentQuestion, editableTests, language])

  // Reset selected test tab when question changes
  useEffect(() => {
    setSelectedTestIndex(0)
  setTestResults(null)
  setOutput("")
  }, [currentQuestionIndex])

  const handleRunCode = async () => {
    setIsRunning(true)
    onAddEvent?.({
      eventType: "code_execution",
      severity: "info" as const,
      context: "coding",
      data: { language, codeLength: code.length, linesOfCode: code.split("\n").length },
    })
    try {
      // Always run editable tests
      const tests = editableTests
      if (!tests || tests.length === 0) {
        setOutput('No test cases defined for this question.')
        setTestResults(null)
      } else {
        const results = await runTests({ language: language as any, sourceCode: code, tests })
        setTestResults(results)
        const passed = results.filter((r) => (r as any).pass).length
        setOutput(`Tests: ${passed}/${results.length} passed`)
      }
    } catch (err: any) {
      setOutput(`Error: ${err?.message || err}`)
      setTestResults(null)
    } finally {
  setIsRunning(false)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      onQuestionChange(currentQuestionIndex + 1)
  // keep per-question code; do not clear editor or output
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
    const ed = editorRef.current
    const el: HTMLElement | null = ed?.getDomNode?.() ?? null
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

  // Per-question remaining time (persists across switches)
  const totalTime = 1800
  const remaining = Math.max(0, timeRemainingByQuestion[currentQuestion.id] ?? totalTime)

  return (
    <div className="ce-root" data-theme={theme}>
      <div className="ce-topbar">
        <div className="ce-container">
          <div className="ce-topbar-main">
            <div className="ce-topbar-left">
              <h1 className="ce-topbar-title">Coding Assessment</h1>
              <div className="ce-topbar-meta">
                <span className="ce-badge">Q {currentQuestionIndex + 1} / {questions.length}</span>
                <span className={`ce-badge ${currentQuestion.difficulty}`}>{currentQuestion.difficulty}</span>
              </div>
            </div>
            <div className="ce-topbar-right">
              <span className="ce-time-chip">{formatTime(remaining)} left</span>
              <button
                className="ce-toggle"
                type="button"
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              >
                {theme === 'light' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M18.5 17.5L20 19M5 19l1.5-1.5M18.5 6.5L20 5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

  <div className="ce-main" ref={mainRef}>
        {/* Side question numbers */}
        <div className="ce-side-nav">
          {questions.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`ce-side-btn ${i === currentQuestionIndex ? 'active' : ''}`}
              onClick={() => onQuestionChange(i)}
              title={`Question ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

  <div className="ce-left" style={{ width: `${leftWidthPct}%` }}>
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

            {/* Navigation handled by side bar */}
          </div>
        </div>

        <div
          className="ce-divider-vert"
          onMouseDown={(e) => {
            e.preventDefault()
            draggingRef.current.type = 'vertical'
            document.body.style.cursor = 'col-resize'
            document.body.style.userSelect = 'none'
          }}
        />

        <div className="ce-right" ref={rightRef}>
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
              {(() => {
                const typedLanguage = (['javascript','python','java','cpp'] as const).includes(language as any)
                  ? (language as 'javascript'|'python'|'java'|'cpp')
                  : 'javascript'
                return !!currentQuestion?.referenceSolutions?.[typedLanguage]
              })() && (
                <button className="ce-btn ce-btn-outline ce-btn-sm" onClick={handleGenerateExpected} disabled={isRunning} title="Generate expected outputs using reference solution">
                  Generate Expected
                </button>
              )}
            </div>
          </div>

          <div className="ce-editor" style={{ height: `calc(100% - ${resultsHeightPx + 6}px)` }}>
            <div className="ce-tab-panel" style={{ height: '100%' }}>
              <Editor
                height="100%"
                defaultLanguage={language}
                language={language}
                theme={theme === 'dark' ? 'vs-dark' : 'vs'}
                value={code}
                onChange={(v?: string) => handleCodeChange(v || '')}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  automaticLayout: true,
                  fontSize: 14,
                  wordWrap: 'on',
                  tabSize: 2,
                  smoothScrolling: true,
                  scrollBeyondLastLine: false,
                  renderWhitespace: 'none',
                }}
              />
            </div>
          </div>
          <div
            className="ce-divider-horiz"
            onMouseDown={(e) => {
              e.preventDefault()
              draggingRef.current.type = 'horizontal'
              document.body.style.cursor = 'row-resize'
              document.body.style.userSelect = 'none'
            }}
          />

          {/* Test cases area with edit/add */}
          <div className="ce-results" style={{ height: resultsHeightPx }}>
            <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <strong>Test Cases</strong>
              {testResults && testResults.length > 0 && (
                <span className="ce-mono ce-text-muted-sm">{testResults.filter((r: any) => r.pass).length}/{testResults.length} passed</span>
              )}
            </div>

            {/* Tabs header */}
            {(editableTests.length > 0) ? (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                {editableTests.map((_, i) => {
                  const status = testResults?.[i]
                  const pass = status?.pass
                  return (
                    <button
                      key={i}
                      className={`ce-btn ce-btn-sm ${selectedTestIndex === i ? '' : 'ce-btn-outline'}`}
                      onClick={() => setSelectedTestIndex(i)}
                      type="button"
                      title={`View test case ${i+1}`}
                    >
                      Case {i + 1}
                      {status !== undefined && (
                        <span style={{ marginLeft: 8, fontWeight: 600, color: pass ? '#16a34a' : '#b91c1c' }}>
                          {pass ? 'PASS' : 'FAIL'}
                        </span>
                      )}
                    </button>
                  )
                })}
                <button
                  className="ce-btn ce-btn-sm ce-btn-outline"
                  type="button"
                  onClick={() => {
                    if (!currentQuestion) return
                    const qid = currentQuestion.id
                    setEditableTests((prev) => {
                      const next = [...prev, { input: '', output: '' }]
                      setTestsByQuestion((m) => ({ ...m, [qid]: next }))
                      return next
                    })
                    setSelectedTestIndex(editableTests.length)
                  }}
                >+ Add case</button>
              </div>
            ) : (
              <div className="ce-text-muted" style={{ marginBottom: 12 }}>No sample test cases provided.</div>
            )}

            {/* Tab content */}
            {(editableTests.length > 0) && (
              (() => {
                const t = editableTests[selectedTestIndex] || { input: '', output: '' }
                const r: any = testResults?.[selectedTestIndex]
                return (
                    <div className="ce-example" style={{ marginBottom: 12 }}>
                    <div className="ce-grid-2 ce-gap-4">
                      <div>
                        <h4 className="ce-font-medium ce-text-sm ce-mb-2">Input (editable)</h4>
                        <textarea
                          className="ce-code-block"
                          style={{ width: '100%', height: 100 }}
                          value={t.input}
                          onChange={(e) => {
                            const val = e.target.value
                            if (!currentQuestion) return
                            const qid = currentQuestion.id
                            setEditableTests((prev) => {
                              const next = prev.map((tc, idx) => idx === selectedTestIndex ? { ...tc, input: val } : tc)
                              setTestsByQuestion((m) => ({ ...m, [qid]: next }))
                              return next
                            })
                          }}
                        />
                      </div>
                        <div>
                          {r && t.output.trim() !== '' && (
                            <>
                              <h4 className="ce-font-medium ce-text-sm ce-mb-2">Expected</h4>
                              <code className="ce-code-block">{t.output}</code>
                            </>
                          )}
                        </div>
                    </div>
                    {r && (
                      <div className="ce-grid-2 ce-gap-4" style={{ marginTop: 12 }}>
                        {!r.stderr && !r.compile_output ? (
                          <div>
                            <h4 className="ce-font-medium ce-text-sm ce-mb-2">Actual Output</h4>
                            <code className="ce-code-block">{(r.stdout ?? '').trim()}</code>
                          </div>
                        ) : (
                          <div>
                            <h4 className="ce-font-medium ce-text-sm ce-mb-2">Error</h4>
                            {r.stderr && <code className="ce-code-block">{r.stderr}</code>}
                            {r.compile_output && <code className="ce-code-block">{r.compile_output}</code>}
                          </div>
                        )}
                        <div>
                          <h4 className="ce-font-medium ce-text-sm ce-mb-2">Status</h4>
                          <div style={{ fontWeight: 700, color: r.pass ? '#16a34a' : '#b91c1c' }}>{r.pass ? 'PASS' : 'FAIL'}</div>
                        </div>
                      </div>
                    )}

                    <div className="ce-row ce-gap-4" style={{ marginTop: 12 }}>
                      <button
                        className="ce-btn ce-btn-outline ce-btn-sm"
                        type="button"
                        onClick={() => {
                          if (editableTests.length <= 1) return
                          if (!currentQuestion) return
                          const qid = currentQuestion.id
                          setEditableTests((prev) => {
                            const next = prev.filter((_, idx) => idx !== selectedTestIndex)
                            setTestsByQuestion((m) => ({ ...m, [qid]: next }))
                            return next
                          })
                          setSelectedTestIndex((idx) => Math.max(0, idx - 1))
                        }}
                        disabled={editableTests.length <= 1}
                      >Delete Case</button>
                      <button className="ce-btn ce-btn-sm" onClick={handleRunCode} disabled={isRunning || !code.trim()}>{isRunning ? 'Running...' : 'Run All'}</button>
                    </div>
                  </div>
                )
              })()
            )}
          </div>
        </div>
      </div>

      <style>{`
    html, body, #root { height:100%; margin:0; padding:0; overflow:hidden; }
    .ce-root { min-height: 100vh; background: var(--ce-bg, #fff); color: var(--ce-fg, #0a0a0a); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
  .ce-topbar { position: sticky; top: 0; z-index: 20; border-bottom: 1px solid var(--ce-border, rgba(0,0,0,0.06)); background: var(--ce-topbar-bg, rgba(255,255,255,0.8)); backdrop-filter: saturate(120%) blur(6px); }
  .ce-container { max-width: 1280px; margin: 0 auto; padding: 0; }
  .ce-row { display: flex; align-items: center; }
  .ce-topbar-main { display:flex; align-items:center; justify-content:space-between; gap: 16px; }
  .ce-topbar-left { display:flex; align-items:center; gap: 14px; }
  .ce-topbar-title { font-size: 18px; font-weight: 700; letter-spacing: 0.2px; }
  .ce-topbar-meta { display:flex; align-items:center; gap: 8px; }
  .ce-topbar-right { display:flex; align-items:center; gap: 12px; }
  .ce-time-chip { display:inline-flex; align-items:center; padding: 6px 10px; border-radius: 999px; background: var(--ce-btn-bg, #0f172a); color: var(--ce-btn-fg, #fff); font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 12px; }
  .ce-toggle { height: 28px; min-width: 28px; border-radius: 999px; border: 1px solid var(--ce-border, #e5e7eb); background: var(--ce-card, #fff); color: var(--ce-fg, #0a0a0a); padding: 0 8px; cursor: pointer; }
      .ce-row-start { display: flex; align-items: flex-start; gap: 8px; }
      .ce-row-between { display: flex; align-items: center; justify-content: space-between; }
      .ce-gap-2 { gap: 8px } .ce-gap-4 { gap: 16px }
  .ce-badge { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px; border: 1px solid var(--ce-border, #e5e7eb); font-size: 12px; background: var(--ce-card, #fff); color: var(--ce-fg, #0a0a0a) }
      .ce-badge.medium { background:#f3f4f6 } .ce-badge.hard { background:#fee2e2; color:#991b1b }
      .ce-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
  /* legacy progress removed */
  .ce-main { display: flex; height: calc(100vh - 64px); overflow: hidden; }
  .ce-side-nav { width: 56px; border-right: 1px solid var(--ce-border, #e5e7eb); background: var(--ce-card, #fff); display:flex; flex-direction:column; padding:8px; gap:8px }
  .ce-side-btn { width: 40px; height: 40px; border-radius: 8px; border: 1px solid var(--ce-border, #e5e7eb); background: var(--ce-card, #fff); color: var(--ce-fg, #0a0a0a); cursor:pointer }
  .ce-side-btn.active { background: var(--ce-btn-bg, #0f172a); color: var(--ce-btn-fg, #fff); border-color: transparent }
    .ce-left { border-right: 1px solid var(--ce-border, #e5e7eb); background: var(--ce-card, #fff); overflow: auto; }
    .ce-right { flex: 1; display: flex; flex-direction: column; background: var(--ce-card, #fff); min-width: 0; }
    .ce-divider-vert { width: 6px; cursor: col-resize; background: var(--ce-border, #e5e7eb); }
    .ce-divider-horiz { height: 6px; cursor: row-resize; background: var(--ce-border, #e5e7eb); }
      .ce-p-6 { padding: 24px } .ce-space-y-6 > * + * { margin-top: 24px }
      .ce-text-2xl { font-size: 24px } .ce-text-xl { font-size: 20px } .ce-font-bold { font-weight:700 } .ce-font-semibold { font-weight:600 }
      .ce-mb-4 { margin-bottom: 16px }
      .ce-text-body { color: var(--ce-muted, #374151) }
      .ce-text-muted { color: var(--ce-muted, #6b7280) }
      .ce-text-muted-sm { color: var(--ce-muted, #6b7280); font-size: 14px }
      .ce-example { background: var(--ce-surface-muted, #f9fafb); border-radius: 8px; padding: 16px }
      .ce-code-block { display:block; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 13px; background: var(--ce-code-bg, #f3f4f6); color: var(--ce-fg, #0a0a0a); padding:8px; border-radius:6px }
      .ce-grid-2 { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); }
      .ce-gap-4 { gap:16px }
      .ce-pt-4 { padding-top: 16px } .ce-border-top { border-top:1px solid #e5e7eb }
      .ce-btn { display:inline-flex; align-items:center; justify-content:center; height:36px; padding:0 16px; border-radius:8px; background: var(--ce-btn-bg, #0f172a); color: var(--ce-btn-fg, #fff); border:1px solid transparent; cursor:pointer }
      .ce-btn:hover { filter: brightness(1.05) }
      .ce-btn:disabled { opacity:0.5; cursor:not-allowed }
      .ce-btn-outline { background: var(--ce-card, #fff); color: var(--ce-fg, #0a0a0a); border-color: var(--ce-border, #e5e7eb) }
      .ce-btn-outline:hover { background: var(--ce-surface-muted, #f9fafb) }
      .ce-btn-sm { height:32px; padding: 0 12px }
      .ce-btn-success { background:#16a34a }
      .ce-toolbar { display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--ce-border, #e5e7eb); background:var(--ce-card,#fff); padding:12px 16px }
      .ce-select { height:36px; border-radius:8px; border:1px solid var(--ce-border, #e5e7eb); padding:0 12px; background:var(--ce-card, #fff); color: var(--ce-fg, #0a0a0a) }
      .ce-editor { flex: 1; display:flex; flex-direction:column }
      .ce-tab-panel { flex:1 }
    .ce-results { border-top: 1px solid var(--ce-border, #e5e7eb); background: var(--ce-card, #fff); overflow: auto; padding: 16px; }
  .ce-textarea { width:100%; height:100%; padding:16px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 13px; background: var(--ce-card, #fff); color: var(--ce-fg, #0a0a0a); border:0; resize:none; outline:none }
      .ce-min-h { min-height:100vh } .ce-center { display:flex; align-items:center; justify-content:center }
      .ce-card { background: var(--ce-card, #fff); color: var(--ce-fg, #0a0a0a); border-radius:12px; border:1px solid var(--ce-border, #e5e7eb); }
      .ce-w-md { width: 480px } .ce-card-content { padding: 16px }
      .ce-text-center { text-align:center }
      /* Theme variables */
      .ce-root[data-theme='light'] {
        --ce-bg: #ffffff;
        --ce-fg: #0a0a0a;
        --ce-card: #ffffff;
        --ce-border: #e5e7eb;
        --ce-muted: #374151;
        --ce-code-bg: #f3f4f6;
        --ce-topbar-bg: rgba(255,255,255,0.8);
        --ce-btn-bg: #0f172a;
        --ce-btn-fg: #ffffff;
        --ce-surface-muted: #f9fafb;
      }
      .ce-root[data-theme='dark'] {
        --ce-bg: #0b1020;
        --ce-fg: #e5e7eb;
        --ce-card: #0f172a;
        --ce-border: #1f2937;
        --ce-muted: #9ca3af;
        --ce-code-bg: #111827;
        --ce-topbar-bg: rgba(15,23,42,0.8);
        --ce-btn-bg: #334155;
        --ce-btn-fg: #e5e7eb;
        --ce-surface-muted: #111827;
      }
      `}</style>
    </div>
  )
}

export default CodingEnvironment
