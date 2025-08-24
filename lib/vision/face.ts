// Face detection helper: native FaceDetector first, then BlazeFace fallback
// Minimal surface to report presence + confidence

let blazeModel: any | null = null

async function loadBlazeFace() {
  if (blazeModel) return blazeModel
  // Lazy import to keep initial bundle small
  const blazeface = await import('@tensorflow-models/blazeface')
  const tf = await import('@tensorflow/tfjs')
  // Ensure TF backend is ready
  if ((tf as any).getBackend && (tf as any).getBackend() === 'cpu') {
    // OK; webgl will be chosen automatically when available
  }
  blazeModel = await blazeface.load()
  return blazeModel
}

export async function detectFace(videoEl: HTMLVideoElement): Promise<{ present: boolean; confidence: number }>
{
  // 1) Native API
  if ('FaceDetector' in window) {
    try {
      const fd = new (window as any).FaceDetector({ fastMode: true, maxDetectedFaces: 1 })
      const faces = await fd.detect(videoEl)
      if (faces && faces.length > 0) {
        // Native API does not expose confidence; assume medium-high when present
        return { present: true, confidence: 0.8 }
      }
      return { present: false, confidence: 0 }
    } catch (e) {
      // fall through to TF
    }
  }

  // 2) BlazeFace fallback
  try {
    const model = await loadBlazeFace()
    const preds = await model.estimateFaces(videoEl, false)
    if (preds && preds.length > 0) {
      const prob = preds[0].probability ? preds[0].probability[0] : 0.7
      return { present: true, confidence: Math.max(0.5, Math.min(1, prob)) }
    }
  } catch (e) {
    // ignore
  }
  return { present: false, confidence: 0 }
}
