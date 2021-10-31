<script context="module">
	import BaseHighlight from 'src/components/highlights/BaseHighlight'
</script>

<script>
	export let percentage
</script>

<BaseHighlight title="Humidity">
	<svelte:fragment slot="value">{percentage} <span>%</span></svelte:fragment>
</BaseHighlight>

<style>
	span {
		font-size: 0.4em;
	}
</style>
