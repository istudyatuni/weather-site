<script context="module">
	import AirQuality from 'src/components/highlights/AirQuality'
	import Humidity from 'src/components/highlights/Humidity'
	import SunriseSunset from 'src/components/highlights/SunriseSunset'
	import UVIndex from 'src/components/highlights/UVIndex'
	import Visibility from 'src/components/highlights/Visibility'
	import WindStatus from 'src/components/highlights/WindStatus'

	import './highlights/common.css'

	import { weather } from 'src/stores/weather'
</script>

<script>
	$: data = $weather.current.content
</script>

<h3>Today's highlights</h3>

<div class="grid">
	<UVIndex />
	<WindStatus speed={data.wind.speed} deg={data.wind.deg} />
	<SunriseSunset sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
	<Humidity percentage={data.main.humidity} />
	<Visibility meters={data.visibility} />
	<AirQuality />
</div>

<style>
	@media screen and (max-width: 550px) {
		.grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
	@media screen and (max-width: 980px) and (min-width: 550px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (min-width: 980px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.grid {
		display: grid;
		gap: 1em;
	}
</style>
