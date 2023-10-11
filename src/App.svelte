<script context="module">
	import { isLoading } from 'svelte-i18n'
	import { router } from 'tinro'

	import { loadCityWeather } from 'src/api/weather'
	import { count } from 'src/api/visit-counter'

	import Current from 'src/components/Current'
	import Debug from 'src/components/Debug'
	import Info from 'src/components/Info'
	import LoadingHeader from 'src/components/LoadingHeader'

	import 'src/i18n/i18n'

	import { debug } from 'src/stores/debug'
	import { settings } from 'src/stores/settings'
	import { isApiLoading } from 'src/stores/loading'

	import { startTimer } from 'src/utils/time'
	import { initKey } from 'src/utils/owm'
</script>

<script>
	async function init() {
		isApiLoading.set(true)
		await initKey()
		await loadCityWeather()
		isApiLoading.set(false)
		setTimeout(count, 2000)
	}

	router.mode.memory()

	startTimer()
	init()
</script>

<LoadingHeader />
{#if !$isLoading}
	<main class:dark={$settings.theme === 'dark'}>
		<Current />
		{#if $debug}
			<Debug />
		{:else}
			<Info />
		{/if}
	</main>
{/if}

<style>
	@media screen and (max-width: 980px) {
	}
	@media screen and (min-width: 980px) {
		main {
			display: grid;
			grid-template-columns: 20em auto;
			height: 100%;
		}
	}

	main {
		background-color: var(--main-bg-color);
		color: var(--main-fg-color);
	}

	/* Palette: https://colorhunt.co/palette/35394126282b5f85db90b8f8 */
	main {
		--main-bg-color: white;
		--second-bg-color: hsl(0, 0%, 95%);
		--main-fg-color: black;
		--second-fg-color: gray;
	}
	main:global(.dark) {
		--main-bg-color: #26282b;
		--second-bg-color: #353941;
		--main-fg-color: #90b8f8;
		--second-fg-color: darkgray;
	}
</style>
