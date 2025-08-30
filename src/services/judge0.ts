// Lightweight Judge0 (RapidAPI) client for browser usage
// Set env: VITE_JUDGE0_RAPIDAPI_KEY and VITE_JUDGE0_RAPIDAPI_HOST

export type Judge0LanguageKey = 'javascript' | 'python' | 'java' | 'cpp'

const LANGUAGE_ID_MAP: Record<Judge0LanguageKey, number> = {
  // Common Judge0 CE IDs (may vary by deployment)
  javascript: 63, // JavaScript (Node.js)
  python: 71, // Python (3.x)
  java: 62, // Java (OpenJDK)
  cpp: 54, // C++ (GCC)
}

const RAPIDAPI_KEY = import.meta.env.VITE_JUDGE0_RAPIDAPI_KEY as string | undefined
const RAPIDAPI_HOST = (import.meta.env.VITE_JUDGE0_RAPIDAPI_HOST as string | undefined) || 'judge0-ce.p.rapidapi.com'
const PROXY_BASE = import.meta.env.VITE_JUDGE0_PROXY_URL as string | undefined

function requireEnv() {
  if (!RAPIDAPI_KEY) throw new Error('Missing VITE_JUDGE0_RAPIDAPI_KEY or VITE_JUDGE0_PROXY_URL')
}

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  requireEnv()
  const url = PROXY_BASE ? `${PROXY_BASE}${path}` : `https://${RAPIDAPI_HOST}${path}`
  const headers = PROXY_BASE
    ? { 'Content-Type': 'application/json', ...(init?.headers || {}) }
    : { 'Content-Type': 'application/json', 'x-rapidapi-key': RAPIDAPI_KEY!, 'x-rapidapi-host': RAPIDAPI_HOST, ...(init?.headers || {}) }
  const res = await fetch(url, { ...init, headers })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Judge0 HTTP ${res.status}: ${text}`)
  }
  return res.json() as Promise<T>
}

export interface SubmissionResponse { token: string }
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
  const data = await http<SubmissionResponse>('/submissions?base64_encoded=false&wait=false', {
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
    // Status IDs: 1-2 queued/processing; 3=accepted; >3 various errors
    if (res.status && res.status.id && res.status.id > 2) return res
    await new Promise((r) => setTimeout(r, poll))
  }
  throw new Error('Judge0 timeout')
}

export interface TestCase { input: string; output: string }
export interface TestRunResult extends ResultResponse {
  pass: boolean
  expected?: string
}

export async function runTests(opts: {
  language: Judge0LanguageKey
  sourceCode: string
  tests: TestCase[]
}): Promise<TestRunResult[]> {
  const results: TestRunResult[] = []
  for (const t of opts.tests) {
    const res = await runAndWait({
      language: opts.language,
      sourceCode: opts.sourceCode,
      stdin: t.input,
      expectedOutput: t.output,
    })
    const actual = (res.stdout ?? '').trim()
    const expected = (t.output ?? '').trim()
    results.push({ ...res, pass: actual === expected, expected })
  }
  return results
}
