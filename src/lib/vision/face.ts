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

function isValidBox(
  box: { x: number; y: number; width: number; height: number },
  vw: number,
  vh: number
): boolean {
  // Reject degenerate boxes
  if (box.width <= 0 || box.height <= 0 || vw <= 0 || vh <= 0) return false
  // Require the face box to be fully inside the frame with a margin, so partial (e.g., only forehead) is ignored
  const mx = Math.max(6, Math.floor(vw * 0.06))
  const my = Math.max(6, Math.floor(vh * 0.06))
  if (box.x < mx || box.y < my) return false
  if (box.x + box.width > vw - mx || box.y + box.height > vh - my) return false
  // Size constraints: too tiny or too huge likely noise or too close
  const area = box.width * box.height
  const frameArea = vw * vh
  const areaRatio = area / frameArea
  if (areaRatio < 0.04 || areaRatio > 0.65) return false
  // Aspect ratio of face bbox should be reasonable
  const ar = box.width / box.height
  if (ar < 0.6 || ar > 1.6) return false
  return true
}

export async function detectFace(videoEl: HTMLVideoElement): Promise<{ present: boolean; confidence: number }> {
	if ('FaceDetector' in window) {
		try {
			const fd = new (window as any).FaceDetector({ fastMode: true, maxDetectedFaces: 1 })
			const faces = await fd.detect(videoEl)
			if (faces && faces.length > 0) {
				const bb = faces[0]?.boundingBox
				const vw = (videoEl as any).videoWidth || videoEl.width || 0
				const vh = (videoEl as any).videoHeight || videoEl.height || 0
				if (bb) {
					const box = { x: bb.x, y: bb.y, width: bb.width, height: bb.height }
					if (isValidBox(box, vw, vh)) return { present: true, confidence: 0.85 }
				}
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
			const vw = (videoEl as any).videoWidth || videoEl.width || 0
			const vh = (videoEl as any).videoHeight || videoEl.height || 0
			for (const p of preds) {
				const [x, y] = p.topLeft
				const [x2, y2] = p.bottomRight
				const box = { x, y, width: x2 - x, height: y2 - y }
				if (isValidBox(box, vw, vh)) {
					const prob = p.probability ? p.probability[0] : 0.75
					return { present: true, confidence: Math.max(0.6, Math.min(1, prob)) }
				}
			}
		}
	} catch (_) {}
	return { present: false, confidence: 0 }
}

