/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JUDGE0_RAPIDAPI_KEY?: string
  readonly VITE_JUDGE0_RAPIDAPI_HOST?: string
  readonly VITE_JUDGE0_PROXY_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
