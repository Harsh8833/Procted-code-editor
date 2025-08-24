// Face detection helper: native FaceDetector first, then BlazeFace fallback
// Minimal surface to report presence + confidence

let blazeModel: any | null = null

async function loadBlazeFace() {
	if (blazeModel) return blazeModel
	const blazeface = await import('@tensorflow-models/blazeface')
	const tf = await import('@tensorflow/tfjs')
	if ((tf as any).ready) await (tf as any).ready()
	blazeModel = await (blazeface as any).load()
	return blazeModel
}

export async function detectFace(videoEl: HTMLVideoElement): Promise<{ present: boolean; confidence: number }> {
	if ('FaceDetector' in window) {
		try {
			const fd = new (window as any).FaceDetector({ fastMode: true, maxDetectedFaces: 1 })
			const faces = await fd.detect(videoEl)
			if (faces && faces.length > 0) {
				return { present: true, confidence: 0.8 }
			}
			return { present: false, confidence: 0 }
		} catch (_) {
			// fall back
		}
	}

	try {
		const model = await loadBlazeFace()
		const preds = await model.estimateFaces(videoEl, false)
		if (preds && preds.length > 0) {
			const prob = preds[0].probability ? preds[0].probability[0] : 0.7
			return { present: true, confidence: Math.max(0.5, Math.min(1, prob)) }
		}
	} catch (_) {}
	return { present: false, confidence: 0 }
}

