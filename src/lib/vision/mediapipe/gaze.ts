// MediaPipe FaceLandmarker-based gaze detector
// Conservative: counts off-screen only on strong, sustained eye-look away or head yaw/pitch.

export type MPInitOptions = {
  // CDN roots; defaults to official GCS/CDN links
  wasmRoot?: string
  modelAssetPath?: string
  runningMode?: 'IMAGE' | 'VIDEO'
  thresholds?: Partial<MPThresholds>
}

export type MPThresholds = {
  horiz: number
  vert: number
  yaw: number
  pitch: number
  offDwell: number
  onDwell: number
  calibFrames: number
}

export type MPGazeVector = { x: number; y: number } // +x: right, +y: up

export type MPGazeResult = {
  onScreen: boolean
  gaze: MPGazeVector
  confidence: number
  head: { yaw?: number; pitch?: number }
  debug?: Record<string, number>
}

export type MPGazeDetector = {
  ready: boolean
  estimate: (videoEl: HTMLVideoElement, timestampMs?: number) => Promise<MPGazeResult | null>
  close: () => Promise<void>
}

// Lazy-loaded references (avoid hard import at module load time for bundlers)
let FaceLandmarker: any
let FilesetResolver: any

async function loadMP(waRoot?: string) {
  if (FaceLandmarker && FilesetResolver) return { FaceLandmarker, FilesetResolver }
  const vision = await import('@mediapipe/tasks-vision')
  FaceLandmarker = (vision as any).FaceLandmarker
  FilesetResolver = (vision as any).FilesetResolver
  return { FaceLandmarker, FilesetResolver }
}

export async function createMediapipeGazeDetector(opts: MPInitOptions = {}): Promise<MPGazeDetector> {
  const wasmRoot = opts.wasmRoot || 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.15/wasm'
  const modelAssetPath =
    opts.modelAssetPath ||
    'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task'
  const runningMode = opts.runningMode || 'VIDEO'

  const { FaceLandmarker, FilesetResolver } = await loadMP(wasmRoot)
  const fileset = await FilesetResolver.forVisionTasks(wasmRoot)

  const landmarker = await FaceLandmarker.createFromOptions(fileset, {
    baseOptions: { modelAssetPath },
    runningMode,
    numFaces: 1,
    outputFaceBlendshapes: true,
    outputFacialTransformationMatrixes: true,
  })

  // Thresholds with defaults; allow overrides via opts
  const t: MPThresholds = {
    horiz: opts.thresholds?.horiz ?? 0.6,
    vert: opts.thresholds?.vert ?? 0.75,
    yaw: opts.thresholds?.yaw ?? 28,
    pitch: opts.thresholds?.pitch ?? 26,
    offDwell: opts.thresholds?.offDwell ?? 8,
    onDwell: opts.thresholds?.onDwell ?? 5,
    calibFrames: opts.thresholds?.calibFrames ?? 45,
  }

  // Smoothing state
  let emaGaze = { x: 0, y: 0 }
  const alpha = 0.35
  let lastTs = 0
  let offFrames = 0
  let onFrames = 0
  // Brief auto-calibration to learn user's neutral gaze center
  let calibrating = true
  let calibFrames = 0
  const CALIB_FRAMES_TARGET = t.calibFrames // ~3s at 15fps
  let baseline = { x: 0, y: 0 }
  // Dwell thresholds (slightly shorter to react faster, but still avoid flicker)
  const OFF_DWELL_FRAMES = t.offDwell
  const ON_DWELL_FRAMES = t.onDwell

  async function estimate(videoEl: HTMLVideoElement, timestampMs?: number): Promise<MPGazeResult | null> {
    if (!videoEl || !(landmarker as any)) return null
    const ts = timestampMs ?? performance.now()
    // Detect
    const res = landmarker.detectForVideo(videoEl, ts)
    if (!res || !res.faceLandmarks || res.faceLandmarks.length === 0) return null

    const blends = res.faceBlendshapes?.[0]?.categories || []
    // Pull needed categories (default 0 if missing)
    const m = (name: string) => (blends.find((c: any) => c.categoryName === name)?.score || 0) as number

    const lIn = m('eyeLookInLeft')
    const lOut = m('eyeLookOutLeft')
    const lUp = m('eyeLookUpLeft')
    const lDn = m('eyeLookDownLeft')
    const rIn = m('eyeLookInRight')
    const rOut = m('eyeLookOutRight')
    const rUp = m('eyeLookUpRight')
    const rDn = m('eyeLookDownRight')

    // Map blendshapes to signed gaze vector
    // For right eye: right is Out, left is In. For left eye: right is In, left is Out.
    const gxRight = rOut - rIn
    const gxLeft = lIn - lOut
    const gyRight = rUp - rDn
    const gyLeft = lUp - lDn
    let gx = (gxRight + gxLeft) / 2
    let gy = (gyRight + gyLeft) / 2

    // Clamp and smooth
    gx = Math.max(-1, Math.min(1, gx))
    gy = Math.max(-1, Math.min(1, gy))
    emaGaze.x = alpha * gx + (1 - alpha) * emaGaze.x
    emaGaze.y = alpha * gy + (1 - alpha) * emaGaze.y

    // Auto-calibrate when user likely looking at screen (near-center)
    if (calibrating) {
      if (Math.abs(emaGaze.x) < 0.6 && Math.abs(emaGaze.y) < 0.6) {
        baseline.x = (baseline.x * calibFrames + emaGaze.x) / (calibFrames + 1)
        baseline.y = (baseline.y * calibFrames + emaGaze.y) / (calibFrames + 1)
        calibFrames += 1
      }
      if (calibFrames >= CALIB_FRAMES_TARGET) calibrating = false
    }

    // Apply baseline compensation
    const compX = emaGaze.x - baseline.x
    const compY = emaGaze.y - baseline.y

    // Head pose approximation from transform matrix if present
    let yaw: number | undefined
    let pitch: number | undefined
    try {
      const mtx = res.facialTransformationMatrixes?.[0]
      if (mtx && mtx.rows === 4 && mtx.columns === 4) {
        const a = mtx.data as number[]
        // Extract yaw/pitch from rotation matrix part (r00..r22)
        const r00 = a[0], r01 = a[1], r02 = a[2]
        const r10 = a[4], r11 = a[5], r12 = a[6]
        const r20 = a[8], r21 = a[9], r22 = a[10]
        // Yaw (y-axis), Pitch (x-axis) in radians
        pitch = Math.atan2(-r21, r22) * (180 / Math.PI)
        yaw = Math.atan2(-r02, r00) * (180 / Math.PI)
      }
    } catch {}

    // Conservative on-screen vs off-screen rules
  const absX = Math.abs(compX)
  const absY = Math.abs(compY)
  // After calibration, these thresholds are conservative but reachable when looking clearly away
  const strongHorizontal = absX > t.horiz
  const strongVertical = absY > t.vert
  const headTurn = (yaw !== undefined && Math.abs(yaw) > t.yaw) || (pitch !== undefined && Math.abs(pitch) > t.pitch)

    const definitelyOff = strongHorizontal || strongVertical || headTurn
    let onScreen = true
    if (definitelyOff) {
      offFrames += 1
      onFrames = Math.max(0, onFrames - 1)
    } else {
      onFrames += 1
      offFrames = Math.max(0, offFrames - 1)
    }
    if (offFrames >= OFF_DWELL_FRAMES) onScreen = false
    if (onFrames >= ON_DWELL_FRAMES) onScreen = true

    lastTs = ts
    return {
      onScreen,
      gaze: { x: compX, y: compY },
      confidence: Math.min(1, 0.65 + 0.35 * Math.max(absX, absY)),
      head: { yaw, pitch },
      debug: {
        lIn, lOut, lUp, lDn, rIn, rOut, rUp, rDn,
        gx, gy, emaX: emaGaze.x, emaY: emaGaze.y,
        yaw: yaw ?? 0, pitch: pitch ?? 0,
        offFrames, onFrames,
        baseX: baseline.x, baseY: baseline.y,
        absX, absY,
      },
    }
  }

  async function close() {
    try { (landmarker as any)?.close?.() } catch {}
  }

  return { ready: true, estimate, close }
}
