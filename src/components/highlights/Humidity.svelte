<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let percentage
</script>

<BaseHighlight title={$_('highlights.humidity')}>
	<svelte:fragment slot="value">
		{percentage ?? '--'} <span>%</span>
	</svelte:fragment>
</BaseHighlight>

<style>
	span {
		font-size: 0.4em;
	}
</style>
