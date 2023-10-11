<script context="module">
	import { _ } from 'svelte-i18n'

	import Select from 'src/components/inputs/Select.svelte'

	import { settings } from 'src/stores/settings'
</script>

<script>
	$: default_theme = $settings.theme

	let themeSelectValues = ['light', 'dark', 'system'].map((e) => ({
		value: e,
		name: $_('settings.theme.' + e),
	}))

	/**
	 * @param  {InputEvent} e [description]
	 */
	function themeSelectHandler(e) {
		settings.set('theme', e.target.value)
	}
</script>

<h3>{$_('settings.title')}</h3>

<div>
	<Select
		title={$_('settings.theme.title')}
		options={themeSelectValues}
		on:input={themeSelectHandler}
		default_value={default_theme} />
</div>
