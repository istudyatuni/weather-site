<script context="module">
	import { _ } from 'svelte-i18n'

	import GithubIcon from '~icons/tabler/brand-github'
	import MapIcon from '~icons/tabler/map'
	import SettingsIcon from '~icons/tabler/settings'

	import Tooltip from 'src/components/atoms/Tooltip.svelte'

	import { settings } from 'src/stores'

	import { formatMapLink } from 'src/utils/maps'
</script>

<script>
	// hack
	// it works, but have strange behaviour:
	//
	// <a href="/" /> will open <Route path="/settings" />
	// and vice versa
	let settingsNotOpened = true

	$: map_link = formatMapLink(
		$settings.maps_provider,
		$settings.current_city.lat,
		$settings.current_city.lon
	)
</script>

<div class="grid-item">
	<div class="inline">
		<div class="city">
			<h4 class="city-name">{$settings.current_city.name}</h4>
			<a class="map" href={map_link}>
				<Tooltip position="right" text={$_('header.maps.tooltip')}>
					<MapIcon width="20" height="20" />
				</Tooltip>
			</a>
		</div>

		<div class="inline">
			<a
				href={settingsNotOpened ? '/' : '/settings'}
				class="settings"
				alt="settings toggle"
				tabindex="0"
				on:click={() => (settingsNotOpened = !settingsNotOpened)}>
				<SettingsIcon width="30" height="30" />
			</a>

			<a
				href="https://github.com/istudyatuni/weather-site"
				alt="github"
				class="github"
				tabindex="0">
				<GithubIcon width="30" height="30" />
			</a>
		</div>
	</div>

	<slot />
</div>

<style>
	.grid-item {
		padding: 1.5em;
		background-color: var(--second-bg-color);
	}
	.city {
		display: flex;
		align-items: stretch;
	}
	.city-name {
		margin-top: 0;
	}
	.map {
		margin-left: 8px;
		color: var(--second-fg-color);
		cursor: pointer;
	}
	.inline {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.inline > a {
		margin: 0 0.4em;
	}
	.settings,
	.github {
		color: var(--second-fg-color);
	}
</style>
