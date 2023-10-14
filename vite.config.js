import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'

import path from 'path'

const config = defineConfig({
	plugins: [svelte(), Icons({ compiler: 'svelte' })],
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
