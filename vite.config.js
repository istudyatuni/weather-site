import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'path'

/**
 * @type {import('vite').UserConfig}
 */
const config = defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
	esbuild: {
		include: ['js', 'svelte'],
	},
	clearScreen: false,
	server: {
		port: 8080,
	},
	build: {
		sourcemap: true,
		minify: true,
		outDir: 'build',
	},
	base: '/weather-site/',
	optimizeDeps: {
		exclude: ['tinro'],
	},
})

export default config
