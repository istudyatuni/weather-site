<script context="module">
	import { Route } from 'tinro'

	import Highlights from 'src/components/Highlights'
	import Settings from 'src/components/Settings'

	import { default as SettingsIcon } from 'src/components/icons/Settings'
	import { default as GithubIcon } from 'src/components/icons/Github'

	import { weather } from 'src/stores/weather'

	const defaultData = {
		name: 'city',
	}

	const settingsToggleRoutes = [
		{
			from: '/',
			to: '/settings',
		},
		{
			from: '/settings',
			to: '/',
		},
	]
</script>

<script>
	$: data = $weather?.current?.content || defaultData
</script>

<div class="grid-item">
	<div class="inline">
		<h4 class="city">{data.name}</h4>

		<div class="inline">
			{#each settingsToggleRoutes as { from, to }}
				<Route path={to}>
					<a href={from} class="settings" alt="settings toggle">
						<SettingsIcon />
					</a>
				</Route>
			{/each}

			<a
				href="https://github.com/istudyatuni/weather-site"
				alt="github"
				class="github">
				<GithubIcon />
			</a>
		</div>
	</div>

	<Route path="/" fallback><Highlights /></Route>
	<Route path="/settings"><Settings /></Route>
</div>

<style>
	.grid-item {
		padding: 1.5em;
		background-color: var(--second-bg-color);
	}
	.city {
		margin-top: 0;
	}
	.inline {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.inline > a {
		margin: 0 0.4em;
	}
	.settings {
		color: var(--second-fg-color);
	}
</style>
