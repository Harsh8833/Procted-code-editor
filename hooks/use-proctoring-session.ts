"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import type { SessionData, MonitoringEvent, MonitoringStatus, PreCheckResults } from "../types/proctoring"

export function useProctoringSession() {
  const [sessionData, setSessionData] = useState<SessionData | null>(null)
  const [monitoringStatus, setMonitoringStatus] = useState<MonitoringStatus>("optimal")
  const [isMonitoring, setIsMonitoring] = useState(false)
  const sessionIdRef = useRef<string>(undefined)

  const lastSaveTimeRef = useRef<number>(0)
  const pendingUpdateRef = useRef<Partial<SessionData> | null>(null)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const startSession = useCallback((preCheckResults: PreCheckResults) => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionIdRef.current = sessionId

    const initialSessionData: SessionData = {
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
      },
    }

    setSessionData(initialSessionData)
    setIsMonitoring(true)

    // Store in sessionStorage
    sessionStorage.setItem(sessionId, JSON.stringify(initialSessionData))

    console.log("[v0] Proctoring session started:", sessionId)
    return sessionId
  }, [])

  const updateSession = useCallback(
    (updates: Partial<SessionData>) => {
      if (!sessionData || !sessionIdRef.current) return

      const now = Date.now()
      const timeSinceLastSave = now - lastSaveTimeRef.current

      const mergedUpdates = { ...updates }
      if (updates.sessionStats && sessionData.sessionStats) {
        console.log("[v0] Session stats update - before merge:", {
          existing: sessionData.sessionStats,
          incoming: updates.sessionStats
        })
        
        mergedUpdates.sessionStats = {
          ...sessionData.sessionStats,
          ...updates.sessionStats,
          // Always calculate duration based on session start time, never reset it
          totalDuration: sessionData.startTime ? Date.now() - sessionData.startTime : sessionData.sessionStats.totalDuration,
          // Properly accumulate numeric values - use the provided values if they're higher
          questionsAttempted: updates.sessionStats.questionsAttempted !== undefined
            ? Math.max(sessionData.sessionStats.questionsAttempted, updates.sessionStats.questionsAttempted)
            : sessionData.sessionStats.questionsAttempted,
          violationCount: updates.sessionStats.violationCount !== undefined
            ? Math.max(sessionData.sessionStats.violationCount, updates.sessionStats.violationCount)
            : sessionData.sessionStats.violationCount,
          tabSwitches: updates.sessionStats.tabSwitches !== undefined
            ? Math.max(sessionData.sessionStats.tabSwitches, updates.sessionStats.tabSwitches)
            : sessionData.sessionStats.tabSwitches,
          audioAnomalies: updates.sessionStats.audioAnomalies !== undefined
            ? Math.max(sessionData.sessionStats.audioAnomalies, updates.sessionStats.audioAnomalies)
            : sessionData.sessionStats.audioAnomalies,
          gazeDuration: updates.sessionStats.gazeDuration !== undefined
            ? Math.max(sessionData.sessionStats.gazeDuration, updates.sessionStats.gazeDuration)
            : sessionData.sessionStats.gazeDuration,
          focusBreaks: updates.sessionStats.focusBreaks !== undefined
            ? Math.max(sessionData.sessionStats.focusBreaks, updates.sessionStats.focusBreaks)
            : sessionData.sessionStats.focusBreaks,
          codeExecutionCount: updates.sessionStats.codeExecutionCount !== undefined
            ? Math.max(sessionData.sessionStats.codeExecutionCount, updates.sessionStats.codeExecutionCount)
            : sessionData.sessionStats.codeExecutionCount,
        }
        
        console.log("[v0] Session stats update - after merge:", mergedUpdates.sessionStats)
      }

      pendingUpdateRef.current = {
        ...pendingUpdateRef.current,
        ...mergedUpdates,
      }

      if (timeSinceLastSave < 1000) {
        // Clear existing timeout and set a new one
        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current)
        }

        saveTimeoutRef.current = setTimeout(() => {
          if (pendingUpdateRef.current && sessionData && sessionIdRef.current) {
            const updatedData = {
              ...sessionData,
              ...pendingUpdateRef.current,
              sessionStats: pendingUpdateRef.current.sessionStats || sessionData.sessionStats,
            }
            setSessionData(updatedData)

            if (updatedData.snapshots && updatedData.snapshots.length > 50) {
              updatedData.snapshots = updatedData.snapshots.slice(-50) // Keep only last 50 snapshots
            }

            if (updatedData.liveEvents && updatedData.liveEvents.length > 100) {
              updatedData.liveEvents = updatedData.liveEvents.slice(-100) // Keep only last 100 events
            }

            try {
              sessionStorage.setItem(sessionIdRef.current, JSON.stringify(updatedData))
              lastSaveTimeRef.current = Date.now()
              console.log("[v0] Session updated (throttled):", Object.keys(pendingUpdateRef.current || {}))
            } catch (error) {
              console.error("[v0] Failed to save session data:", error)
              // If storage is full, try to clear old data
              if (error instanceof Error && error.name === "QuotaExceededError") {
                console.warn("[v0] Session storage quota exceeded, clearing old data")
                // Keep only essential data
                const essentialData = {
                  ...updatedData,
                  snapshots: updatedData.snapshots?.slice(-20) || [],
                  liveEvents: updatedData.liveEvents?.slice(-50) || [],
                }
                try {
                  sessionStorage.setItem(sessionIdRef.current, JSON.stringify(essentialData))
                } catch (retryError) {
                  console.error("[v0] Failed to save even essential data:", retryError)
                }
              }
            }

            pendingUpdateRef.current = null
          }
        }, 1000 - timeSinceLastSave)
        return
      }

      const updatedData = {
        ...sessionData,
        ...mergedUpdates,
        sessionStats: mergedUpdates.sessionStats || sessionData.sessionStats,
      }
      setSessionData(updatedData)

      if (updatedData.snapshots && updatedData.snapshots.length > 50) {
        updatedData.snapshots = updatedData.snapshots.slice(-50)
      }
      if (updatedData.liveEvents && updatedData.liveEvents.length > 100) {
        updatedData.liveEvents = updatedData.liveEvents.slice(-100)
      }

      try {
        sessionStorage.setItem(sessionIdRef.current, JSON.stringify(updatedData))
        lastSaveTimeRef.current = now
        console.log("[v0] Session updated (immediate):", Object.keys(mergedUpdates))
      } catch (error) {
        console.error("[v0] Failed to save session data:", error)
      }

      pendingUpdateRef.current = null
    },
    [sessionData],
  )

  const addEvent = useCallback(
    (event: Omit<MonitoringEvent, "timestamp">) => {
      if (!sessionData) return

      const newEvent: MonitoringEvent = {
        ...event,
        timestamp: Date.now(),
      }

      const updatedEvents = [...sessionData.liveEvents, newEvent]
      const updatedStats = { ...sessionData.sessionStats }

      // Update violation count
      if (event.severity === "critical") {
        updatedStats.violationCount += 1
        setMonitoringStatus("violation")
      } else if (event.severity === "warning") {
        setMonitoringStatus("warning")
      }

      // Update specific counters
      switch (event.eventType) {
        case "tab_switch":
          updatedStats.tabSwitches += 1
          break
        case "audio_anomaly":
          updatedStats.audioAnomalies += 1
          break
        case "code_execution":
          updatedStats.codeExecutionCount += 1
          break
      }

      updateSession({
        liveEvents: updatedEvents,
        sessionStats: updatedStats,
      })
    },
    [sessionData, updateSession],
  )

  const completeSession = useCallback((): SessionData => {
    if (!sessionData) {
      throw new Error("No active session to complete")
    }

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current)
    }

    const finalData = {
      ...sessionData,
      sessionStats: {
        ...sessionData.sessionStats,
        totalDuration: Date.now() - sessionData.startTime,
      },
    }

    setIsMonitoring(false)
    setMonitoringStatus("optimal")

    console.log("[v0] Session completed:", finalData)
    return finalData
  }, [sessionData])

  return {
    sessionData,
    monitoringStatus,
    isMonitoring,
    startSession,
    updateSession,
    addEvent,
    completeSession,
  }
}
