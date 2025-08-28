export interface CodingQuestion {
  id: string
  title: string
  description: string
  constraints: string[]
  examples: Array<{ input: string; output: string; explanation?: string }>
  difficulty: "easy" | "medium" | "hard"
  timeLimit?: number
}

export interface SessionData {
  sessionId: string
  sessionType: "coding-assessment"
  startTime: number
  currentQuestion?: { questionId: string; startTime: number; language: string }
  codingMetrics: {
    totalKeystrokes: number
    linesOfCode: number
    codeExecutions: number
    externalCopyEvents: number
    languageSwitches: number
    averageTypingSpeed: number
    codingTimeVsReadingTime: { coding: number; reading: number }
  }
}
