<script context="module">
	import AirQuality from 'src/components/highlights/AirQuality'
	import Humidity from 'src/components/highlights/Humidity'
	import SunriseSunset from 'src/components/highlights/SunriseSunset'
	import UVIndex from 'src/components/highlights/UVIndex'
	import Visibility from 'src/components/highlights/Visibility'
	import WindStatus from 'src/components/highlights/WindStatus'

	import './highlights/common.css'
</script>

<h3>Today's highlights</h3>

<div class="grid">
	<UVIndex />
	<WindStatus />
	<SunriseSunset />
	<Humidity />
	<Visibility />
	<AirQuality />
</div>

<style>
	.grid {
		display: grid;
		gap: 2em;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
</style>
