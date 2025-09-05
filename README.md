# Coding Editor Widget

Standalone, framework-agnostic coding editor UI as a React component library built with Vite.

- Pure React (no Next.js runtime required)
- Minimal CSS-in-component to preserve existing UI closely
- Library builds: ES, CJS, IIFE

## Usage

Install and import the widget into any React app:

```tsx
import { CodingEditorWidget } from "@procted/coding-editor-widget"

const questions = [
  { id: "1", title: "Two Sum", description: "...", constraints: [], examples: [], difficulty: "easy" },
]

export default function App() {
  return <CodingEditorWidget questions={questions} />
}
```

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Judge0 backend (local or server)

- For a self-hosted Judge0 and API key/auth setup, see `ENVIRONMENT.md`.
- Copy `.env.example` to `.env.local` and set variables for either RapidAPI or your self-hosted URL.
 - Full backend documentation: `docs/BACKEND.md`.
