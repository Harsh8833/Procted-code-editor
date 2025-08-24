import type { MonitoringStatus, PreCheckResults, SessionData } from '../types/proctoring'

export type StartOptions = {
  autoStart?: boolean
  initialPrecheck?: Partial<PreCheckResults>
  onStatusChange?: (status: MonitoringStatus) => void
  onSessionUpdate?: (session: SessionData) => void
}

export type ProctoringWidgetProps = StartOptions & {
  className?: string
  style?: React.CSSProperties
  draggable?: boolean
  showPrecheck?: boolean
  position?: { x: number; y: number }
}
