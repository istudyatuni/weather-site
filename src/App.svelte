<script context="module">
	import { loadCityWeather } from 'src/api/weather'

	import Current from 'src/components/Current'
	import Info from 'src/components/Info'
	import Footer from 'src/components/Footer'

	import { startTimer } from 'src/utils/time'
	import { initKey } from 'src/utils/owm'
</script>

<script>
	async function init() {
		await initKey()
		await loadCityWeather()
	}

	startTimer()
	init()
</script>

<main>
	<Current />
	<Info />
</main>
<Footer />

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
