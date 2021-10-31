<script context="module">
	import Highlights from 'src/components/Highlights'

	import { weather } from 'src/stores/weather'

	const defaultData = {
		name: 'city',
	}
</script>

<script>
	$: data = $weather?.current?.content || defaultData
</script>

<div class="grid-item">
	<div class="inline">
		<h4 class="city">{data.name}</h4>
		<a href="https://github.com/istudyatuni/weather-site">
			<img src="icons/github.svg" alt="github" width="40px" />
		</a>
	</div>
	<Highlights />
</div>

<style>
	.grid-item {
		padding: 1.5em;
		background-color: hsl(0, 0%, 95%);
	}
	.city {
		margin-top: 0;
	}
	.inline {
		display: flex;
		justify-content: space-between;
	}
</style>
