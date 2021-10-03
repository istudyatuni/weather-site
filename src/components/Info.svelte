<script context="module">
	import { weather } from 'src/stores/weather'
</script>

<script>
	$: data = $weather.current.content
</script>

<div class="grid-item">
	<h4 class="city">{data.name}</h4>
</div>

<style type="text/css">
	.grid-item {
		display: grid;
		padding: 1.5em;
	}
	.city {
		margin-top: 0;
	}
</style>
