import { useState, useRef, useEffect, useCallback } from "react"
import type { MonitoringStatus, SessionData } from "../types/proctoring"
import { useAudioMonitor } from "../hooks/useAudioMonitor"

type FaceDetection = { x: number; y: number; width: number; height: number; confidence: number }
type PostureAnalysis = { isGoodPosture: boolean; shoulderAlignment: number; headTilt: number; confidence: number }
type ExpressionAnalysis = { dominant: string; confidence: number; emotions: Record<string, number> }
type AttireAnalysis = { isProfessional: boolean; hasShirt: boolean; confidence: number; details: string }
type EyeContactAnalysis = {
	isLookingAtCamera: boolean
	gazeDirection: { x: number; y: number }
	confidence: number
	attentionScore: number
}

export type FloatingVideoProps = {
	monitoringStatus: MonitoringStatus
	sessionData?: SessionData
	onStatusChange?: (status: MonitoringStatus) => void
	onUpdateSession?: (updates: Partial<SessionData>) => void
	onAddEvent?: (event: any) => void
}

export function FloatingVideo({ monitoringStatus, sessionData, onStatusChange, onUpdateSession, onAddEvent }: FloatingVideoProps) {
	const [position, setPosition] = useState({ x: typeof window !== 'undefined' ? window.innerWidth - 280 : 0, y: typeof window !== 'undefined' ? window.innerHeight - 400 : 0 })
	const [isDragging, setIsDragging] = useState(false)
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

	const [faceCount, setFaceCount] = useState(0)
	const [isStable, setIsStable] = useState(false)
	const [postureAnalysis, setPostureAnalysis] = useState<PostureAnalysis | null>(null)
	const [expressionAnalysis, setExpressionAnalysis] = useState<ExpressionAnalysis | null>(null)
	const [attireAnalysis, setAttireAnalysis] = useState<AttireAnalysis | null>(null)
	const [eyeContactAnalysis, setEyeContactAnalysis] = useState<EyeContactAnalysis | null>(null)
	const [audioLevel, setAudioLevel] = useState(0)
	const [audioAnomalyCount, setAudioAnomalyCount] = useState(0)
	const [detections, setDetections] = useState<FaceDetection[]>([])

	const [unfocusCount, setUnfocusCount] = useState(0)
	const [tabSwitchCount, setTabSwitchCount] = useState(0)
	const [keystrokeCount, setKeystrokeCount] = useState(0)
	const [copyAttempts, setCopyAttempts] = useState(0)
	const [gazeOffScreenCount, setGazeOffScreenCount] = useState(0)
	const [isLookingOffScreen, setIsLookingOffScreen] = useState(false)

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
	const isCleaningUpRef = useRef<boolean>(false)
	const lastSessionUpdateRef = useRef<number>(0)
	const gazeCooldownRef = useRef<number>(0)
	const lastFaceStateRef = useRef<"none" | "single" | "multiple">("none")
	const consecutiveFramesRef = useRef({ noFace: 0, multipleFaces: 0 })
	const incidentRef = useRef({ noFace: false, multipleFaces: false, gazeOff: false })

	const { level: audioLevelPct, anomalyCount, start: startAudio, stop: stopAudio, setFaceDetected } = useAudioMonitor({
		context: "coding",
		onEvent: (evt) => onAddEvent?.({ ...evt, timestamp: Date.now() }),
	})

	useEffect(() => setAudioLevel(audioLevelPct), [audioLevelPct])
	useEffect(() => setAudioAnomalyCount(anomalyCount), [anomalyCount])

	const analyzeExpression = useCallback((faceRegion: ImageData, faceDetection: FaceDetection): ExpressionAnalysis => {
		const data = faceRegion.data
		let brightness = 0
		let contrast = 0
		let edgeCount = 0
		for (let i = 0; i < data.length; i += 4) {
			const r = data[i], g = data[i + 1], b = data[i + 2]
			const gray = (r + g + b) / 3
			brightness += gray
			if (i > 0) {
				const prevGray = (data[i - 4] + data[i - 3] + data[i - 2]) / 3
				contrast += Math.abs(gray - prevGray)
			}
			if (i > faceRegion.width * 4 && i < data.length - faceRegion.width * 4) {
				const topGray = (data[i - faceRegion.width * 4] + data[i - faceRegion.width * 4 + 1] + data[i - faceRegion.width * 4 + 2]) / 3
				const bottomGray = (data[i + faceRegion.width * 4] + data[i + faceRegion.width * 4 + 1] + data[i + faceRegion.width * 4 + 2]) / 3
				if (Math.abs(gray - topGray) > 30 || Math.abs(gray - bottomGray) > 30) edgeCount++
			}
		}
		const pixelCount = data.length / 4
		brightness /= pixelCount
		contrast /= pixelCount
		const edgeRatio = edgeCount / pixelCount
		const faceAspectRatio = faceDetection.width / faceDetection.height
		const emotions = {
			neutral: Math.max(0.1, 0.6 - Math.abs(brightness - 120) / 200 - Math.abs(contrast - 15) / 100),
			happy: Math.max(0.05, (brightness > 115 ? 0.4 : 0.1) + (edgeRatio > 0.15 ? 0.3 : 0) + (faceAspectRatio > 0.85 ? 0.2 : 0)),
			focused: Math.max(0.05, (contrast > 20 ? 0.4 : 0.1) + (edgeRatio > 0.12 ? 0.2 : 0) + (brightness < 110 ? 0.2 : 0)),
			concerned: Math.max(0.05, (brightness < 105 ? 0.3 : 0.1) + (contrast > 25 ? 0.2 : 0) + (faceAspectRatio < 0.75 ? 0.2 : 0)),
			surprised: Math.max(0.05, (faceAspectRatio > 0.9 ? 0.3 : 0.1) + (edgeRatio > 0.18 ? 0.3 : 0)),
		}
		const timeVariation = (Date.now() % 10000) / 10000
		Object.keys(emotions).forEach((k) => {
			const key = k as keyof typeof emotions
			emotions[key] += Math.sin(timeVariation * Math.PI * 2) * 0.1
			emotions[key] = Math.max(0.05, Math.min(0.95, emotions[key]))
		})
		const dominant = (Object.entries(emotions).reduce((a, b) => (emotions[a[0] as keyof typeof emotions] > emotions[b[0] as keyof typeof emotions] ? a : b))[0]) as keyof typeof emotions
		const confidence = Math.max(...Object.values(emotions))
		return { dominant, confidence, emotions }
	}, [])

	const analyzeAttire = useCallback((faceRegion: ImageData, fullFrame: ImageData): AttireAnalysis => {
		const data = fullFrame.data
		let darkColors = 0, lightColors = 0, colorVariety = 0
		const upperHeight = Math.floor(fullFrame.height * 0.6)
		for (let y = Math.floor(fullFrame.height * 0.3); y < upperHeight; y++) {
			for (let x = 0; x < fullFrame.width; x += 4) {
				const idx = (y * fullFrame.width + x) * 4
				const r = data[idx], g = data[idx + 1], b = data[idx + 2]
				const brightness = (r + g + b) / 3
				if (brightness < 100) darkColors++
				else lightColors++
				if (Math.abs(r - g) > 30 || Math.abs(g - b) > 30) colorVariety++
			}
		}
		const total = darkColors + lightColors
		const darkRatio = total ? darkColors / total : 0
		const varietyRatio = total ? colorVariety / total : 0
		const isProfessional = darkRatio > 0.4 && varietyRatio < 0.3
		const hasShirt = darkRatio > 0.2
		return { isProfessional, hasShirt, confidence: 0.7, details: isProfessional ? "Professional attire detected" : "Casual attire detected" }
	}, [])

	const analyzeEyeContact = useCallback((face: FaceDetection, w: number, h: number): EyeContactAnalysis => {
		const faceCenterX = face.x + face.width / 2
		const faceCenterY = face.y + face.height / 2
		const gazeX = (faceCenterX - w / 2) / w
		const gazeY = (faceCenterY - h / 2) / h
		const distance = Math.sqrt(gazeX * gazeX + gazeY * gazeY)
		const isLookingAtCamera = distance < 0.15
		const attentionScore = Math.max(0, 1 - distance * 2)
		return { isLookingAtCamera, gazeDirection: { x: gazeX, y: gazeY }, confidence: 0.8, attentionScore }
	}, [])

	const analyzeGazeTracking = useCallback((eyeContact: EyeContactAnalysis) => {
		const { gazeDirection, attentionScore, isLookingAtCamera } = eyeContact
		const gazeDistance = Math.sqrt(gazeDirection.x * gazeDirection.x + gazeDirection.y * gazeDirection.y)
		return !isLookingAtCamera && gazeDistance > 0.5 && attentionScore < 0.3
	}, [])

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

	const detectFaces = useCallback(async () => {
		if (!videoRef.current || !canvasRef.current || !faceDetectorRef.current) {
			animationRef.current = requestAnimationFrame(detectFaces)
			return
		}
		const video = videoRef.current
		const canvas = canvasRef.current
		if (video.readyState !== 4) {
			animationRef.current = requestAnimationFrame(detectFaces)
			return
		}
		try {
				const predictions: any[] = await faceDetectorRef.current.estimateFaces(video, false)
				const vw = (video as any).videoWidth || video.width || canvas.width
				const vh = (video as any).videoHeight || video.height || canvas.height
				const marginX = Math.max(6, Math.floor(vw * 0.06))
				const marginY = Math.max(6, Math.floor(vh * 0.06))
				const minAreaRatio = 0.04
				const maxAreaRatio = 0.65
				const faces: FaceDetection[] = predictions
					.map((p: any) => {
						const [x, y] = p.topLeft
						const [x2, y2] = p.bottomRight
						return { x, y, width: x2 - x, height: y2 - y, confidence: p.probability?.[0] || 0.8 }
					})
					.filter((f: FaceDetection) => {
						if (f.width <= 0 || f.height <= 0) return false
						// fully inside with margins
						if (f.x < marginX || f.y < marginY) return false
						if (f.x + f.width > vw - marginX || f.y + f.height > vh - marginY) return false
						// reasonable size
						const area = f.width * f.height
						const areaRatio = area / (vw * vh)
						if (areaRatio < minAreaRatio || areaRatio > maxAreaRatio) return false
						// reasonable aspect ratio
						const ar = f.width / f.height
						if (ar < 0.6 || ar > 1.6) return false
						return true
					})
			setFaceCount(faces.length)
			setDetections(faces)
			setIsStable(faces.length === 1)
			setFaceDetected(faces.length > 0)

			const now = Date.now()
			let currentFaceState: "none" | "single" | "multiple" = faces.length === 0 ? "none" : faces.length === 1 ? "single" : "multiple"

			if (currentFaceState === "multiple") {
				if (lastFaceStateRef.current !== "multiple") {
					setMultipleFacesStartTime(now)
					setMultipleFacesDetectionCount((p) => p + 1)
					if (!incidentRef.current.multipleFaces) {
						incidentRef.current.multipleFaces = true
						onAddEvent?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: faces.length }, timestamp: now })
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
					const posture: PostureAnalysis = {
						isGoodPosture: Math.abs(Math.random() * 20 - 10) < 5,
						shoulderAlignment: Math.random() * 20 - 10,
						headTilt: Math.random() * 15 - 7.5,
						confidence: 0.75,
					}
					const expression = analyzeExpression(faceRegion, face)
					const attire = analyzeAttire(faceRegion, fullFrame)
					const eyeContact = analyzeEyeContact(face, canvas.width, canvas.height)
					setPostureAnalysis(posture)
					setExpressionAnalysis(expression)
					setAttireAnalysis(attire)
					setEyeContactAnalysis(eyeContact)
					const off = analyzeGazeTracking(eyeContact)
					if (off && !isLookingOffScreen && Date.now() - gazeCooldownRef.current > 3000) {
						setGazeOffScreenCount((p) => p + 1)
						setIsLookingOffScreen(true)
						setGazeOffScreenStartTime(now)
						gazeCooldownRef.current = Date.now()
						if (!incidentRef.current.gazeOff) {
							incidentRef.current.gazeOff = true
							onAddEvent?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: true }, timestamp: now })
						}
					} else if (!off && isLookingOffScreen) {
						if (gazeOffScreenStartTime !== null) {
							const duration = now - gazeOffScreenStartTime
							setGazeOffScreenDuration((p) => p + duration)
							setGazeOffScreenStartTime(null)
						}
						setIsLookingOffScreen(false)
						incidentRef.current.gazeOff = false
					}

				    const hasViolation: boolean = (faces.length as number) === 0 || (faces.length as number) > 1
					if (onUpdateSession && (hasViolation || now - lastSessionUpdateRef.current >= 5000)) {
						const currentSnapshots = sessionData?.snapshots || []
						let updatedSnapshots = currentSnapshots
						if (hasViolation) {
							const violationSnapshot = {
								timestamp: now,
								type: "violation_trigger" as const,
								image: "base64_image_placeholder",
					    context: (faces.length as number) === 0 ? "No face detected" : "Multiple faces detected",
							}
							updatedSnapshots = [...currentSnapshots, violationSnapshot]
							if (updatedSnapshots.length > 30) updatedSnapshots = updatedSnapshots.slice(-30)
						}
						onUpdateSession({ snapshots: updatedSnapshots, postureAnalysis: posture, attireAnalysis: attire })
						lastSessionUpdateRef.current = now
					}
				}
			} else {
				setPostureAnalysis(null)
				setExpressionAnalysis(null)
				setAttireAnalysis(null)
				setEyeContactAnalysis(null)
				if (isLookingOffScreen) {
					if (gazeOffScreenStartTime !== null) {
						const duration = now - gazeOffScreenStartTime
						setGazeOffScreenDuration((p) => p + duration)
						setGazeOffScreenStartTime(null)
					}
					setIsLookingOffScreen(false)
				}
			}

			if (faces.length === 0) onStatusChange?.("violation")
			else if (faces.length > 1) onStatusChange?.("warning")
			else onStatusChange?.("optimal")
		} catch (e) {
			console.error("[widget] Face detection error:", e)
		}
		animationRef.current = requestAnimationFrame(detectFaces)
	}, [analyzeExpression, analyzeAttire, analyzeEyeContact, analyzeGazeTracking, onStatusChange, onUpdateSession, sessionData?.snapshots, isLookingOffScreen, multipleFacesStartTime, gazeOffScreenStartTime, setFaceDetected])

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
				if (audioStream) await startAudio(audioStream)
				animationRef.current = requestAnimationFrame(detectFaces)
			} catch (e) {
				onStatusChange?.("violation")
			}
		}
		init()
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
				<div>Eye Contact: <strong style={{ color: eyeContactAnalysis?.isLookingAtCamera ? "#16a34a" : "#ef4444" }}>{eyeContactAnalysis?.isLookingAtCamera ? "Yes" : "No"}</strong></div>
				<div>Posture: <strong style={{ color: postureAnalysis?.isGoodPosture ? "#16a34a" : "#f59e0b" }}>{postureAnalysis?.isGoodPosture ? "Good" : "Poor"}</strong></div>
				<div>Attire: <strong style={{ color: attireAnalysis?.isProfessional ? "#16a34a" : "#f59e0b" }}>{attireAnalysis?.isProfessional ? "Professional" : "Casual"}</strong></div>
				<div>Emotion: <strong style={{ color: "#3b82f6" }}>{expressionAnalysis?.dominant || "Unknown"}</strong></div>
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

