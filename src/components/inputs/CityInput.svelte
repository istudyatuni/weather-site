<script context="module">
	import { _ } from 'svelte-i18n'

	import { loadCityWeather } from 'src/api/weather'
	import { searchByCityName } from 'src/api/geocoding'

	import CityInputInfo from 'src/components/inputs/CityInputInfo.svelte'

	import { cache, debug, weather, settings } from 'src/stores'

	const countRecentSearches = 5
</script>

<script>
	let city_name = '',
		showCitiesResult = false,
		showRecentSearches = false

	async function handleInput(e) {
		if (e.key !== 'Enter' || city_name === '') {
			return
		}

		if (city_name === 'debug') {
			debug.set(!$debug)
			return
		}

		weather.set('geocoding', {})
		await searchByCityName(city_name.trim())
		showCitiesResult = true
	}

	function handleSelect(e) {
		let { lat, lon, name } = e.detail
		settings.set('current_city', { lat, lon, name })
		loadCityWeather(true)
		showCitiesResult = false
		add_search(city_name)
		city_name = ''
	}

	function add_search(name) {
		if ($cache.searches.find((s) => s.name === name) === undefined) {
			$cache.searches.unshift({ name })
			cache.set('searches', $cache.searches)
		}
	}

	function remove_search(name) {
		cache.set(
			'searches',
			$cache.searches.filter((s) => s.name !== name)
		)
	}

	function hideDropdown() {
		showCitiesResult = false
		showRecentSearches = false
	}
</script>

<input
	bind:value={city_name}
	on:keyup={handleInput}
	on:click={() => (showRecentSearches = true)}
	on:focusin={() => (showRecentSearches = true)}
	on:input={hideDropdown}
	type="text"
	name="search"
	placeholder={$_('search_city.placeholder')} />

{#if showCitiesResult}
	{#if Array.isArray($weather.geocoding)}
		<div class="cities-list">
			{#each $weather.geocoding as city, i (i)}
				<CityInputInfo {city} on:select={handleSelect} />
			{/each}
		</div>
	{:else}
		<div class="no-cities-found">{$_('search_city.no_cities_found')}</div>
	{/if}
{/if}

{#if showRecentSearches && !showCitiesResult && Array.isArray($cache.searches)}
	<div class="cities-list">
		{#each $cache.searches.slice(0, countRecentSearches) as city, i (i)}
			<CityInputInfo
				{city}
				on:select={(e) => (city_name = e.detail.name)}
				on:deletion={(e) => remove_search(e.detail.name)}
				allow_delete />
		{/each}
	</div>
{/if}

<style>
	input {
		width: 100%;
		border: none;
		background-color: var(--second-bg-color);
		color: var(--second-fg-color);
		border-radius: 1em;
		padding-left: 1em;
	}
	.cities-list {
		display: flex;
		flex-direction: column;
	}
	.no-cities-found {
		color: var(--second-fg-color);
	}
</style>
