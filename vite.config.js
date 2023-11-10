import path from 'path'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import Icons from 'unplugin-icons/vite'

import * as postcss from './postcss.config.js'

const BASE = '/weather-site/'

/** @type {import('vite-plugin-pwa').ManifestOptions} */
const PWA_MANIFEST = {
	name: 'Weather',
	short_name: 'Weather',
	background_color: '#26282b',
	icons: [
		{
			src: 'icons/pwa.svg',
			type: 'image/svg+xml',
			sizes: '150x150',
		},
	],
}

const config = defineConfig({
	plugins: [
		svelte(),
		Icons({ compiler: 'svelte' }),
		splitVendorChunkPlugin(),
		VitePWA({
			registerType: 'autoUpdate',
			base: BASE,
			devOptions: {
				enabled: true,
				resolveTempFolder: () => path.resolve(__dirname, './build'),
			},
			manifest: PWA_MANIFEST,
			manifestFilename: 'manifest.json',
			workbox: {
				globPatterns: [
					// default
					'**/*.{js,css,html}',
					'**/locales/*.json',
					'**/icons/weather-icons/32/*.svg',
				],
			},
		}),
	],
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
	base: BASE,
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
