"use client"

import { useCallback, useMemo, useState } from "react"
import type { SessionData, MonitoringEvent, MonitoringStatus, PreCheckResults } from "../types/proctoring"
import { useSessionStore } from "./session-store"

export function useProctoringSession() {
  const [monitoringStatus, setMonitoringStatus] = useState<MonitoringStatus>("optimal")
  const [isMonitoring, setIsMonitoring] = useState(false)
  const store = useSessionStore()

  const startSession = useCallback((preCheckResults: PreCheckResults) => {
    const id = store.init(preCheckResults)
    setIsMonitoring(true)
    return id
  }, [store])

  const updateSession = useCallback((updates: Partial<SessionData>) => {
    store.setFields(updates)
  }, [store])

  const addEvent = useCallback((event: Omit<MonitoringEvent, "timestamp">) => {
    const newEvent: MonitoringEvent = { ...event, timestamp: Date.now() }
    // Update monitoringStatus side-channel
    if (event.severity === "critical") setMonitoringStatus("violation")
    else if (event.severity === "warning") setMonitoringStatus("warning")
    store.addEvents([newEvent])
  }, [store])

  const completeSession = useCallback((): SessionData => {
    store.complete()
    setIsMonitoring(false)
    setMonitoringStatus("optimal")
    // Return latest snapshot
    return store.state as SessionData
  }, [store])

  const sessionData = store.state

  return useMemo(() => ({
    sessionData,
    monitoringStatus,
    isMonitoring,
    startSession,
    updateSession,
    addEvent,
    completeSession,
  }), [sessionData, monitoringStatus, isMonitoring, startSession, updateSession, addEvent, completeSession])
}
