<script context="module">
	import { _ } from 'svelte-i18n'

	import AirQuality from 'src/components/highlights/AirQuality.svelte'
	import Humidity from 'src/components/highlights/Humidity.svelte'
	import SunriseSunset from 'src/components/highlights/SunriseSunset.svelte'
	import UVIndex from 'src/components/highlights/UVIndex.svelte'
	import Visibility from 'src/components/highlights/Visibility.svelte'
	import WindStatus from 'src/components/highlights/WindStatus.svelte'

	import { weather } from 'src/stores'
</script>

<script>
	$: data = $weather?.current?.content || {}
</script>

<h3>{$_('highlights.title')}</h3>

<div class="grid">
	<WindStatus speed={data.wind?.speed} deg={data.wind?.deg} />
	<SunriseSunset sunrise={data?.sunrise} sunset={data?.sunset} />
	<Humidity percentage={data.main?.humidity} />
	<Visibility meters={data.visibility} />
	<UVIndex uv={data.uv_index} />
	<AirQuality />
</div>

<style lang="scss">
	@use 'sass:map';

	@media screen and (max-width: map.get($highlights-breakpoints, small)) {
		.grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
	@media screen and (max-width: map.get($highlights-breakpoints, big)) and (min-width: map.get($highlights-breakpoints, small)) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (min-width: map.get($highlights-breakpoints, big)) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.grid {
		display: grid;
		gap: 1em;
	}
</style>
