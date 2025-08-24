// Simple microphone level meter using Web Audio API
// Provides RMS level 0..1 and cleanup

export type MicMeter = {
	getLevel: () => number
	dispose: () => Promise<void>
}

export function createMicMeter(stream: MediaStream): MicMeter {
	const AudioCtx: typeof AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext
	const ctx = new AudioCtx()
	const src = ctx.createMediaStreamSource(stream)
	const analyser = ctx.createAnalyser()
	analyser.fftSize = 2048
	analyser.smoothingTimeConstant = 0.85
	src.connect(analyser)

	const data = new Uint8Array(analyser.fftSize)

	function rms() {
		analyser.getByteTimeDomainData(data)
		let sum = 0
		for (let i = 0; i < data.length; i++) {
			const v = (data[i] - 128) / 128
			sum += v * v
		}
		return Math.sqrt(sum / data.length)
	}

	return {
		getLevel: () => rms(),
		dispose: async () => {
			try {
				src.disconnect()
			} catch {}
			try {
				analyser.disconnect()
			} catch {}
			try {
				await ctx.close()
			} catch {}
		},
	}
}

