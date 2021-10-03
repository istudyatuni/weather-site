<script context="module">
	import Highlights from 'src/components/Highlights'

	import { weather } from 'src/stores/weather'
</script>

<script>
	$: data = $weather.current.content
</script>

<div class="grid-item">
	<div>
		<h4 class="city">{data.name}</h4>
		<Highlights />
	</div>
</div>

<style type="text/css">
	.grid-item {
		display: grid;
		padding: 1.5em;
		background-color: hsl(0, 0%, 95%);
	}
	.city {
		margin-top: 0;
	}
</style>
