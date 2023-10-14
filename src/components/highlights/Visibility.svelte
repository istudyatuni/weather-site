<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let meters

	$: is_km = (meters ?? 0) >= 1000
	$: km = is_km ? 'km' : 'm'
	$: value = is_km ? meters / 1000 : meters
</script>

<BaseHighlight title={$_('highlights.visibility')}>
	<svelte:fragment slot="value">
		{value ?? '-.-'} <span>{$_(`highlights.measure.${km}`)}</span>
	</svelte:fragment>
</BaseHighlight>

<style>
	span {
		font-size: 0.4em;
	}
</style>
