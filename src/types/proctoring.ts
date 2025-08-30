export interface CodingQuestion {
  id: string
  title: string
  description: string
  constraints: string[]
  examples: Array<{ input: string; output: string; explanation?: string }>
  // Optional explicit test cases used to validate solutions
  testCases?: Array<{ input: string; output: string }>
  // Optional sample input to show in the UI (separate from test cases)
  sampleInput?: string
  // Optional reference solutions (per language) used to derive expected outputs for new tests
  referenceSolutions?: Partial<Record<'javascript' | 'python' | 'java' | 'cpp', string>>
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
