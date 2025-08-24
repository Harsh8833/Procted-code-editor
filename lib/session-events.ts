import type { MonitoringEvent } from "../types/proctoring"

export const SessionEvents = {
  tabSwitch(): MonitoringEvent {
    return { eventType: "tab_switch", severity: "critical", context: "coding", data: {}, timestamp: Date.now() }
  },
  focusBreak(focusTimeMs: number, gazeDurationMs: number): MonitoringEvent {
    return {
      eventType: "gaze_tracking",
      severity: "warning",
      context: "coding",
      data: { focusTimeMs, gazeDurationMs, type: "focus_break" },
      timestamp: Date.now(),
    }
  },
  codeExecution(language: string, codeLength: number, lines: number): MonitoringEvent {
    return {
      eventType: "code_execution",
      severity: "info",
      context: "coding",
      data: { language, codeLength, lines },
      timestamp: Date.now(),
    }
  },
  audioAnomaly(level: number): MonitoringEvent {
    return {
      eventType: "audio_anomaly",
      severity: "warning",
      context: "coding",
      data: { level },
      timestamp: Date.now(),
    }
  },
}
