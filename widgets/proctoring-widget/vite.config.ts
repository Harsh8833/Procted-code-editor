import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: "src/index.ts",
			name: "ProctoringWidget",
			formats: ["es", "cjs", "iife"],
			fileName: (format) => `proctoring-widget.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: { react: "React", "react-dom": "ReactDOM" },
			},
		},
		target: "es2020",
	},
})

