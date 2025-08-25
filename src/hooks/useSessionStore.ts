import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { SessionData, MonitoringEvent, PreCheckResults } from "../types/proctoring"

type Action =
  | { type: "INIT"; payload: SessionData }
  | { type: "SET_FIELDS"; payload: Partial<SessionData> }
  | { type: "ADD_EVENTS"; events: MonitoringEvent[] }
  | { type: "ADD_SNAPSHOT"; snapshot: SessionData["snapshots"][number] }
  | { type: "TICK"; now: number }
  | { type: "COMPLETE"; endTime?: number }

const clamp = <T,>(arr: T[], max: number) => (arr.length > max ? arr.slice(arr.length - max) : arr)

const defaultSession = (sessionId: string, preCheckResults: PreCheckResults): SessionData => ({
  sessionId,
  sessionType: "coding-assessment",
  startTime: Date.now(),
  preCheckResults,
  liveEvents: [],
  codingMetrics: {
    totalKeystrokes: 0,
    linesOfCode: 0,
    codeExecutions: 0,
    externalCopyEvents: 0,
    languageSwitches: 0,
    averageTypingSpeed: 0,
    codingTimeVsReadingTime: { coding: 0, reading: 0 },
  },
  questionProgress: [],
  snapshots: [],
  sessionStats: {
    totalDuration: 0,
    questionsAttempted: 0,
    violationCount: 0,
    tabSwitches: 0,
    audioAnomalies: 0,
    gazeDuration: 0,
    focusBreaks: 0,
    codeExecutionCount: 0,
    noFaceIncidents: 0,
    multipleFaceIncidents: 0,
    unfocusEvents: 0,
    gazeOffScreenIncidents: 0,
    keystrokes: 0,
    copyCutPasteAttempts: 0,
  },
})

function reduceStats(stats: SessionData["sessionStats"], e: MonitoringEvent): SessionData["sessionStats"] {
  switch (e.eventType) {
    case "tab_switch":
      return { ...stats, tabSwitches: stats.tabSwitches + 1, violationCount: stats.violationCount + 1 }
    case "audio_anomaly":
      return { ...stats, audioAnomalies: stats.audioAnomalies + 1, violationCount: stats.violationCount + 1 }
    case "code_execution":
      return { ...stats, codeExecutionCount: stats.codeExecutionCount + 1 }
    case "face_detection": {
      const reason = (e as any).data?.reason
      if (reason === "no_face") return { ...stats, noFaceIncidents: stats.noFaceIncidents + 1, violationCount: stats.violationCount + 1 }
      if (reason === "multiple_faces") return { ...stats, multipleFaceIncidents: stats.multipleFaceIncidents + 1, violationCount: stats.violationCount + 1 }
      return stats
    }
    case "gaze_tracking": {
      const isBreak = (e as any).data?.type === "focus_break"
      const focusTime = Number((e as any).data?.focusTimeMs) || 0
      const offscreen = (e as any).data?.offscreen === true
      return {
        ...stats,
        focusBreaks: stats.focusBreaks + (isBreak ? 1 : 0),
        gazeDuration: stats.gazeDuration + focusTime,
        unfocusEvents: stats.unfocusEvents + (isBreak ? 1 : 0),
        gazeOffScreenIncidents: stats.gazeOffScreenIncidents + (offscreen ? 1 : 0),
        violationCount: stats.violationCount + (isBreak || offscreen ? 1 : 0),
      }
    }
    case "keystroke": {
      const cp = (e as any).data?.copyCutPaste === true
      return {
        ...stats,
        keystrokes: stats.keystrokes + 1,
        copyCutPasteAttempts: stats.copyCutPasteAttempts + (cp ? 1 : 0),
        violationCount: stats.violationCount + (cp ? 1 : 0),
      }
    }
    default:
      return stats
  }
}

function reducer(state: SessionData, action: Action): SessionData {
  switch (action.type) {
    case "INIT":
      return { ...action.payload }
    case "SET_FIELDS": {
      const next: SessionData = { ...state, ...action.payload }
      if (next.snapshots) next.snapshots = clamp(next.snapshots, 50)
      if (next.liveEvents) next.liveEvents = clamp(next.liveEvents, 200)
      return next
    }
    case "ADD_EVENTS": {
      const liveEvents = clamp([...state.liveEvents, ...action.events], 200)
      const sessionStats = action.events.reduce(reduceStats, state.sessionStats)
      return { ...state, liveEvents, sessionStats }
    }
    case "ADD_SNAPSHOT": {
      const snapshots = clamp([...state.snapshots, action.snapshot], 50)
      return { ...state, snapshots }
    }
    case "TICK": {
      const totalDuration = Math.max(0, action.now - state.startTime)
      if (totalDuration === state.sessionStats.totalDuration) return state
      return { ...state, sessionStats: { ...state.sessionStats, totalDuration } }
    }
    case "COMPLETE": {
      const end = action.endTime ?? Date.now()
      return { ...state, sessionStats: { ...state.sessionStats, totalDuration: Math.max(0, end - state.startTime) } }
    }
    default:
      return state
  }
}

export function useSessionStore(initial?: { sessionId?: string; preCheckResults?: PreCheckResults }) {
  const [state, setState] = useState<SessionData | null>(null)
  const dispatch = useCallback((action: Action) => {
    setState((prev) => {
      if (!prev) return prev as any
      return reducer(prev, action)
    })
  }, [])

  const sessionIdRef = useRef<string | null>(null)
  const lastSavedRef = useRef(0)
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const init = useCallback((preCheckResults: PreCheckResults) => {
    const id = initial?.sessionId || `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    sessionIdRef.current = id
    const existingRaw = sessionStorage.getItem(id)
    if (existingRaw) {
      try {
        const existing = JSON.parse(existingRaw) as SessionData
        setState(existing)
        return id
      } catch {}
    }
    const s = defaultSession(id, preCheckResults)
    setState(s)
    sessionStorage.setItem(id, JSON.stringify(s))
    return id
  }, [initial?.sessionId])

  const flush = useCallback((snapshot?: SessionData | null) => {
    const s = snapshot ?? state
    if (!s || !sessionIdRef.current) return
    try {
      sessionStorage.setItem(sessionIdRef.current, JSON.stringify(s))
      lastSavedRef.current = Date.now()
    } catch (e) {
      console.error("[session] persist failed", e)
    }
  }, [state])

  useEffect(() => {
    if (!state) return
    const now = Date.now()
    const elapsed = now - lastSavedRef.current
    if (elapsed < 1000) {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
      saveTimeoutRef.current = setTimeout(() => flush(), 1000 - elapsed)
    } else {
      flush()
    }
    return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current) }
  }, [state, flush])

  useEffect(() => {
    const onHide = () => flush()
    window.addEventListener("visibilitychange", onHide)
    window.addEventListener("beforeunload", onHide)
    return () => {
      window.removeEventListener("visibilitychange", onHide)
      window.removeEventListener("beforeunload", onHide)
    }
  }, [flush])

  useEffect(() => {
    if (!state) return
    const id = setInterval(() => dispatch({ type: "TICK", now: Date.now() }), 1000)
    return () => clearInterval(id)
  }, [state, dispatch])

  const api = useMemo(() => ({
    state,
    sessionId: sessionIdRef.current,
    init,
    setFields: (payload: Partial<SessionData>) => dispatch({ type: "SET_FIELDS", payload }),
    addEvents: (events: MonitoringEvent[]) => dispatch({ type: "ADD_EVENTS", events }),
    addSnapshot: (snapshot: SessionData["snapshots"][number]) => dispatch({ type: "ADD_SNAPSHOT", snapshot }),
    complete: () => dispatch({ type: "COMPLETE" }),
  }), [state, dispatch, init])

  return api
}
