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
