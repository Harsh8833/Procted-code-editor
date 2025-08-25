// Lightweight, deterministic emotion analyzer with temporal smoothing (EMA).
// No external model; uses simple image features from the face region.

export type EmotionLabel = "neutral" | "happy" | "surprised" | "focused" | "concerned"

export type EmotionMap = Record<EmotionLabel, number>

export type Landmarks = [number, number][]

export interface HeadPoseLike {
	yaw: number
	pitch: number
	roll: number
}

export interface EmotionAnalysis {
	dominant: EmotionLabel
	confidence: number
	emotions: EmotionMap
}

export interface AnalyzeContext {
	landmarks?: Landmarks
	headPose?: HeadPoseLike | null
}

export interface EmotionAnalyzerOptions {
	// Exponential moving average factor applied to probabilities, 0..1
	alpha?: number
}

function clamp01(v: number) { return Math.max(0, Math.min(1, v)) }

function normalize(map: Record<string, number>): Record<string, number> {
	let s = 0
	for (const k in map) s += map[k]
	if (s <= 0) return map
	const out: Record<string, number> = {}
	for (const k in map) out[k] = map[k] / s
	return out
}

export function createEmotionAnalyzer(opts: EmotionAnalyzerOptions = {}) {
	const alpha = opts.alpha ?? 0.45
	let ema: EmotionMap | null = null
	const labels: EmotionLabel[] = ["neutral", "happy", "surprised", "focused", "concerned"]

	function analyze(faceRegion: ImageData, ctx: AnalyzeContext = {}): EmotionAnalysis {
		const { landmarks, headPose } = ctx
		const { data, width: w, height: h } = faceRegion

		// Aggregate brightness, contrast, and vertical edge activity
		let sumGray = 0, sumDiff = 0, vEdges = 0
		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const i = (y * w + x) * 4
				const r = data[i], g = data[i + 1], b = data[i + 2]
				const gray = (r + g + b) / 3
				sumGray += gray
				if (x > 0) {
					const j = (y * w + (x - 1)) * 4
					const prev = (data[j] + data[j + 1] + data[j + 2]) / 3
					sumDiff += Math.abs(gray - prev)
				}
				if (y > 0) {
					const k = ((y - 1) * w + x) * 4
					const up = (data[k] + data[k + 1] + data[k + 2]) / 3
					if (Math.abs(gray - up) > 26) vEdges++
				}
			}
		}
		const px = Math.max(1, (data.length / 4))
		const brightness = sumGray / px
		const contrast = sumDiff / px
		const edgeRatio = vEdges / px

		// Mouth band (lower 40%) centered horizontally
		const bandTop = Math.floor(h * 0.6)
		const xL = Math.floor(w * 0.22), xR = Math.ceil(w * 0.78)
		let mouthEdges = 0, mouthPx = 0, darkPx = 0, brightPx = 0
		let upperSum = 0, upperCnt = 0, lowerSum = 0, lowerCnt = 0
		// Corner windows for smile curvature proxy
		const cornerWin = Math.max(2, Math.floor((xR - xL) * 0.18))
		let leftCornerE = 0, leftCornerPx = 0, rightCornerE = 0, rightCornerPx = 0
		for (let y = bandTop; y < h; y++) {
			for (let x = xL; x < xR; x++) {
				const idx = (y * w + x) * 4
				const r = data[idx], g = data[idx + 1], b = data[idx + 2]
				const gray = (r + g + b) / 3
				const left = (data[idx - 4] + data[idx - 3] + data[idx - 2]) / 3
				const right = (data[idx + 4] + data[idx + 5] + data[idx + 6]) / 3
				if (Math.abs(gray - left) > 24 || Math.abs(gray - right) > 24) mouthEdges++
				if (gray < 70) darkPx++
				if (gray > 165) brightPx++
				if (y < bandTop + Math.floor((h - bandTop) * 0.4)) { upperSum += gray; upperCnt++ } else { lowerSum += gray; lowerCnt++ }
				if (x < xL + cornerWin) { if (Math.abs(gray - left) > 24 || Math.abs(gray - right) > 24) leftCornerE++; leftCornerPx++ }
				if (x > xR - cornerWin) { if (Math.abs(gray - left) > 24 || Math.abs(gray - right) > 24) rightCornerE++; rightCornerPx++ }
				mouthPx++
			}
		}
		const mouthEdgeRatio = mouthPx ? mouthEdges / mouthPx : 0
		const mouthDarkRatio = mouthPx ? darkPx / mouthPx : 0
		const mouthBrightRatio = mouthPx ? brightPx / mouthPx : 0
		// Baseline mouth expressiveness score
		const mouthScore = clamp01((mouthEdgeRatio - 0.012) / 0.06)
		const upperAvg = upperCnt ? upperSum / upperCnt : 0
		const lowerAvg = lowerCnt ? lowerSum / lowerCnt : 0
		const teethBoost = clamp01((upperAvg - lowerAvg - 6) / 28)
		const leftCornerR = leftCornerPx ? leftCornerE / leftCornerPx : 0
		const rightCornerR = rightCornerPx ? rightCornerE / rightCornerPx : 0
		const cornerBoost = clamp01(((leftCornerR + rightCornerR) / 2 - 0.018) / 0.05)

		// Eyebrow/upper band (top 20%..40%) as frown/surprise proxy
		let browEdges = 0, browPx = 0
		const eyeTop = Math.max(0, Math.floor(h * 0.18))
		const eyeBot = Math.floor(h * 0.38)
		for (let y = eyeTop; y < eyeBot; y++) {
			for (let x = 1; x < w - 1; x++) {
				const i = (y * w + x) * 4
				const gray = (data[i] + data[i + 1] + data[i + 2]) / 3
				const l = (data[i - 4] + data[i - 3] + data[i - 2]) / 3
				const r = (data[i + 4] + data[i + 5] + data[i + 6]) / 3
				if (Math.abs(gray - l) > 26 || Math.abs(gray - r) > 26) browEdges++
				browPx++
			}
		}
		const browActivity = browPx ? browEdges / browPx : 0
		const browScore = clamp01((browActivity - 0.012) / 0.06)

		// Eye openness proxy from landmarks
		let eyeOpen = 0.5
		if (landmarks && landmarks.length >= 2) {
			const rEye = landmarks[0]
			const lEye = landmarks[1]
			const eyeSlope = Math.abs(lEye[1] - rEye[1])
			eyeOpen = clamp01(1 - eyeSlope / Math.max(1, h * 0.25))
		}

		// Head pose stabilizers
		const yawMag = headPose ? Math.min(45, Math.abs(headPose.yaw)) : 0
		const pitchMag = headPose ? Math.min(45, Math.abs(headPose.pitch)) : 0
		const stability = Math.max(0, 1 - (yawMag / 35 + pitchMag / 30) / 2)
		const clarity = clamp01((contrast - 12) / 18)

		// Gate conditions and flags
		const mouthStrong = mouthScore > 0.22
		const mouthOpen = mouthDarkRatio > 0.12
		const browStrong = browScore > 0.2
		const weakCues = !mouthStrong && !browStrong

		// Compute raw scores (non-negative), then normalize
		const raw: Record<EmotionLabel, number> = {
			neutral: Math.max(0.001, 0.28 + 0.28 * stability + 0.06 * eyeOpen - 0.16 * mouthScore - 0.06 * edgeRatio + (weakCues ? 0.08 : 0)),
			happy: Math.max(0.001, 0.10 + 0.62 * mouthScore + 0.08 * teethBoost + 0.06 * cornerBoost + (mouthOpen ? 0.04 : 0) + (mouthBrightRatio > 0.15 ? 0.04 : 0) - 0.10 * (1 - stability)),
			surprised: Math.max(0.001, 0.06 + (mouthStrong && mouthOpen ? 0.16 : 0.02) + 0.45 * mouthScore + ((headPose && headPose.pitch > 10) ? 0.1 : 0)),
			focused: Math.max(0.001, 0.18 + 0.6 * stability + 0.22 * clarity + 0.06 * eyeOpen - 0.08 * mouthScore + (weakCues ? 0.06 : 0)),
			concerned: Math.max(0.001, 0.06 + (browStrong ? 0.16 : 0.02) + 0.45 * browScore + (brightness < 100 ? 0.06 : 0) + ((headPose && headPose.pitch < -10) ? 0.06 : 0) - 0.06 * (teethBoost + mouthScore)),
		}

		let probs = normalize(raw) as EmotionMap

		// EMA smoothing
			if (ema) {
				const out: EmotionMap = { ...ema }
				for (const k of labels) {
					out[k] = (1 - alpha) * (ema as EmotionMap)[k] + alpha * probs[k]
				}
				probs = normalize(out) as EmotionMap
			}
		ema = probs

		// Dominant emotion and confidence
		let dominant: EmotionLabel = "neutral"
			let maxV: number = -1
			for (const k of labels) { const v = probs[k]; if (v > maxV) { maxV = v; dominant = k } }
		const confidence = probs[dominant]

		return { dominant, confidence, emotions: probs }
	}

	return { analyze }
}

