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
	<div>
		<input type="text" name="search" placeholder="Search for places ..." />
		<img src={getIcon(data.weather[0].icon)} width="300" height="300" alt="" />
		<p class="temperature">
			{Math.round((data.main.temp - 273.16) * 10) / 10}&deg;<span>C</span>
		</p>
		<p class="title-case">
			{getWeekday()}, <span class="time">{$time}</span>
		</p>
		<hr color="lightgray" noshade size="1" width="100%" />
		<div class="description">
			<img
				src={image}
				width="60"
				height="60"
				alt={data.weather[0].description}
			/>
			<p class="title-case">{data.weather[0].description}</p>
		</div>
	</div>
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
	}
	.title-case::first-letter {
		text-transform: uppercase;
	}
	.time {
		color: gray;
	}
</style>
