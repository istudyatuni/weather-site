<script context="module">
	import BaseHighlight from 'src/components/highlights/BaseHighlight'
</script>

<script>
	export let meters
</script>

<BaseHighlight title="Visibility">
	<svelte:fragment slot="value">{meters / 1000} <span>km</span></svelte:fragment>
</BaseHighlight>

<style>
	span {
		font-size: 0.4em;
	}
</style>
