import { useState, useRef, useEffect, useCallback } from "react"
import type { MonitoringStatus, SessionData } from "../types/proctoring"
import { useAudioMonitor } from "../hooks/useAudioMonitor"
import { createEmotionAnalyzer } from "../lib/vision/emotion"
import { createMediapipeGazeDetector } from "../lib/vision/mediapipe/gaze"

type FaceDetection = { x: number; y: number; width: number; height: number; confidence: number; landmarks?: [number, number][] }
type PostureAnalysis = { isGoodPosture: boolean; shoulderAlignment: number; headTilt: number; confidence: number }
type ExpressionAnalysis = { dominant: string; confidence: number; emotions: Record<string, number> }
type AttireAnalysis = { isProfessional: boolean; hasShirt: boolean; confidence: number; details: string }
type EyeContactAnalysis = {
	isLookingAtCamera: boolean
	gazeDirection: { x: number; y: number }
	confidence: number
	attentionScore: number
}
type HeadPoseAnalysis = {
	yaw: number // left/right in degrees (+ right, - left)
	pitch: number // up/down in degrees (+ up, - down)
	roll: number // tilt in degrees (+ clockwise)
	isHeadTurned: boolean
	confidence: number
}

export type FloatingVideoProps = {
	monitoringStatus: MonitoringStatus
	sessionData?: SessionData
	onStatusChange?: (status: MonitoringStatus) => void
	onUpdateSession?: (updates: Partial<SessionData>) => void
	onAddEvent?: (event: any) => void
	onAddSnapshot?: (snapshot: SessionData["snapshots"][number]) => void
	// Optional: tune gaze thresholds quickly without code changes
	gazeThresholds?: {
		mediapipe?: Partial<import("../lib/vision/mediapipe/gaze").MPThresholds>
		fallback?: { yaw?: number; pitch?: number; centerOffset?: number; offFrames?: number; onFrames?: number }
	}
}

export function FloatingVideo({ monitoringStatus, sessionData, onStatusChange, onUpdateSession, onAddEvent, onAddSnapshot, gazeThresholds }: FloatingVideoProps) {
	const [position, setPosition] = useState({ x: typeof window !== 'undefined' ? window.innerWidth - 280 : 0, y: typeof window !== 'undefined' ? window.innerHeight - 400 : 0 })
	const [isDragging, setIsDragging] = useState(false)
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

	const [faceCount, setFaceCount] = useState(0)
	const [isStable, setIsStable] = useState(false)
	const [postureAnalysis, setPostureAnalysis] = useState<PostureAnalysis | null>(null)
	const [expressionAnalysis, setExpressionAnalysis] = useState<ExpressionAnalysis | null>(null)
	const [attireAnalysis, setAttireAnalysis] = useState<AttireAnalysis | null>(null)
	// Removed eyeContactAnalysis from UI; compute locally only for gaze-off logic
	const [audioLevel, setAudioLevel] = useState(0)
	const [audioAnomalyCount, setAudioAnomalyCount] = useState(0)
	const [detections, setDetections] = useState<FaceDetection[]>([])

	const [unfocusCount, setUnfocusCount] = useState(0)
	const [tabSwitchCount, setTabSwitchCount] = useState(0)
	const [keystrokeCount, setKeystrokeCount] = useState(0)
	const [copyAttempts, setCopyAttempts] = useState(0)
	const [gazeOffScreenCount, setGazeOffScreenCount] = useState(0)
	const [isLookingOffScreen, setIsLookingOffScreen] = useState(false)
	const [gazeOnScreen, setGazeOnScreen] = useState<boolean | null>(null)

	const [multipleFacesStartTime, setMultipleFacesStartTime] = useState<number | null>(null)
	const [gazeOffScreenStartTime, setGazeOffScreenStartTime] = useState<number | null>(null)
	const [multipleFacesDuration, setMultipleFacesDuration] = useState(0)
	const [gazeOffScreenDuration, setGazeOffScreenDuration] = useState(0)
	const [multipleFacesDetectionCount, setMultipleFacesDetectionCount] = useState(0)

	const [noFaceStartTime, setNoFaceStartTime] = useState<number | null>(null)
	const [noFaceDetectionCount, setNoFaceDetectionCount] = useState(0)
	const [noFaceDuration, setNoFaceDuration] = useState(0)

	const videoRef = useRef<HTMLVideoElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const widgetRef = useRef<HTMLDivElement>(null)
	const faceDetectorRef = useRef<any>(null)
	const animationRef = useRef<number | null>(null)
	const audioStreamRef = useRef<MediaStream | null>(null)
	const mpGazeRef = useRef<Awaited<ReturnType<typeof createMediapipeGazeDetector>> | null>(null)
	const isCleaningUpRef = useRef<boolean>(false)
	const lastSessionUpdateRef = useRef<number>(0)
	const gazeCooldownRef = useRef<number>(0)
	const lastFaceStateRef = useRef<"none" | "single" | "multiple">("none")
	const consecutiveFramesRef = useRef({ noFace: 0, multipleFaces: 0 })
	const incidentRef = useRef({ noFace: false, multipleFaces: false, gazeOff: false })
	const detectingRef = useRef(false)

	// Fallback gaze detection (if MediaPipe not available or returns null)
	const fallbackGazeRef = useRef({ offFrames: 0, onFrames: 0 })
	const FALLBACK_OFF_FRAMES = gazeThresholds?.fallback?.offFrames ?? 8
	const FALLBACK_ON_FRAMES = gazeThresholds?.fallback?.onFrames ?? 5
	const FALLBACK_THRESHOLDS = { 
		yaw: gazeThresholds?.fallback?.yaw ?? 32, 
		pitch: gazeThresholds?.fallback?.pitch ?? 26, 
		centerOffset: gazeThresholds?.fallback?.centerOffset ?? 0.35 
	}

	// Emotion analyzer instance (with internal EMA)
	const emotionAnalyzerRef = useRef<ReturnType<typeof createEmotionAnalyzer> | null>(null)

	// Random snapshot scheduling (capture 5 random webcam images during the session)
	const randomSnapshotTimersRef = useRef<number[]>([])
	const randomSnapshotsTakenRef = useRef(0)
	const snapshotInFlightRef = useRef(false)

	// Posture smoothing state (EMA + hysteresis)
	const postureEMARef = useRef<{ yaw: number; pitch: number; roll: number; initialized: boolean }>({ yaw: 0, pitch: 0, roll: 0, initialized: false })
	const postureStateRef = useRef<{ isGood: boolean; goodStreak: number; poorStreak: number }>({ isGood: true, goodStreak: 0, poorStreak: 0 })
	const POSTURE_SWITCH_STREAK = 8 // frames required to switch Good<->Poor
	const POSTURE_EMA_ALPHA = 0.25 // smoothing factor for pose angles

	const { level: audioLevelPct, anomalyCount, start: startAudio, stop: stopAudio, setFaceDetected } = useAudioMonitor({
		context: "coding",
		onEvent: (evt) => onAddEvent?.({ ...evt, timestamp: Date.now() }),
	})

	useEffect(() => setAudioLevel(audioLevelPct), [audioLevelPct])
	useEffect(() => setAudioAnomalyCount(anomalyCount), [anomalyCount])

	// Setup emotion analyzer once
	useEffect(() => { emotionAnalyzerRef.current = createEmotionAnalyzer({ alpha: 0.5 }) }, [])

	// Refined attire detection: analyze torso ROI below face; simple skin filtering and color uniformity
	const analyzeAttire = useCallback((face: FaceDetection, fullFrame: ImageData): AttireAnalysis => {
		const data = fullFrame.data
		const W = fullFrame.width
		const H = fullFrame.height
		const x1 = Math.max(0, Math.floor(face.x - face.width * 0.2))
		const x2 = Math.min(W, Math.floor(face.x + face.width * 1.2))
		const yTop = Math.min(H - 1, Math.floor(face.y + face.height * 1.05))
		const yBot = Math.min(H, yTop + Math.floor(face.height * 1.6))
		if (yBot <= yTop || x2 <= x1) return { isProfessional: false, hasShirt: false, confidence: 0.4, details: "Insufficient torso ROI" }

		let dark = 0, light = 0, variety = 0, satSum = 0, sampled = 0, edgeV = 0
		const centerX = Math.floor((x1 + x2) / 2)

		for (let y = yTop; y < yBot; y++) {
			for (let x = x1; x < x2; x++) {
				const idx = (y * W + x) * 4
				const r = data[idx], g = data[idx + 1], b = data[idx + 2]
				const maxc = Math.max(r, g, b)
				const minc = Math.min(r, g, b)
				const v = maxc
				const s = maxc ? (maxc - minc) / maxc : 0
				// crude skin mask
				const isSkin = (v > 60 && v < 210 && s < 0.45 && r > 40 && g > 20 && b > 20 && r > b)
				if (isSkin) continue

				const brightness = (r + g + b) / 3
				if (brightness < 105) dark++
				else light++
				if (Math.abs(r - g) > 28 || Math.abs(g - b) > 28) variety++
				satSum += s
				sampled++

				// collar hint near center, upper third
				if (y < yTop + (yBot - yTop) * 0.35 && Math.abs(x - centerX) < Math.max(6, Math.floor(face.width * 0.08)) && x > x1 + 1 && x < x2 - 1) {
					const idxL = (y * W + (x - 1)) * 4
					const idxR = (y * W + (x + 1)) * 4
					const gray = (r + g + b) / 3
					const grayL = (data[idxL] + data[idxL + 1] + data[idxL + 2]) / 3
					const grayR = (data[idxR] + data[idxR + 1] + data[idxR + 2]) / 3
					if (Math.abs(gray - grayL) > 28 || Math.abs(gray - grayR) > 28) edgeV++
				}
			}
		}
		if (!sampled) return { isProfessional: false, hasShirt: false, confidence: 0.4, details: "Insufficient torso pixels" }
		const darkRatio = dark / sampled
		const varietyRatio = variety / sampled
		const satAvg = satSum / sampled
		const collarHint = edgeV / sampled

		const hasShirt = darkRatio > 0.18 || satAvg < 0.35
		const isProfessional = (darkRatio > 0.35 && varietyRatio < 0.22) || (satAvg < 0.28 && varietyRatio < 0.18) || (collarHint > 0.002)
		const confidence = Math.max(0.5, Math.min(0.95, 0.55 + (hasShirt ? 0.15 : 0) + (isProfessional ? 0.15 : 0) - varietyRatio * 0.2))
		return { isProfessional, hasShirt, confidence, details: isProfessional ? "Professional attire (solid/low-saturation)" : hasShirt ? "Casual attire" : "Torso not clearly visible" }
	}, [])

	const analyzeHeadPose = useCallback((face: FaceDetection): HeadPoseAnalysis | null => {
		if (!face.landmarks || face.landmarks.length < 4) return null
		// BlazeFace landmark order: [rightEye, leftEye, nose, mouth, rightEar, leftEar]
		const lm = face.landmarks
		const rightEye = lm[0]
		const leftEye = lm[1]
		const nose = lm[2]
		const mouth = lm[3] ?? [(leftEye[0] + rightEye[0]) / 2, Math.max(leftEye[1], rightEye[1]) + face.height * 0.2]
		const eyeMid: [number, number] = [(leftEye[0] + rightEye[0]) / 2, (leftEye[1] + rightEye[1]) / 2]

		const dxEye = leftEye[0] - rightEye[0]
		const dyEye = leftEye[1] - rightEye[1]
		const eyeDist = Math.max(1, Math.hypot(dxEye, dyEye))

		// Roll: angle of the eyes line
		const roll = (Math.atan2(dyEye, dxEye) * 180) / Math.PI

		// Yaw: relative difference of nose-to-eye distances normalized by eye distance
		const dNR = Math.hypot(nose[0] - rightEye[0], nose[1] - rightEye[1])
		const dNL = Math.hypot(nose[0] - leftEye[0], nose[1] - leftEye[1])
		const yawRatio = (dNR - dNL) / eyeDist // + means turned right (looking left), - means turned left
		// Convert to a rough degree estimate (heuristic scale)
		const yaw = Math.max(-45, Math.min(45, yawRatio * 90))

		// Pitch: compare vertical layout eyes->nose vs nose->mouth
		const eyesToNoseY = Math.max(1, nose[1] - eyeMid[1])
		const noseToMouthY = Math.max(1, (mouth[1] ?? eyeMid[1]) - nose[1])
		const pitchRatio = (eyesToNoseY - noseToMouthY) / face.height
		// Positive pitch means up, negative means down (heuristic)
		const pitch = Math.max(-45, Math.min(45, pitchRatio * 180))

		// Determine if head is turned meaningfully
		const rollOff = Math.abs(roll) > 20
		const yawOff = Math.abs(yawRatio) > 0.18 // ~>20-25 degrees
		const pitchOff = Math.abs(pitch) > 15
		const isHeadTurned = yawOff || pitchOff || rollOff

		// Confidence grows with stronger signals
		const confidence = Math.max(0.5, Math.min(1, Math.max(
			Math.abs(yawRatio) * 2,
			Math.abs(roll) / 30,
			Math.abs(pitch) / 30,
		)))
		return { yaw, pitch, roll, isHeadTurned, confidence }
	}, [])

	// Capture current video frame to dataURL (jpeg)
	const captureCurrentFrame = useCallback((quality = 0.8): string | null => {
		const video = videoRef.current
		const canvas = canvasRef.current
		if (!video || !canvas) return null
		const vw = (video as any).videoWidth || 320
		const vh = (video as any).videoHeight || 240
		if (!vw || !vh || video.readyState < 2) return null
		// Resize backing canvas to match source, draw, and export
		canvas.width = vw
		canvas.height = vh
		const ctx = canvas.getContext("2d")
		if (!ctx) return null
		ctx.drawImage(video, 0, 0, vw, vh)
		try {
			return canvas.toDataURL("image/jpeg", quality)
		} catch {
			return null
		}
	}, [])

	// Add a snapshot into session via onUpdateSession, with rolling cap
	const appendSnapshot = useCallback((snapshot: { timestamp: number; type: "random_webcam" | "code_editor" | "violation_trigger"; image: string; context: string }) => {
		if (onAddSnapshot) {
			onAddSnapshot(snapshot as SessionData["snapshots"][number])
			return
		}
		if (onUpdateSession) {
			const current = sessionData?.snapshots || []
			let next = [...current, snapshot]
			if (next.length > 50) next = next.slice(next.length - 50)
			onUpdateSession({ snapshots: next })
		}
	}, [onAddSnapshot, onUpdateSession, sessionData?.snapshots])

	// Take one random webcam snapshot (retry once if video not ready)
	const takeRandomSnapshot = useCallback(() => {
		if (randomSnapshotsTakenRef.current >= 5 || snapshotInFlightRef.current) return
		snapshotInFlightRef.current = true
		const img = captureCurrentFrame(0.85)
		if (img) {
			appendSnapshot({ timestamp: Date.now(), type: "random_webcam", image: img, context: "Random webcam snapshot during coding" })
			randomSnapshotsTakenRef.current += 1
			snapshotInFlightRef.current = false
			return
		}
		// If not ready, retry after short delay once
		const id = window.setTimeout(() => {
			const img2 = captureCurrentFrame(0.85)
			if (img2) {
				appendSnapshot({ timestamp: Date.now(), type: "random_webcam", image: img2, context: "Random webcam snapshot (retry) during coding" })
				randomSnapshotsTakenRef.current += 1
			}
			snapshotInFlightRef.current = false
		}, 3000)
		randomSnapshotTimersRef.current.push(id)
	}, [appendSnapshot, captureCurrentFrame])

	// MP gaze handled by MediaPipe FaceLandmarker in detect loop

	const initializeFaceDetection = useCallback(async () => {
		try {
			const tf = await import("@tensorflow/tfjs")
			const blazeface = await import("@tensorflow-models/blazeface")
			if ((tf as any).ready) await (tf as any).ready()
			const model = await (blazeface as any).load()
			faceDetectorRef.current = model
			return true
		} catch (e) {
			console.error("[widget] Failed to init face detection:", e)
			return false
		}
	}, [])

	// IoU helper for NMS
	const iou = (a: { x: number; y: number; width: number; height: number }, b: { x: number; y: number; width: number; height: number }) => {
		const x1 = Math.max(a.x, b.x)
		const y1 = Math.max(a.y, b.y)
		const x2 = Math.min(a.x + a.width, b.x + b.width)
		const y2 = Math.min(a.y + a.height, b.y + b.height)
		const iw = Math.max(0, x2 - x1)
		const ih = Math.max(0, y2 - y1)
		const inter = iw * ih
		const union = a.width * a.height + b.width * b.height - inter
		return union > 0 ? inter / union : 0
	}

	const detectFaces = useCallback(async () => {
		if (detectingRef.current) {
			animationRef.current = requestAnimationFrame(detectFaces)
			return
		}
		detectingRef.current = true
		if (!videoRef.current || !canvasRef.current || !faceDetectorRef.current) {
			animationRef.current = requestAnimationFrame(detectFaces)
			detectingRef.current = false
			return
		}
		const video = videoRef.current
		const canvas = canvasRef.current
		if (video.readyState !== 4) {
			animationRef.current = requestAnimationFrame(detectFaces)
			detectingRef.current = false
			return
		}
		try {
				const predictions: any[] = await faceDetectorRef.current.estimateFaces(video, false)
				const vw = (video as any).videoWidth || video.width || canvas.width
				const vh = (video as any).videoHeight || video.height || canvas.height
				const minAreaRatio = 0.02
				const maxAreaRatio = 0.6
				const raw: FaceDetection[] = predictions.map((p: any) => {
					const [x, y] = p.topLeft
					const [x2, y2] = p.bottomRight
					return { x, y, width: x2 - x, height: y2 - y, confidence: p.probability?.[0] || 0.8, landmarks: p.landmarks as [number, number][] | undefined }
				})
				const filtered = raw.filter((f) => {
					if (f.width <= 0 || f.height <= 0) return false
					if ((f.confidence || 0) < 0.6) return false
					const area = f.width * f.height
					const areaRatio = area / (vw * vh)
					if (areaRatio < minAreaRatio || areaRatio > maxAreaRatio) return false
					// Allow partial faces: require at least 50% of bbox visible within frame
					const x1 = Math.max(0, f.x)
					const y1 = Math.max(0, f.y)
					const x2 = Math.min(vw, f.x + f.width)
					const y2 = Math.min(vh, f.y + f.height)
					const visW = Math.max(0, x2 - x1)
					const visH = Math.max(0, y2 - y1)
					const visArea = visW * visH
					if (visArea / Math.max(1, area) < 0.5) return false
					const ar = f.width / f.height
					if (ar < 0.5 || ar > 2.0) return false
					return true
				})
				filtered.sort((a, b) => b.confidence - a.confidence)
				const faces: FaceDetection[] = []
				filtered.forEach((cand) => {
					const overlap = faces.some((picked) => iou(cand, picked) > 0.45)
					if (!overlap) faces.push(cand)
				})
			setFaceCount(faces.length)
			setDetections(faces)
			setIsStable(faces.length === 1)
			setFaceDetected(faces.length > 0)

			const now = Date.now()
			// Stabilize face state using hysteresis counters
			const rawState: "none" | "single" | "multiple" = faces.length === 0 ? "none" : faces.length === 1 ? "single" : "multiple"
			if (rawState === "multiple") consecutiveFramesRef.current.multipleFaces += 1
			else consecutiveFramesRef.current.multipleFaces = Math.max(0, consecutiveFramesRef.current.multipleFaces - 1)
			if (rawState === "none") consecutiveFramesRef.current.noFace += 1
			else consecutiveFramesRef.current.noFace = Math.max(0, consecutiveFramesRef.current.noFace - 1)

			const MULTI_ON = 3, MULTI_OFF = 2
			const NONE_ON = 3, NONE_OFF = 2
			let currentFaceState = lastFaceStateRef.current
			if (lastFaceStateRef.current !== "multiple") {
				if (consecutiveFramesRef.current.multipleFaces >= MULTI_ON) currentFaceState = "multiple"
				else currentFaceState = rawState === "none" ? "single" : rawState
			} else {
				if (consecutiveFramesRef.current.multipleFaces <= MULTI_OFF) currentFaceState = rawState === "multiple" ? "multiple" : "single"
			}
			if (currentFaceState !== "none") {
				if (consecutiveFramesRef.current.noFace >= NONE_ON) currentFaceState = "none"
			} else if (consecutiveFramesRef.current.noFace <= NONE_OFF) {
				currentFaceState = rawState === "none" ? "none" : "single"
			}

			if (currentFaceState === "multiple") {
				if (lastFaceStateRef.current !== "multiple") {
					setMultipleFacesStartTime(now)
					setMultipleFacesDetectionCount((p) => p + 1)
					if (!incidentRef.current.multipleFaces) {
						incidentRef.current.multipleFaces = true
						onAddEvent?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: faces.length }, timestamp: now })
						const img = captureCurrentFrame(0.85)
						if (img) appendSnapshot({ timestamp: now, type: "violation_trigger", image: img, context: "Multiple faces detected" })
					}
				}
			} else {
				if (lastFaceStateRef.current === "multiple" && multipleFacesStartTime !== null) {
					const duration = now - multipleFacesStartTime
					setMultipleFacesDuration((p) => p + duration)
					setMultipleFacesStartTime(null)
				}
				incidentRef.current.multipleFaces = false
			}

			if (currentFaceState === "none") {
				if (lastFaceStateRef.current !== "none") {
					setNoFaceStartTime(now)
					setNoFaceDetectionCount((p) => p + 1)
					if (!incidentRef.current.noFace) {
						incidentRef.current.noFace = true
						onAddEvent?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: now })
						const img = captureCurrentFrame(0.85)
						if (img) appendSnapshot({ timestamp: now, type: "violation_trigger", image: img, context: "No face detected" })
					}
				}
			} else {
				if (lastFaceStateRef.current === "none" && noFaceStartTime !== null) {
					const duration = now - noFaceStartTime
					setNoFaceDuration((p) => p + duration)
					setNoFaceStartTime(null)
				}
				incidentRef.current.noFace = false
			}

			lastFaceStateRef.current = currentFaceState

			if (faces.length === 1) {
				const face = faces[0]
				const ctx = canvas.getContext("2d")
				if (ctx) {
					ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
					const fullFrame = ctx.getImageData(0, 0, canvas.width, canvas.height)
					const faceRegion = ctx.getImageData(face.x, face.y, face.width, face.height)
					// Head pose driven posture analysis with smoothing and hysteresis
					let posture: PostureAnalysis = { isGoodPosture: true, shoulderAlignment: 0, headTilt: 0, confidence: 0.7 }
					const headPose = analyzeHeadPose(face)
					if (headPose) {
						// Update EMA for yaw/pitch/roll to reduce jitter
						if (!postureEMARef.current.initialized) {
							postureEMARef.current = { yaw: headPose.yaw, pitch: headPose.pitch, roll: headPose.roll, initialized: true }
						} else {
							postureEMARef.current.yaw = POSTURE_EMA_ALPHA * headPose.yaw + (1 - POSTURE_EMA_ALPHA) * postureEMARef.current.yaw
							postureEMARef.current.pitch = POSTURE_EMA_ALPHA * headPose.pitch + (1 - POSTURE_EMA_ALPHA) * postureEMARef.current.pitch
							postureEMARef.current.roll = POSTURE_EMA_ALPHA * headPose.roll + (1 - POSTURE_EMA_ALPHA) * postureEMARef.current.roll
						}

						const yawE = postureEMARef.current.yaw
						const pitchE = postureEMARef.current.pitch
						const rollE = postureEMARef.current.roll

						// Candidate classification using smoothed angles
						const goodCandidate = Math.abs(rollE) <= 10 && Math.abs(pitchE) <= 12 && Math.abs(yawE) <= 18

						// Hysteresis: require N consecutive frames to flip
						if (goodCandidate !== postureStateRef.current.isGood) {
							if (goodCandidate) {
								postureStateRef.current.goodStreak += 1
								postureStateRef.current.poorStreak = 0
								if (postureStateRef.current.goodStreak >= POSTURE_SWITCH_STREAK) {
									postureStateRef.current.isGood = true
									postureStateRef.current.goodStreak = 0
								}
							} else {
								postureStateRef.current.poorStreak += 1
								postureStateRef.current.goodStreak = 0
								if (postureStateRef.current.poorStreak >= POSTURE_SWITCH_STREAK) {
									postureStateRef.current.isGood = false
									postureStateRef.current.poorStreak = 0
								}
							}
						} else {
							// Stable classification, reset streaks
							postureStateRef.current.goodStreak = 0
							postureStateRef.current.poorStreak = 0
						}

						posture = {
							isGoodPosture: postureStateRef.current.isGood,
							// Use roll (tilt) as a proxy for shoulder alignment; smaller magnitude means better alignment
							shoulderAlignment: -rollE,
							headTilt: pitchE,
							confidence: Math.min(1, 0.6 + 0.4 * headPose.confidence),
						}
					}
					let expression: ExpressionAnalysis | null = null
					if (emotionAnalyzerRef.current) {
						const res = emotionAnalyzerRef.current.analyze(faceRegion, { landmarks: face.landmarks as any, headPose: headPose ?? null })
						expression = { dominant: res.dominant, confidence: res.confidence, emotions: res.emotions as Record<string, number> }
					}
					const attire = analyzeAttire(face, fullFrame)
					// headPose already computed above for posture; compute if absent
					const headPoseForGaze = headPose ?? analyzeHeadPose(face)
					setPostureAnalysis(posture)
					setExpressionAnalysis(expression)
					setAttireAnalysis(attire)
					// Determine on-screen using MediaPipe if present, else fallback using head pose + face center
					let onScreenGaze: boolean | null = null
					if (mpGazeRef.current && video) {
						try {
							const g = await mpGazeRef.current.estimate(video, (performance as any)?.now?.() || undefined)
							onScreenGaze = g?.onScreen ?? null
							if (onScreenGaze !== null) setGazeOnScreen(onScreenGaze)
							if (onScreenGaze === false && !isLookingOffScreen && Date.now() - gazeCooldownRef.current > 3000) {
								setGazeOffScreenCount((p) => p + 1)
								setIsLookingOffScreen(true)
								setGazeOffScreenStartTime(now)
								gazeCooldownRef.current = Date.now()
								setGazeOnScreen(false)
								if (!incidentRef.current.gazeOff) {
									incidentRef.current.gazeOff = true
									onAddEvent?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: true, headPose: headPoseForGaze, gaze: g }, timestamp: now })
								}
							} else if (onScreenGaze === true && isLookingOffScreen) {
								if (gazeOffScreenStartTime !== null) {
									const duration = now - gazeOffScreenStartTime
									setGazeOffScreenDuration((p) => p + duration)
									setGazeOffScreenStartTime(null)
								}
								setIsLookingOffScreen(false)
								incidentRef.current.gazeOff = false
								setGazeOnScreen(true)
							}
						} catch {
							onScreenGaze = null
						}
					}

					if (onScreenGaze === null) {
						// Fallback: use head pose + face center offset
						const videoW = canvas.width, videoH = canvas.height
						const faceCenterX = face.x + face.width / 2
						const faceCenterY = face.y + face.height / 2
						const offCenter = Math.hypot((faceCenterX - videoW / 2) / videoW, (faceCenterY - videoH / 2) / videoH)
						const yaw = headPoseForGaze?.yaw ?? 0
						const pitch = headPoseForGaze?.pitch ?? 0
						const strongHead = Math.abs(yaw) > FALLBACK_THRESHOLDS.yaw || Math.abs(pitch) > FALLBACK_THRESHOLDS.pitch
						const strongCenter = offCenter > FALLBACK_THRESHOLDS.centerOffset
						const definitelyOff = strongHead || strongCenter
						if (definitelyOff) {
							fallbackGazeRef.current.offFrames += 1
							fallbackGazeRef.current.onFrames = Math.max(0, fallbackGazeRef.current.onFrames - 1)
						} else {
							fallbackGazeRef.current.onFrames += 1
							fallbackGazeRef.current.offFrames = Math.max(0, fallbackGazeRef.current.offFrames - 1)
						}
						const offNow = fallbackGazeRef.current.offFrames >= FALLBACK_OFF_FRAMES
						const onNow = fallbackGazeRef.current.onFrames >= FALLBACK_ON_FRAMES
						setGazeOnScreen((prev) => (onNow ? true : offNow ? false : prev))
						if (offNow && !isLookingOffScreen && Date.now() - gazeCooldownRef.current > 3000) {
							setGazeOffScreenCount((p) => p + 1)
							setIsLookingOffScreen(true)
							setGazeOffScreenStartTime(now)
							gazeCooldownRef.current = Date.now()
							setGazeOnScreen(false)
							if (!incidentRef.current.gazeOff) {
								incidentRef.current.gazeOff = true
								onAddEvent?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: true, reason: strongHead ? "head_pose" : "center_offset", headPose: headPoseForGaze }, timestamp: now })
							}
						} else if (onNow && isLookingOffScreen) {
							if (gazeOffScreenStartTime !== null) {
								const duration = now - gazeOffScreenStartTime
								setGazeOffScreenDuration((p) => p + duration)
								setGazeOffScreenStartTime(null)
							}
							setIsLookingOffScreen(false)
							incidentRef.current.gazeOff = false
							setGazeOnScreen(true)
						}
					}

				    const hasViolation: boolean = (faces.length as number) === 0 || (faces.length as number) > 1
						if (onUpdateSession && (hasViolation || now - lastSessionUpdateRef.current >= 5000)) {
							if (hasViolation) {
								const img = captureCurrentFrame(0.85)
								if (img) {
									appendSnapshot({ timestamp: now, type: "violation_trigger", image: img, context: (faces.length as number) === 0 ? "No face detected" : "Multiple faces detected" })
								}
							}
							onUpdateSession({ postureAnalysis: posture, attireAnalysis: attire })
							lastSessionUpdateRef.current = now
						}
				}
			} else {
				setPostureAnalysis(null)
				setExpressionAnalysis(null)
				setAttireAnalysis(null)
				if (isLookingOffScreen) {
					if (gazeOffScreenStartTime !== null) {
						const duration = now - gazeOffScreenStartTime
						setGazeOffScreenDuration((p) => p + duration)
						setGazeOffScreenStartTime(null)
					}
					setIsLookingOffScreen(false)
				}
				setGazeOnScreen(null)
			}

			if (faces.length === 0) onStatusChange?.("violation")
			else if (faces.length > 1) onStatusChange?.("warning")
			else onStatusChange?.("optimal")
		} catch (e) {
			console.error("[widget] Face detection error:", e)
		} finally {
			animationRef.current = requestAnimationFrame(detectFaces)
			detectingRef.current = false
		}
	}, [analyzeAttire, onStatusChange, onUpdateSession, sessionData?.snapshots, isLookingOffScreen, multipleFacesStartTime, gazeOffScreenStartTime, setFaceDetected])

	useEffect(() => {
		setAudioAnomalyCount(0)
	}, [])

	useEffect(() => {
		const init = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
					audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
				})
				if (videoRef.current) videoRef.current.srcObject = stream
				let audioStream: MediaStream | null = null
				const audioTracks = stream.getAudioTracks()
				if (audioTracks.length > 0) {
					audioStream = new MediaStream(audioTracks)
					audioStreamRef.current = audioStream
				}
				await initializeFaceDetection()
				// Initialize MediaPipe gaze detector
					try { mpGazeRef.current = await createMediapipeGazeDetector({ thresholds: gazeThresholds?.mediapipe }) } catch {}
				if (audioStream) await startAudio(audioStream)
				animationRef.current = requestAnimationFrame(detectFaces)
			} catch (e) {
				onStatusChange?.("violation")
			}
		}
		init()

		// Schedule random snapshots:
		//  - 1st after 1 minute
		//  - 2nd after 5 minutes
		//  - remaining (3) spread randomly later in the session
		const totalShots = 5
		const fixedDelays = [60 * 1000, 5 * 60 * 1000]
		const remaining = Math.max(0, totalShots - fixedDelays.length)
		const times: number[] = [...fixedDelays]
		if (remaining > 0) {
			// Distribute remaining between 7 and 10 minutes with slight jitter
			const minMs = 7 * 60 * 1000
			const maxMs = 10 * 60 * 1000
			for (let i = 0; i < remaining; i++) {
				const base = minMs + Math.random() * (maxMs - minMs)
				const jitter = (Math.random() - 0.5) * 30 * 1000 // +/- 30s
				times.push(Math.max(0, Math.floor(base + jitter)))
			}
		}
		// Deduplicate close times and ensure sorted
		times.sort((a, b) => a - b)
		for (let i = 1; i < times.length; i++) {
			if (Math.abs(times[i] - times[i - 1]) < 10 * 1000) times[i] += 12 * 1000 // push by 12s if too close
		}
		times.forEach((delay) => {
			const id = window.setTimeout(() => takeRandomSnapshot(), delay)
			randomSnapshotTimersRef.current.push(id)
		})
		return () => {
			isCleaningUpRef.current = true
			if (animationRef.current) cancelAnimationFrame(animationRef.current)
			if (videoRef.current?.srcObject) {
				const s = videoRef.current.srcObject as MediaStream
				s.getTracks().forEach((t) => t.stop())
			}
			if (audioStreamRef.current) audioStreamRef.current.getTracks().forEach((t) => t.stop())
			stopAudio()
			audioStreamRef.current = null
			// Close mediapipe landmarker
			mpGazeRef.current?.close?.()
			// Clear scheduled random snapshots
			randomSnapshotTimersRef.current.forEach((id) => window.clearTimeout(id))
			randomSnapshotTimersRef.current = []
		}
	}, [])

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true)
		const rect = widgetRef.current?.getBoundingClientRect()
		if (rect) setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top })
	}
	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging) {
			const newX = Math.max(0, Math.min((typeof window !== 'undefined' ? window.innerWidth : 0) - 280, e.clientX - dragOffset.x))
			const newY = Math.max(0, Math.min((typeof window !== 'undefined' ? window.innerHeight : 0) - 400, e.clientY - dragOffset.y))
			setPosition({ x: newX, y: newY })
		}
	}
	const handleMouseUp = () => setIsDragging(false)
	useEffect(() => {
		if (isDragging) {
			document.addEventListener("mousemove", handleMouseMove)
			document.addEventListener("mouseup", handleMouseUp)
			return () => {
				document.removeEventListener("mousemove", handleMouseMove)
				document.removeEventListener("mouseup", handleMouseUp)
			}
		}
	}, [isDragging, dragOffset])

	const handleVisibilityChange = () => {
		if (document.hidden) {
			setTabSwitchCount((prev) => {
				const newCount = prev + 1
				onAddEvent?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() })
				return newCount
			})
		}
	}
	const handleFocusOut = () => setUnfocusCount((p) => p + 1)
	const handleKeyDown = (e: KeyboardEvent) => {
		setKeystrokeCount((p) => p + 1)
		onAddEvent?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() })
		if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "x" || e.key === "v")) {
			setCopyAttempts((p) => p + 1)
			e.preventDefault()
			onAddEvent?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: true, key: e.key }, timestamp: Date.now() })
		}
	}
	useEffect(() => {
		document.addEventListener("visibilitychange", handleVisibilityChange)
		window.addEventListener("blur", handleFocusOut)
		document.addEventListener("keydown", handleKeyDown)
		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange)
			window.removeEventListener("blur", handleFocusOut)
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	const borderColor = faceCount === 0 ? "#ef4444" : faceCount > 1 ? "#f59e0b" : "#22c55e"

	return (
		<div
			ref={widgetRef as any}
			onMouseDown={handleMouseDown}
			style={{
				position: "fixed",
				left: position.x,
				top: position.y,
				zIndex: 9999,
				width: 288,
				cursor: "move",
				border: `2px solid ${borderColor}`,
				borderRadius: 8,
				background: "#fff",
				boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
				padding: 12,
				userSelect: "none",
			}}
		>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
				<div style={{ fontSize: 12, fontWeight: 600 }}>
					{faceCount === 0 ? "No Face" : faceCount > 1 ? "Multiple Faces" : isStable ? "Optimal" : "Good"}
				</div>
			</div>
			<div style={{ position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }}>
				<video ref={videoRef} autoPlay muted playsInline style={{ width: "100%", height: 128, objectFit: "cover" }} />
				<canvas ref={canvasRef} width={320} height={240} style={{ display: "none" }} />
			</div>
			<div style={{ marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
				<div>Faces: <strong style={{ color: faceCount === 1 ? "#16a34a" : "#ef4444" }}>{faceCount}</strong></div>
				<div>No Face: <strong style={{ color: noFaceDetectionCount > 0 ? "#ef4444" : "#16a34a" }}>{noFaceDetectionCount}</strong></div>
				<div>Multiple: <strong style={{ color: multipleFacesDetectionCount > 0 ? "#ef4444" : "#16a34a" }}>{multipleFacesDetectionCount}</strong></div>
				<div>Posture: <strong style={{ color: postureAnalysis?.isGoodPosture ? "#16a34a" : "#f59e0b" }}>{postureAnalysis?.isGoodPosture ? "Good" : "Poor"}</strong></div>
				<div>Attire: <strong style={{ color: attireAnalysis?.isProfessional ? "#16a34a" : "#f59e0b" }}>{attireAnalysis?.isProfessional ? "Professional" : "Casual"}</strong></div>
				<div>Emotion: <strong style={{ color: "#3b82f6" }}>{expressionAnalysis?.dominant || "Unknown"}</strong></div>
				<div>Gaze: <strong style={{ color: gazeOnScreen === null ? "#9ca3af" : gazeOnScreen ? "#16a34a" : "#ef4444" }}>{gazeOnScreen === null ? "--" : gazeOnScreen ? "On" : "Off"}</strong></div>
				<div style={{ display: "flex", alignItems: "center", gap: 8 }}>Audio: <span style={{ color: audioLevel > 50 ? "#16a34a" : audioLevel > 20 ? "#f59e0b" : "#ef4444" }}>{audioLevel}%</span>
					<div style={{ width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }}>
						<div style={{ width: `${Math.min(audioLevel, 100)}%`, height: 6, transition: "width 100ms", background: audioLevel > 50 ? "#16a34a" : audioLevel > 20 ? "#f59e0b" : "#ef4444" }} />
					</div>
				</div>
				<div>Audio Alerts: <strong style={{ color: audioAnomalyCount > 0 ? "#ef4444" : "#16a34a" }}>{audioAnomalyCount}</strong></div>
				<div>Unfocus: <strong style={{ color: unfocusCount > 0 ? "#ef4444" : "#16a34a" }}>{unfocusCount}</strong></div>
				<div>Tab Switch: <strong style={{ color: tabSwitchCount > 0 ? "#ef4444" : "#16a34a" }}>{tabSwitchCount}</strong></div>
				<div>Keystrokes: <strong style={{ color: "#3b82f6" }}>{keystrokeCount}</strong></div>
				<div>Copy Attempts: <strong style={{ color: copyAttempts > 0 ? "#ef4444" : "#16a34a" }}>{copyAttempts}</strong></div>
				<div>Gaze Off: <strong style={{ color: gazeOffScreenCount > 0 ? "#ef4444" : "#16a34a" }}>{gazeOffScreenCount}</strong></div>
			</div>
		</div>
	)
}

export default FloatingVideo

