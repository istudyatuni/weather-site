<script context="module">
	import { onMount } from 'svelte'
</script>

<script>
	export let speed, deg

	let rotate

	onMount(() => (rotate.style.transform = `rotate(${deg}deg)`))
</script>

<div class="highlight-wrapper">
	<p class="highlight-title">Wind Status</p>
	<p class="highlight-value">{speed} <span>m/s</span></p>
	<img
		bind:this={rotate}
		src="icons/arrow_compass.svg"
		alt=""
		width="30"
		height="30"
	/>
</div>
