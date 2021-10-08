<script context="module">
	import { loadCityWeather } from 'src/api/weather'

	import { settings } from 'src/stores/settings'
</script>

<script>
	let city = ''
	function handleInput() {
		settings.set('current_city', city)
		city = ''
		loadCityWeather(true)
	}
</script>

<input
	bind:value={city}
	on:change={handleInput}
	type="text"
	name="search"
	placeholder="Search for places ..."
/>

<style>
	input {
		width: 70%;
		border: none;
	}
</style>
