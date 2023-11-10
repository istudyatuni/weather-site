<script context="module">
	import { _ } from 'svelte-i18n'

	import { loadCityWeather } from 'src/api/weather'
	import { searchByCityName } from 'src/api/geocoding'

	import CityInputInfo from 'src/components/inputs/CityInputInfo.svelte'

	import { cache, debug, settings, weather } from 'src/stores'
	import { is_array } from 'src/utils/check'

	const maxListItems = 5
</script>

<script>
	let city_name = '',
		showCitiesResult = false,
		showRecentSearches = false

	$: recentSearches = $cache.searches.filter(({ name }) =>
		name.startsWith(city_name)
	)

	/** @type {HTMLInputElement} */
	let inputElement = null

	function focusInput() {
		inputElement.focus()
	}

	async function startSearch() {
		weather.set('geocoding', {})
		await searchByCityName(city_name.trim())
		showCitiesResult = true
	}

	function handleInput(e) {
		// fallback on screen (mobile) keyboard
		let key = e.code === '' ? e.key : e.code

		if (key !== 'Enter' || city_name.trim() === '') {
			return
		}

		if (city_name === 'debug') {
			debug.set(!$debug)
			return
		}

		startSearch()
	}

	function handleCitySelect(e) {
		let {
			lat,
			lon,
			details: { name, country },
		} = e.detail
		settings.set('current_city', { lat, lon, name, country })
		loadCityWeather(true)
		hideDropdown()
		add_search(city_name)
		city_name = ''
	}

	function handleRecentSearchSelect(e) {
		city_name = e.detail.name
		focusInput()
		hideDropdown()
		startSearch()
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
	bind:this={inputElement}
	bind:value={city_name}
	on:keyup={handleInput}
	on:click={() => (showRecentSearches = true)}
	on:focusin={() => (showRecentSearches = true)}
	on:input={() => (showCitiesResult = false)}
	type="text"
	name="search"
	placeholder={$_('search_city.placeholder')} />

{#if showCitiesResult}
	{#if is_array($weather.geocoding)}
		<div class="cities-list">
			{#each $weather.geocoding as city, i (i)}
				<CityInputInfo {city} on:select={handleCitySelect} />
			{/each}
		</div>
	{:else}
		<div class="no-cities-found">{$_('search_city.no_cities_found')}</div>
	{/if}
{/if}

{#if showRecentSearches && !showCitiesResult && is_array($cache.searches)}
	<div class="cities-list">
		{#each recentSearches.slice(0, maxListItems) as city, i (i)}
			<CityInputInfo
				{city}
				on:select={handleRecentSearchSelect}
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
