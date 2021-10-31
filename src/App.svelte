<script context="module">
	import { isLoading } from 'svelte-i18n'

	import { loadCityWeather } from 'src/api/weather'

	import Current from 'src/components/Current'
	import Info from 'src/components/Info'
	import LoadingHeader from 'src/components/LoadingHeader'

	import 'src/i18n/i18n'

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
	}

	startTimer()
	init()
</script>

<LoadingHeader />
{#if !$isLoading}
	<main>
		<Current />
		<Info />
	</main>
{/if}

<style>
	@media screen and (max-width: 980px) {
	}
	@media screen and (min-width: 980px) {
		main {
			display: grid;
			grid-template-columns: 20em auto;
		}
	}
</style>
