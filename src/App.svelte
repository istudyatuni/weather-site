<script context="module">
	import { loadCityWeather } from 'src/api/weather'

	import Current from 'src/components/Current'
	import Info from 'src/components/Info'

	import { loadConfig } from 'src/utils/config'
	import { startTimer } from 'src/utils/time'
</script>

<script>
	async function init() {
		await loadConfig()
		await loadCityWeather('ivanovo')
	}

	startTimer()
	init()
</script>

<main>
	<Current />
	<Info />
</main>

<style>
	@media screen and (max-width: 980px) {}
	@media screen and (min-width: 980px) {
		main {
			display: grid;
			height: 100%;
			grid-template-columns: 20em auto;
		}
	}
</style>
