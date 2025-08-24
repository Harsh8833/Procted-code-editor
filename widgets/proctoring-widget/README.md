# Proctoring Widget (React + TypeScript)

A standalone, reusable proctoring widget that includes:
- System Prechecks (camera, microphone, face presence, monitor verification, browser support)
- Floating Video Monitor (face count, gaze/off-screen signals, posture/attire heuristics, audio level + anomalies)
- Session store (sessionStorage persistence, live events, snapshots, counters)

Build output supports ES module, CommonJS, and IIFE for drop-in script usage.

## Install (local file dep)

1) Build the library in this repo:

```bash
pnpm -C widgets/proctoring-widget build
```

2) In your React app `package.json`:

```json
{
  "dependencies": {
    "@procted/proctoring-widget": "file:../Procted-code-editor/widgets/proctoring-widget"
  }
}
```

3) Install in your app and use:

```tsx
import { ProctoringWidget } from '@procted/proctoring-widget'

export default function Page() {
  return (
    <ProctoringWidget
      onSessionStart={(id, precheck) => console.log('session start', id, precheck)}
      onSessionUpdate={(partial) => console.log('session update', partial)}
      onEvent={(evt) => console.log('event', evt)}
    />
  )
}
```

Notes:
- React and ReactDOM are peer dependencies. Install them in your app.
- getUserMedia requires HTTPS or localhost.

## Demo (this package)

Run a local demo page using Vite:

```bash
pnpm -C widgets/proctoring-widget dev
```

Open http://localhost:5173 and grant camera/microphone permissions.

## API

- ProctoringWidget props:
  - onSessionStart(sessionId, precheck)
  - onSessionUpdate(partialSession)
  - onEvent(event)

- Named exports (if you need more control):
  - Prechecks
  - FloatingVideo
  - useSessionStore (internal store used by ProctoringWidget)
  - Types under `./types/proctoring`

## Build

```bash
pnpm -C widgets/proctoring-widget build
```

Artifacts are written to `dist/`:
- proctoring-widget.es.js (ESM)
- proctoring-widget.cjs.js (CJS)
- proctoring-widget.iife.js (global `window.ProctoringWidget`)

## What’s included
- Face detection: Native FaceDetector API when available; otherwise BlazeFace via TensorFlow.js
- Audio monitor: RMS level meter with simple anomaly heuristics (spikes, silence with face, audio without face)
- Session: Throttled persistence and derived counters for tab switches, anomalies, gaze events, keystrokes, etc.

## License
MIT
