<script context="module">
	import { time } from 'src/stores/time'
	import { weather } from 'src/stores/weather'

	import { getIcon } from 'src/utils/icons'
	import { getWeekday } from 'src/utils/dates'

	const defaultData = {
		weather: [{ icon: '01d', description: '' }],
		main: { temp: NaN },
	}
</script>

<script>
	$: data = $weather?.current?.content || defaultData
	$: image = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
</script>

<div class="container">
	<input type="text" name="search" placeholder="Search for places ..." />
	<div class="line">
		<img class="big-icon" src={getIcon(data.weather[0].icon)} alt="" />
		<div style="margin: auto;">
			<p class="temperature">
				{Math.round((data.main.temp - 273.16) * 10) / 10}&deg;<span>C</span>
			</p>
			<p class="title-case">
				{getWeekday()}, <span class="time">{$time}</span>
			</p>
		</div>
	</div>
	<hr color="lightgray" noshade size="1" width="100%" />
	<div class="description">
		<img src={image} width="60" height="60" alt={data.weather[0].description} />
		<p class="title-case">{data.weather[0].description}</p>
	</div>
</div>

<style type="text/css">
	@media screen and (max-width: 980px) {
		.big-icon {
			min-width: 120px;
			width: 20%;
		}
		.line {
			display: flex;
		}
	}
	@media screen and (min-width: 980px) {
		.big-icon {
			width: 100%;
		}
	}
	.container {
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
