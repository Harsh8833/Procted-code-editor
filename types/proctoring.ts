export interface FaceDetection {
  x: number
  y: number
  width: number
  height: number
  confidence: number
}

export interface PostureAnalysis {
  isGoodPosture: boolean
  shoulderAlignment: number
  headTilt: number
  confidence: number
}

export interface ExpressionAnalysis {
  dominant: string
  confidence: number
  emotions: { [key: string]: number }
}

export interface AttireAnalysis {
  isProfessional: boolean
  hasShirt: boolean
  confidence: number
  details: string
}

export interface EyeContactAnalysis {
  isLookingAtCamera: boolean
  gazeDirection: { x: number; y: number }
  confidence: number
  attentionScore: number
}

export interface PreCheckResults {
  cameraAccess: boolean
  microphoneAccess: boolean
  faceDetection: { status: boolean; confidence: number; timestamp: number }
  monitorCount: number
  browserSupport: boolean
  codeEditorReady: boolean
}

export interface MonitoringEvent {
  timestamp: number
  eventType:
    | "face_detection"
    | "tab_switch"
    | "audio_anomaly"
    | "keystroke"
    | "gaze_tracking"
    | "code_execution"
    | "external_copy"
  severity: "info" | "warning" | "critical"
  context: "question_reading" | "coding" | "debugging" | "thinking"
  data: any
  screenshot?: string
  codeSnapshot?: string
}

export interface CodingQuestion {
  id: string
  title: string
  description: string
  constraints: string[]
  examples: Array<{
    input: string
    output: string
    explanation?: string
  }>
  difficulty: "easy" | "medium" | "hard"
  timeLimit?: number
  templates?: Partial<Record<'javascript' | 'python' | 'java' | 'cpp', string>>
}

export interface SessionData {
  sessionId: string
  sessionType: "coding-assessment"
  startTime: number
  currentQuestion?: {
    questionId: string
    startTime: number
    language: string
  }
  preCheckResults: PreCheckResults
  liveEvents: MonitoringEvent[]
  codingMetrics: {
    totalKeystrokes: number
    linesOfCode: number
    codeExecutions: number
    externalCopyEvents: number
    languageSwitches: number
    averageTypingSpeed: number
    codingTimeVsReadingTime: { coding: number; reading: number }
  }
  questionProgress: Array<{
    questionId: string
    timeSpent: number
    codeSubmitted: string
    executionResults: any[]
    violationCount: number
    completionStatus: "attempted" | "completed" | "skipped"
  }>
  snapshots: Array<{
    timestamp: number
    type: "random_webcam" | "code_editor" | "violation_trigger"
    image: string
    context: string
  }>
  // Latest analyses captured from the video widget
  postureAnalysis?: PostureAnalysis
  attireAnalysis?: AttireAnalysis
  sessionStats: {
    totalDuration: number
    questionsAttempted: number
    violationCount: number
    tabSwitches: number
    audioAnomalies: number
    gazeDuration: number
    focusBreaks: number
    codeExecutionCount: number
    // New counters
    noFaceIncidents: number
    multipleFaceIncidents: number
    unfocusEvents: number
    gazeOffScreenIncidents: number
    keystrokes: number
    copyCutPasteAttempts: number
  }
}

export type ProctoringPhase = "initial" | "precheck" | "coding" | "complete"
export type MonitoringStatus = "optimal" | "warning" | "violation"
