<script context="module">
	import { isLoading } from 'svelte-i18n'
	import { Route, router } from 'tinro'

	import { loadCityWeather } from 'src/api/weather'
	import { count } from 'src/api/visit-counter'

	import Current from 'src/components/Current.svelte'
	import Debug from 'src/components/Debug.svelte'
	import Highlights from 'src/components/Highlights.svelte'
	import Main from 'src/components/Main.svelte'
	import Settings from 'src/components/Settings.svelte'

	import { init_i18n } from 'src/i18n/i18n'

	import { debug, settings, isApiLoading, migrateStores } from 'src/stores'

	import { startTimer } from 'src/utils/time'
</script>

<script>
	async function initApi() {
		isApiLoading.set(true)
		await loadCityWeather()
		isApiLoading.set(false)
		setTimeout(count, 2000)
	}

	function darkMedia() {
		return window?.matchMedia('(prefers-color-scheme: dark)')
	}

	let isPreferenceDark = darkMedia() && darkMedia().matches

	function initTheme() {
		darkMedia() &&
			darkMedia().addEventListener('change', (e) => {
				isPreferenceDark = e.matches
			})
	}

	router.mode.memory()
	router.base('/weather-site')

	startTimer()
	migrateStores()
	init_i18n()
	initApi()
	initTheme()

	$: isDarkTheme =
		$settings.theme === 'dark' ||
		($settings.theme === 'system' && isPreferenceDark)
	$: {
		if (isDarkTheme) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}
	$: {
		if ($debug) {
			router.goto('/debug')
		} else {
			router.goto('/')
		}
	}
</script>

{#if !$isLoading}
	<main>
		<Current />
		<Main>
			<Route>
				<Route path="/"><Highlights /></Route>
				<Route path="/settings"><Settings /></Route>
				<Route path="/debug"><Debug /></Route>
			</Route>
		</Main>
	</main>
{/if}

<style lang="scss">
	@media screen and (max-width: $layout-breakpoint) {
	}
	@media screen and (min-width: $layout-breakpoint) {
		main {
			display: grid;
			grid-template-columns: 20em auto;
			height: 100%;
		}
	}
</style>
