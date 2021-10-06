<script context="module">
	import { getWindDirection } from 'src/utils/wind'
</script>

<script>
	export let speed, deg
</script>

<div class="highlight-wrapper">
	<p class="highlight-title">Wind Status</p>
	<div class="inline">
		<p class="highlight-value">{speed} <span>m/s</span></p>
		<p class="m-auto">
			<img
				src="icons/arrow_compass.svg"
				class="m-auto rotate"
				style="--wind-dir: {deg}deg"
				alt=""
				width="30"
				height="30"
			/>
			<span class="wind-dir">{getWindDirection(deg)}</span>
		</p>
	</div>
</div>

<style>
	.inline {
		display: flex;
	}
	.m-auto {
		margin: auto;
	}
	.wind-dir {
		font-size: 1.4em;
		margin-left: 6px;
	}
	.rotate {
		transform: rotate(var(--wind-dir));
	}
</style>
