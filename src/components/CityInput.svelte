<script context="module">
	import { _ } from 'svelte-i18n'

	import { loadCityWeather } from 'src/api/weather'

	import { debug } from 'src/stores/debug'
	import { settings } from 'src/stores/settings'
</script>

<script>
	let city = ''
	function handleInput(e) {
		if (e.key !== 'Enter' || city === '') {
			return
		}

		if (city !== 'debug') {
			settings.set('current_city', city.trim())
			city = ''
			loadCityWeather(true)
		} else {
			debug.set(!$debug)
		}
	}
</script>

<input
	bind:value={city}
	on:keyup={handleInput}
	type="text"
	name="search"
	placeholder={$_('search_city')} />

<style>
	input {
		width: 100%;
		border: none;
		background-color: var(--second-bg-color);
		color: var(--second-fg-color);
		border-radius: 1em;
		padding-left: 1em;
	}
</style>
