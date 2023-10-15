<script context="module">
	import { _ } from 'svelte-i18n'

	import { localesNames } from 'src/i18n/locales'

	import Select from 'src/components/inputs/Select.svelte'

	import { settings } from 'src/stores'

	import { maps_providers } from 'src/utils/maps'
</script>

<script>
	let reloadRequired = false

	let themeSelectValues = ['light', 'dark', 'system'].map((e) => ({
		value: e,
		name: $_('settings.theme.' + e),
	}))
	let localesSelectValues = Object.entries(localesNames).map((e) => ({
		value: e[0],
		name: e[1],
	}))
	let mapProvicersSelectValues = Object.values(maps_providers).map((e) => ({
		name: e.name,
		value: e.key,
	}))
</script>

<h3>{$_('settings.title')}</h3>

{#if reloadRequired}
	<div class="reload-required">
		{$_('settings.reload_required', { locale: $settings.locale })}
	</div>
{/if}

<div>
	<Select
		title={$_('settings.theme.title')}
		options={themeSelectValues}
		bind:value={$settings.theme} />
</div>

<div>
	<Select
		title={$_('settings.language.title')}
		options={localesSelectValues}
		bind:value={$settings.locale}
		on:change={() => (reloadRequired = true)} />
</div>

<div>
	<Select
		title={$_('settings.maps.title')}
		options={mapProvicersSelectValues}
		bind:value={$settings.maps_provider} />
</div>

<style>
	.reload-required {
		color: var(--second-fg-color);
		font-style: italic;
		margin-bottom: 0.7em;
	}
</style>
