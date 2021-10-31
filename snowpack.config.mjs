/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	alias: {
		src: './src',
	},
	mount: {
		public: '/',
		src: '/dist',
	},
	plugins: ['@snowpack/plugin-svelte'],
	routes: [
		/* Enable an SPA Fallback in development: */
		{ match: 'routes', src: '.*', dest: '/index.html' },
	],
	optimize: {
		// bundle: true,
		minify: true,
		sourcemap: false,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		open: 'none',
	},
	buildOptions: {
		htmlFragments: true,
		baseUrl: '/weather-site',
		// because gh-pages cannot serve _snowpack
		metaUrlPath: 'snowpack',
	},
}
