import { useEffect, useState } from "react"
import { Prechecks } from "../components/Prechecks"
import { FloatingVideo } from "../components/FloatingVideo"
import type { MonitoringStatus, PreCheckResults, SessionData } from "../types/proctoring"
import { useSessionStore } from "../hooks/useSessionStore"

export type ProctoringWidgetProps = {
	onSessionStart?: (sessionId: string, precheck: PreCheckResults) => void
	onSessionUpdate?: (session: Partial<SessionData>) => void
	onEvent?: (e: any) => void
}

export function ProctoringWidget({ onSessionStart, onSessionUpdate, onEvent }: ProctoringWidgetProps) {
	const [ready, setReady] = useState<PreCheckResults | null>(null)
	const [status, setStatus] = useState<MonitoringStatus>("optimal")
	const store = useSessionStore()

	useEffect(() => {
		if (ready && !store.state) {
			const id = store.init(ready)
			onSessionStart?.(id, ready)
		}
	}, [ready, store])

	if (!ready) {
		return (
			<Prechecks
				onComplete={(r) => setReady(r)}
				onError={() => setReady(null)}
			/>
		)
	}

		return (
			<FloatingVideo
				monitoringStatus={status}
				sessionData={store.state ?? undefined}
				onStatusChange={(s) => setStatus(s)}
				onUpdateSession={(u) => {
					store.setFields(u)
					onSessionUpdate?.(u)
				}}
				onAddSnapshot={(snap) => store.addSnapshot(snap)}
				onAddEvent={(e) => {
					store.addEvents([{ ...e, timestamp: e.timestamp ?? Date.now() }])
					onEvent?.(e)
				}}
			/>
		)
}

export default ProctoringWidget

