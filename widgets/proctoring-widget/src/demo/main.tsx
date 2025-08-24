import React from 'react'
import { createRoot } from 'react-dom/client'
import { ProctoringWidget } from '../widget/ProctoringWidget'

function App() {
	return (
		<div style={{ minHeight: '100vh', background: '#f7f7fb' }}>
			<ProctoringWidget
				onSessionStart={(id, pre) => console.log('session start', id, pre)}
				onSessionUpdate={(u) => console.log('session update', u)}
				onEvent={(e) => console.log('event', e)}
			/>
		</div>
	)
}

createRoot(document.getElementById('root')!).render(<App />)

