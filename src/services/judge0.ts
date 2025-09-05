export type Judge0LanguageKey = 'javascript' | 'python' | 'java' | 'cpp'

const LANGUAGE_ID_MAP: Record<Judge0LanguageKey, number> = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54,
}

const RAPIDAPI_KEY = import.meta.env.VITE_JUDGE0_RAPIDAPI_KEY as string | undefined
const RAPIDAPI_HOST = (import.meta.env.VITE_JUDGE0_RAPIDAPI_HOST as string | undefined) || 'judge0-ce.p.rapidapi.com'
const PROXY_BASE = import.meta.env.VITE_JUDGE0_PROXY_URL as string | undefined
// Optional auth for self-hosted Judge0 (configured via judge0.conf AUTHZ_* options)
const AUTH_HEADER_NAME = (import.meta.env.VITE_JUDGE0_AUTH_HEADER_NAME as string | undefined) || 'X-Auth-User'
const AUTH_TOKEN = import.meta.env.VITE_JUDGE0_AUTH_TOKEN as string | undefined

function requireEnv() {
  if (!PROXY_BASE && !RAPIDAPI_KEY) throw new Error('Missing VITE_JUDGE0_RAPIDAPI_KEY or VITE_JUDGE0_PROXY_URL')
}

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  requireEnv()
  const url = PROXY_BASE ? `${PROXY_BASE}${path}` : `https://${RAPIDAPI_HOST}${path}`
  // Build headers depending on hosting mode
  let headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (PROXY_BASE) {
    if (AUTH_TOKEN) headers[AUTH_HEADER_NAME] = AUTH_TOKEN
  } else {
    headers['x-rapidapi-key'] = RAPIDAPI_KEY!
    headers['x-rapidapi-host'] = RAPIDAPI_HOST
  }
  // Merge any caller-provided headers last
  headers = { ...headers, ...(init?.headers as Record<string, string> | undefined) }
  const res = await fetch(url, { ...init, headers })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Judge0 HTTP ${res.status}: ${text}`)
  }
  return res.json() as Promise<T>
}

export interface ResultResponse {
  stdout: string | null
  stderr: string | null
  compile_output: string | null
  time: string | null
  memory: number | null
  status: { id: number; description: string }
}

export async function submitCode(opts: {
  language: Judge0LanguageKey
  sourceCode: string
  stdin?: string
  expectedOutput?: string
}): Promise<string> {
  const language_id = LANGUAGE_ID_MAP[opts.language]
  const body = {
    language_id,
    source_code: opts.sourceCode,
    stdin: opts.stdin ?? '',
    expected_output: opts.expectedOutput ?? undefined,
  }
  const data = await http<{ token: string }>('/submissions?base64_encoded=false&wait=false', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return data.token
}

export async function getSubmission(token: string): Promise<ResultResponse> {
  return http<ResultResponse>(`/submissions/${token}?base64_encoded=false`)
}

export async function runAndWait(opts: {
  language: Judge0LanguageKey
  sourceCode: string
  stdin?: string
  expectedOutput?: string
  pollMs?: number
  timeoutMs?: number
}): Promise<ResultResponse> {
  const token = await submitCode(opts)
  const start = Date.now()
  const poll = opts.pollMs ?? 800
  const timeout = opts.timeoutMs ?? 30000
  while (Date.now() - start < timeout) {
    const res = await getSubmission(token)
    if (res.status && res.status.id && res.status.id > 2) return res
    await new Promise((r) => setTimeout(r, poll))
  }
  throw new Error('Judge0 timeout')
}

export async function runTests(opts: {
  language: Judge0LanguageKey
  sourceCode: string
  tests: Array<{ input: string; output: string }>
}): Promise<Array<ResultResponse & { pass: boolean; expected?: string }>> {
  const results: Array<ResultResponse & { pass: boolean; expected?: string }> = []
  for (const t of opts.tests) {
    const res = await runAndWait({ language: opts.language, sourceCode: opts.sourceCode, stdin: t.input, expectedOutput: t.output })
    const actual = (res.stdout ?? '').trim()
    const expected = (t.output ?? '').trim()
    results.push({ ...res, pass: actual === expected, expected })
  }
  return results
}

// Batch helpers for cost/time efficiency
export async function submitBatch(opts: {
  language: Judge0LanguageKey
  sourceCode: string
  stdins: string[]
}): Promise<string[]> {
  const language_id = LANGUAGE_ID_MAP[opts.language]
  const submissions = opts.stdins.map((stdin) => ({ language_id, source_code: opts.sourceCode, stdin }))
  const data = await http<{ tokens: Array<{ token: string }> }>(
    '/submissions/batch?base64_encoded=false&wait=false',
    { method: 'POST', body: JSON.stringify({ submissions }) }
  )
  return data.tokens.map((t) => t.token)
}

export async function getBatch(tokens: string[]): Promise<ResultResponse[]> {
  const joined = tokens.join(',')
  const res = await http<{ submissions: ResultResponse[] }>(`/submissions/batch?tokens=${joined}&base64_encoded=false`)
  return res.submissions
}

export async function runMany(opts: {
  language: Judge0LanguageKey
  sourceCode: string
  stdins: string[]
  pollMs?: number
  timeoutMs?: number
}): Promise<ResultResponse[]> {
  const tokens = await submitBatch({ language: opts.language, sourceCode: opts.sourceCode, stdins: opts.stdins })
  const start = Date.now()
  const poll = opts.pollMs ?? 800
  const timeout = opts.timeoutMs ?? 30000
  while (Date.now() - start < timeout) {
    const subs = await getBatch(tokens)
    const allDone = subs.every((s) => s.status && s.status.id && s.status.id > 2)
    if (allDone) return subs
    await new Promise((r) => setTimeout(r, poll))
  }
  throw new Error('Judge0 batch timeout')
}
