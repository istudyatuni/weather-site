<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let percentage
</script>

<BaseHighlight title={$_('highlights.humidity.title')} help={$_('highlights.humidity.help')}>
	<svelte:fragment slot="value">
		{percentage ?? '--'} <span class="measure">%</span>
	</svelte:fragment>
</BaseHighlight>
