import path from 'path'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'

import * as postcss from './postcss.config.js'

const config = defineConfig({
	plugins: [svelte(), Icons({ compiler: 'svelte' }), splitVendorChunkPlugin()],
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
	envDir: '.env',
	base: '/weather-site/',
	optimizeDeps: {
		exclude: ['tinro'],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;',
			},
		},
		postcss,
		devSourcemap: true,
	},
})

export default config
