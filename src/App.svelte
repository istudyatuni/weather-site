<script context="module">
	import { loadCityWeather } from 'src/api/weather'

	import Current from 'src/components/Current'
	import Info from 'src/components/Info'

	import { weather } from 'src/stores/weather'

	import { loadConfig } from 'src/utils/config'
	import { startTimer } from 'src/utils/time'
</script>

<script>
	async function init() {
		await loadConfig()
		await loadCityWeather('ivanovo')
	}

	startTimer()
	const initial = init()
</script>

{#await initial}
	<center class="loading">Loading</center>
{:then}
	<main>
		<Current />
		<Info />
	</main>
{/await}

<style type="text/css">
	main {
		display: grid;
		grid-template-columns: 20em auto;
	}
	.loading {
		font-size: 2.5em;
	}
</style>
