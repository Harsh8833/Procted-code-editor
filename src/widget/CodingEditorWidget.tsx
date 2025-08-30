import { useState } from "react"
import { CodingEnvironment } from "../components/CodingEnvironment"
import type { CodingQuestion, SessionData } from "../types/proctoring"

export type CodingEditorWidgetProps = {
  questions: CodingQuestion[]
  onSessionStart?: (sessionId: string) => void
  onSessionUpdate?: (session: Partial<SessionData>) => void
  onEvent?: (e: any) => void
}

export function CodingEditorWidget({ questions, onSessionStart, onSessionUpdate, onEvent }: CodingEditorWidgetProps) {
  const [current, setCurrent] = useState(0)
  const [sessionId] = useState(() => Math.random().toString(36).slice(2))
  const [session, setSession] = useState<SessionData | null>(null)

  if (!session && questions?.length) {
    const init: SessionData = {
      sessionId,
      sessionType: "coding-assessment",
      startTime: Date.now(),
      currentQuestion: { questionId: questions[0].id, startTime: Date.now(), language: "javascript" },
      codingMetrics: {
        totalKeystrokes: 0,
        linesOfCode: 0,
        codeExecutions: 0,
        externalCopyEvents: 0,
        languageSwitches: 0,
        averageTypingSpeed: 0,
        codingTimeVsReadingTime: { coding: 0, reading: 0 },
      },
    }
    setSession(init)
    onSessionStart?.(sessionId)
  }

  return (
    <CodingEnvironment
      questions={questions}
      currentQuestionIndex={current}
      onQuestionChange={(i) => {
        setCurrent(i)
        setSession((s) => (s ? { ...s, currentQuestion: { questionId: questions[i].id, startTime: Date.now(), language: s.currentQuestion?.language ?? "javascript" } } : s))
      }}
      onSessionComplete={() => {}}
      sessionData={session ?? undefined}
      onUpdateSession={(u) => {
        setSession((s) => (s ? { ...s, ...u } as any : s))
        onSessionUpdate?.(u)
      }}
      onAddEvent={(e) => onEvent?.(e)}
    />
  )
}

export default CodingEditorWidget
