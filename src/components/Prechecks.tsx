"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import type { PreCheckResults } from "../types/proctoring"
import { createMicMeter } from "../lib/audio/meter"
import { detectFace } from "../lib/vision/face"

export type PrechecksProps = {
	onComplete: (results: PreCheckResults) => void
	onError?: (error: string) => void
}

export function Prechecks({ onComplete, onError }: PrechecksProps) {
	type StepId = 'camera' | 'microphone' | 'face' | 'monitor' | 'browser'
	const stepOrder: StepId[] = ['camera', 'microphone', 'face', 'monitor', 'browser']
	const [statusByStep, setStatusByStep] = useState<Record<StepId, 'pending' | 'running' | 'passed' | 'failed'>>({
		camera: 'pending',
		microphone: 'pending',
		face: 'pending',
		monitor: 'pending',
		browser: 'pending',
	})
	const [faceDetectionFrames, setFaceDetectionFrames] = useState(0)
	const [micLevel, setMicLevel] = useState(0)
	const [needsWindowPermission, setNeedsWindowPermission] = useState(false)
	const [windowPermissionState, setWindowPermissionState] = useState<PermissionState | 'unsupported' | null>(null)
	const [errorsByStep, setErrorsByStep] = useState<Record<StepId, string>>({} as any)
	const [partialResults, setPartialResults] = useState<Partial<PreCheckResults>>({})

	const camStreamRef = useRef<MediaStream | null>(null)
	const micStreamRef = useRef<MediaStream | null>(null)
	const micMeterRef = useRef<ReturnType<typeof createMicMeter> | null>(null)
	const animRef = useRef<number | null>(null)
	const videoRef = useRef<HTMLVideoElement | null>(null)
		const userGestureResolverRef = useRef<((value: unknown) => void) | null>(null)
		const screenCountAfterPromptRef = useRef<number | null>(null)

	const stopStreamsAndMeter = () => {
		try {
			camStreamRef.current?.getTracks().forEach((t) => t.stop())
		} catch {}
		try {
			micStreamRef.current?.getTracks().forEach((t) => t.stop())
		} catch {}
		camStreamRef.current = null
		micStreamRef.current = null
		if (micMeterRef.current) {
			micMeterRef.current.dispose().catch(() => {})
			micMeterRef.current = null
		}
		if (animRef.current) {
			cancelAnimationFrame(animRef.current)
			animRef.current = null
		}
	}

	const initializeAudioContext = async (audioStream: MediaStream) => {
		try {
			const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext
			if (!AudioContextClass) throw new Error("AudioContext not supported")
			const ctx = new AudioContextClass()
			const source = ctx.createMediaStreamSource(audioStream)
			const analyser = ctx.createAnalyser()
			analyser.fftSize = 256
			analyser.smoothingTimeConstant = 0.8
			source.connect(analyser)
			const data = new Uint8Array(analyser.frequencyBinCount)
			analyser.getByteFrequencyData(data)
			sessionStorage.setItem("audio-context-initialized", "true")
			source.disconnect()
			await ctx.close()
			if (typeof window !== "undefined") (window as any).precheckAudioStream = audioStream
		} catch (e) {
			sessionStorage.setItem("audio-context-initialized", "false")
		}
	}

	const verifyFaceDetection = async (_stream: MediaStream) => {
		const v = videoRef.current!
		let detectedFrames = 0
		let confidence = 0
		let frames = 0
		const maxFrames = 30
		while (frames < maxFrames && detectedFrames < 5) {
			try {
				const r = await detectFace(v)
				if (r.present) {
					detectedFrames += 1
					confidence = Math.max(confidence, r.confidence)
				}
			} catch {}
			frames++
			setFaceDetectionFrames(frames)
			await new Promise((r) => setTimeout(r, 100))
		}
		const status = detectedFrames >= 5
		return { status, confidence, timestamp: Date.now() }
	}

		const requestWindowManagementPermission = async (): Promise<PermissionState | 'unsupported'> => {
			try {
				if (!('permissions' in navigator)) return 'unsupported'
				// @ts-ignore experimental
				const perm = await navigator.permissions.query({ name: 'window-management' as any })
				return perm.state as PermissionState
			} catch {
				return 'unsupported'
			}
		}

		const estimateScreenCount = (): number => {
			try {
				const screenWidth = window.screen.width
				const screenHeight = window.screen.height
				const availWidth = window.screen.availWidth
				const aspect = screenWidth / screenHeight
				if (aspect > 3) return 2
				if (screenWidth > availWidth * 1.5) return 2
				const commonDual = [3840, 3360, 2560, 4480, 5120]
				if (commonDual.includes(screenWidth)) return 2
				return 1
			} catch {
				return 1
			}
		}

		const handleRequestWindowPermission = async () => {
			try {
				if ('getScreenDetails' in window) {
					// @ts-ignore experimental
					const screenDetails = await (window as any).getScreenDetails()
					screenCountAfterPromptRef.current = screenDetails.screens.length
				} else {
					screenCountAfterPromptRef.current = null
				}
			} catch {
				screenCountAfterPromptRef.current = null
			} finally {
				userGestureResolverRef.current?.(true)
				userGestureResolverRef.current = null
				setNeedsWindowPermission(false)
			}
		}

		const checkMonitorCount = async (): Promise<number> => {
			try {
				if (!window.isSecureContext) return estimateScreenCount()
				if ('permissions' in navigator) {
					try {
						// @ts-ignore experimental name
						const permission = await navigator.permissions.query({ name: 'window-management' as any })
						setWindowPermissionState(permission.state as PermissionState)
						if (permission.state === 'granted') {
							if ('getScreenDetails' in window) {
								const details = await (window as any).getScreenDetails()
								return details.screens.length
							}
						} else if (permission.state === 'prompt') {
							setNeedsWindowPermission(true)
							await new Promise((resolve) => { userGestureResolverRef.current = resolve })
							setNeedsWindowPermission(false)
							if (screenCountAfterPromptRef.current != null) {
								const count = screenCountAfterPromptRef.current
								screenCountAfterPromptRef.current = null
								return count
							}
						}
					} catch {}
				}
				return estimateScreenCount()
			} catch {
				return 1
			}
		}

	const checkBrowserSupport = (): boolean => {
		const requiredAPIs = [
			"navigator.mediaDevices",
			"navigator.mediaDevices.getUserMedia",
			"requestAnimationFrame",
			"WebAssembly",
		]
		return requiredAPIs.every((api) => {
			const parts = api.split(".")
			let obj: any = window
			for (const part of parts) {
				if (!(part in obj)) return false
				obj = obj[part]
			}
			return true
		})
	}
	// Helpers to set step status and errors
	const setStepStatus = (id: StepId, status: 'pending' | 'running' | 'passed' | 'failed') => {
		setStatusByStep((prev) => ({ ...prev, [id]: status }))
	}

	const runCamera = useCallback(async () => {
		setStepStatus('camera', 'running')
		setErrorsByStep((p) => ({ ...p, camera: '' }))
		try {
			// stop previous stream
			try { camStreamRef.current?.getTracks().forEach((t) => t.stop()) } catch {}
			const camera = await navigator.mediaDevices.getUserMedia({
				video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } },
			})
			camStreamRef.current = camera
			if (!videoRef.current) {
				const v = document.createElement('video')
				v.muted = true
				v.playsInline = true
				videoRef.current = v
			}
			videoRef.current.srcObject = camera
			try { await videoRef.current.play() } catch {}
			setPartialResults((r) => ({ ...r, cameraAccess: true }))
			setStepStatus('camera', 'passed')
			return true
		} catch (mediaError: any) {
			const msg = mediaError?.name === 'NotAllowedError' ? 'Camera permission denied' : mediaError?.message || 'Camera access failed'
			setErrorsByStep((p) => ({ ...p, camera: msg }))
			setStepStatus('camera', 'failed')
			return false
		}
	}, [])

	const runMicrophone = useCallback(async () => {
		setStepStatus('microphone', 'running')
		setErrorsByStep((p) => ({ ...p, microphone: '' }))
		try {
			try { micStreamRef.current?.getTracks().forEach((t) => t.stop()) } catch {}
			const audio = await navigator.mediaDevices.getUserMedia({
				audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
			})
			micStreamRef.current = audio
			setPartialResults((r) => ({ ...r, microphoneAccess: true }))
			await initializeAudioContext(audio)
			try {
				const meter = createMicMeter(audio)
				micMeterRef.current = meter
				const loop = () => {
					setMicLevel(meter.getLevel())
					animRef.current = requestAnimationFrame(loop)
				}
				animRef.current = requestAnimationFrame(loop)
			} catch {}
			setStepStatus('microphone', 'passed')
			return true
		} catch (mediaError: any) {
			const msg = mediaError?.name === 'NotAllowedError' ? 'Microphone permission denied' : mediaError?.message || 'Microphone access failed'
			setErrorsByStep((p) => ({ ...p, microphone: msg }))
			setStepStatus('microphone', 'failed')
			return false
		}
	}, [])

	const runFace = useCallback(async () => {
		setStepStatus('face', 'running')
		setErrorsByStep((p) => ({ ...p, face: '' }))
		try {
			if (!camStreamRef.current) throw new Error('Camera is not initialized')
			const face = await verifyFaceDetection(camStreamRef.current)
			setPartialResults((r) => ({ ...r, faceDetection: face }))
			if (face.status) {
				setStepStatus('face', 'passed')
				return true
			}
			throw new Error('No face detected. Please align your face within the frame and retry.')
		} catch (err: any) {
			const msg = err?.message || 'Face detection failed'
			setErrorsByStep((p) => ({ ...p, face: msg }))
			setStepStatus('face', 'failed')
			return false
		}
	}, [])

	const runMonitor = useCallback(async () => {
		setStepStatus('monitor', 'running')
		setErrorsByStep((p) => ({ ...p, monitor: '' }))
		try {
			try {
				setWindowPermissionState(await requestWindowManagementPermission())
			} catch {}
			const count = await checkMonitorCount()
			// We consider this step passed if we could get a count (>=1)
			if (count && count >= 1) {
				setPartialResults((r) => ({ ...r, monitorCount: count }))
				setStepStatus('monitor', 'passed')
				return true
			}
			throw new Error('Could not verify monitors')
		} catch (err: any) {
			setErrorsByStep((p) => ({ ...p, monitor: err?.message || 'Monitor verification failed' }))
			setStepStatus('monitor', 'failed')
			return false
		}
	}, [])

	const runBrowser = useCallback(async () => {
		setStepStatus('browser', 'running')
		setErrorsByStep((p) => ({ ...p, browser: '' }))
		try {
			const ok = checkBrowserSupport()
			setPartialResults((r) => ({ ...r, browserSupport: ok }))
			if (!ok) throw new Error('Required browser features are unavailable')
			setStepStatus('browser', 'passed')
			return true
		} catch (err: any) {
			setErrorsByStep((p) => ({ ...p, browser: err?.message || 'Browser not supported' }))
			setStepStatus('browser', 'failed')
			return false
		}
	}, [])

	const stepRunners: Record<StepId, () => Promise<boolean>> = {
		camera: runCamera,
		microphone: runMicrophone,
		face: runFace,
		monitor: runMonitor,
		browser: runBrowser,
	}

	const runFromIndex = useCallback(async (startIndex: number) => {
		for (let i = startIndex; i < stepOrder.length; i++) {
			const id = stepOrder[i]
			const ok = await stepRunners[id]()
			if (!ok) break
		}
	}, [stepRunners])

	// When everything passes, emit completion once
	useEffect(() => {
		const allPassed = stepOrder.every((id) => statusByStep[id] === 'passed')
		if (!allPassed) return
		const finalResults: PreCheckResults = {
			cameraAccess: !!partialResults.cameraAccess,
			microphoneAccess: !!partialResults.microphoneAccess,
			faceDetection: partialResults.faceDetection || { status: false, confidence: 0, timestamp: Date.now() },
			monitorCount: partialResults.monitorCount || 1,
			browserSupport: !!partialResults.browserSupport,
			codeEditorReady: true,
		}
		onComplete(finalResults)
		stopStreamsAndMeter()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [statusByStep, partialResults])

	useEffect(() => {
		// Start the flow automatically
		runFromIndex(0)
		return () => stopStreamsAndMeter()
	}, [])

	const handleRetry = (id: StepId) => {
		const idx = stepOrder.indexOf(id)
		// Reset this and subsequent steps to pending
		setStatusByStep((prev) => {
			const next = { ...prev }
			for (let i = idx; i < stepOrder.length; i++) next[stepOrder[i]] = 'pending'
			return next as typeof prev
		})
		setErrorsByStep((prev) => ({ ...prev, [id]: '' }))
		// Kick off from this step
		runFromIndex(idx)
	}

	const completedCount = stepOrder.filter((id) => statusByStep[id] === 'passed').length
	const hasRunning = stepOrder.some((id) => statusByStep[id] === 'running')
	const progress = Math.round(((completedCount + (hasRunning ? 0.5 : 0)) / stepOrder.length) * 100)

		return (
			<div style={{ fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }}>
				<div style={{ width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
					<div style={{ textAlign: "center", marginBottom: 12 }}>
						<h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>System Pre-Check</h2>
						<p style={{ color: "#6b7280" }}>Verifying your system for proctored assessment</p>
					</div>
					<div style={{ marginBottom: 16 }}>
						<div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
							<span>Overall Progress</span>
							<span>{progress}%</span>
						</div>
						<div style={{ height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }}>
							<div style={{ width: `${progress}%`, height: 8, background: "#3b82f6" }} />
						</div>
					</div>
					<div style={{ display: "grid", gap: 8 }}>
						{stepOrder.map((id) => {
							const label = id === 'camera' ? 'Camera Access' : id === 'microphone' ? 'Microphone Access' : id === 'face' ? 'Face Detection' : id === 'monitor' ? 'Monitor Verification' : 'Browser Support'
							const status = statusByStep[id]
							const bg = status === 'passed' ? '#ecfdf5' : status === 'running' ? '#eff6ff' : status === 'failed' ? '#fef2f2' : '#f9fafb'
							const dot = status === 'passed' ? '#10b981' : status === 'running' ? '#3b82f6' : status === 'failed' ? '#dc2626' : '#9ca3af'
							return (
								<div key={id} style={{ display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: bg }}>
									<div style={{ width: 12, height: 12, borderRadius: 9999, background: dot }} />
									<div style={{ minWidth: 0 }}>
										<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
											<div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
										</div>
										{id === 'face' && (
											<div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
												<video ref={videoRef} muted playsInline autoPlay style={{ width: 180, height: 112, background: "#000", borderRadius: 6 }} />
												{(status === 'running') && <div style={{ color: '#6b7280', fontSize: 12 }}>Analyzing frames: {faceDetectionFrames}</div>}
											</div>
										)}
										{id === 'microphone' && status !== 'pending' && (
											<div style={{ marginTop: 6, width: 220, height: 8, background: '#e5e7eb', borderRadius: 9999, overflow: 'hidden' }}>
												<div style={{ width: `${Math.min(100, Math.round(micLevel * 200))}%`, height: 8, background: '#10b981', transition: 'width 150ms' }} />
											</div>
										)}
										{errorsByStep[id] && (
											<div style={{ marginTop: 6, color: '#dc2626', fontSize: 12 }}>{errorsByStep[id]}</div>
										)}
										{id === 'monitor' && (status === 'running' || status === 'pending') && needsWindowPermission && (
											<div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
												<span style={{ fontSize: 12, color: '#6b7280' }}>Enable multi-screen detection</span>
												<button onClick={handleRequestWindowPermission} style={{ fontSize: 12, padding: '6px 10px', borderRadius: 6, background: '#3b82f6', color: '#fff', border: 0 }}>Allow Window Management</button>
											</div>
										)}
									</div>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
										<div style={{ fontSize: 12, padding: '2px 8px', borderRadius: 9999, background: status === 'passed' ? '#111827' : status === 'failed' ? '#fee2e2' : '#e5e7eb', color: status === 'passed' ? '#fff' : '#111827' }}>
											{status === 'passed' ? 'Passed' : status === 'running' ? 'Checking…' : status === 'failed' ? 'Failed' : 'Pending'}
										</div>
										{status === 'failed' && (
											<button onClick={() => handleRetry(id)} style={{ fontSize: 12, padding: '6px 10px', borderRadius: 6, background: '#111827', color: '#fff', border: 0 }}>Retry</button>
										)}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
}

export default Prechecks

