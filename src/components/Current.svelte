<script context="module">
	import { time } from 'src/stores/time'
	import { weather } from 'src/stores/weather'

	import { getIcon } from 'src/utils/icons'
	import { getWeekday } from 'src/utils/dates'
</script>

<script>
	$: data = $weather.current.content
	$: image = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
</script>

<div class="grid-item">
	<input type="text" name="search" placeholder="Search for places ..." />
	<img src={getIcon()} width="300" height="300" alt="" />
	<p class="temperature">
		{Math.round(data.main.temp - 273.16)}&deg;<span>C</span>
	</p>
	<p class="title-case">
		{getWeekday()}, <span class="time">{$time}</span>
	</p>
	<hr color="lightgray" noshade size="1" width="100%" />
	<div class="description">
		<img src={image} width="60" height="60" alt={data.weather[0].description}>
		<p class="title-case">{data.weather[0].description}</p>
	</div>
	<!-- <h4>{data.name}</h4> -->
</div>

<style type="text/css">
	.grid-item {
		display: grid;
		padding: 1.5em;
	}
	input {
		width: 70%;
		border: none;
	}
	.description {
		display: flex;
		align-items: center;
	}
	.temperature {
		font-size: 3em;
		margin: 0;
	}
	.temperature > span {
		font-size: 0.6em;
		vertical-align: super;
	}
	.title-case::first-letter {
		text-transform: uppercase;
	}
	.time {
		color: gray;
	}
</style>
