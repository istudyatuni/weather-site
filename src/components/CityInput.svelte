<script context="module">
	import { _ } from 'svelte-i18n'

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
	placeholder={$_('search_city')}
/>

<style>
	input {
		width: 70%;
		border: none;
		background-color: hsl(0, 0%, 95%);
		border-radius: 1em;
		padding-left: 1em;
	}
</style>
