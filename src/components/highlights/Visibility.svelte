<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight'
</script>

<script>
	export let meters
</script>

<BaseHighlight title={$_('highlights.visibility')}>
	<svelte:fragment slot="value">
		{meters / 1000} <span>{$_('highlights.measure.km')}</span>
	</svelte:fragment>
</BaseHighlight>

<style>
	span {
		font-size: 0.4em;
	}
</style>
