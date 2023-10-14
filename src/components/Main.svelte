<script context="module">
	import GithubIcon from '~icons/tabler/brand-github'
	import SettingsIcon from '~icons/tabler/settings'

	import { settings } from 'src/stores'
</script>

<script>
	// hack
	// it works, but have strange behaviour:
	//
	// <a href="/" /> will open <Route path="/settings" />
	// and vice versa
	let settingsNotOpened = true
</script>

<div class="grid-item">
	<div class="inline">
		<h4 class="city">{$settings.current_city.name}</h4>

		<div class="inline">
			<a
				href={settingsNotOpened ? '/' : '/settings'}
				class="settings"
				alt="settings toggle"
				on:click={() => (settingsNotOpened = !settingsNotOpened)}>
				<SettingsIcon width="30" height="30" />
			</a>

			<a
				href="https://github.com/istudyatuni/weather-site"
				alt="github"
				class="github">
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
	.settings,
	.github {
		color: var(--second-fg-color);
	}
</style>
