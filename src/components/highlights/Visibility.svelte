<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let meters
	let value,
		km = 'k'

	$: if (meters < 1000) {
		value = meters
		km = ''
	} else if (meters >= 1000) {
		value = meters / 1000
	} else {
		/* meters is undefined */
	}
</script>

<BaseHighlight title={$_('highlights.visibility')}>
	<svelte:fragment slot="value">
		{value ?? '-.-'} <span>{$_(`highlights.measure.${km}m`)}</span>
	</svelte:fragment>
</BaseHighlight>

<style>
	span {
		font-size: 0.4em;
	}
</style>
