<script context="module">
	import { getTimeFromUnix } from 'src/utils/time'
</script>

<script>
	export let sunrise, sunset
</script>

<div class="highlight-wrapper">
	<p class="highlight-title">Sunrise & Sunset</p>
	<p class="time"><span>Sunrise:</span> {getTimeFromUnix(sunrise)}</p>
	<p class="time"><span>Sunset:</span> {getTimeFromUnix(sunset)}</p>
</div>

<style>
	.time {
		font-size: 1.3em;
		padding-left: 0.5em;
		font-weight: 600;
	}
	.time > span {
		color: hsl(0, 0%, 60%);
	}
</style>
