<script context="module">
	import BaseHighlight from 'src/components/highlights/BaseHighlight'

	import { getTimeFromUnix } from 'src/utils/time'
</script>

<script>
	export let sunrise, sunset
</script>

<BaseHighlight title="Sunrise & Sunset">
	<svelte:fragment slot="content">
		<p class="time"><span>Sunrise:</span> {getTimeFromUnix(sunrise)}</p>
		<p class="time"><span>Sunset:</span> {getTimeFromUnix(sunset)}</p>
	</svelte:fragment>
</BaseHighlight>

<style>
	.time {
		font-size: 1.3em;
		padding-left: 0.5em;
		font-weight: 600;
		margin: 0.5em 0;
	}
	.time > span {
		color: hsl(0, 0%, 60%);
	}
</style>
