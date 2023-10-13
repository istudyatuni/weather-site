<script context="module">
	import { default as SettingsIcon } from 'src/components/icons/Settings.svelte'
	import { default as GithubIcon } from 'src/components/icons/Github.svelte'

	import { weather } from 'src/stores/weather'

	const defaultData = {
		name: 'city',
	}
</script>

<script>
	$: data = $weather?.current?.content || defaultData

	// hack
	// it works, but have strange behaviour:
	//
	// <a href="/" /> will open <Route path="/settings" />
	// and vice versa
	let settingsNotOpened = true
</script>

<div class="grid-item">
	<div class="inline">
		<h4 class="city">{data.name}</h4>

		<div class="inline">
			<a
				href={settingsNotOpened ? '/' : '/settings'}
				class="settings"
				alt="settings toggle"
				on:click={() => (settingsNotOpened = !settingsNotOpened)}>
				<SettingsIcon />
			</a>

			<a
				href="https://github.com/istudyatuni/weather-site"
				alt="github"
				class="github">
				<GithubIcon />
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
