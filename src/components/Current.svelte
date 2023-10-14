<script context="module">
	import { _ } from 'svelte-i18n'

	import CityInput from 'src/components/inputs/CityInput.svelte'

	import { time, weather } from 'src/stores'

	import { getIcon } from 'src/utils/icons'
	import { getWeekday } from 'src/utils/dates'

	const defaultData = { weather: { icon: '01d', weathercode: 1 } }
</script>

<script>
	$: data = $weather?.current?.content || defaultData
	$: description = $_(`weather.wmo_description.${data.weather.weathercode}`)
	$: image = `https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`
</script>

<div class="container">
	<CityInput />
	<div class="line">
		<img class="big-icon" src={getIcon(data.weather.icon)} alt="" />
		<div style="margin: auto;">
			<p class="temperature">
				{data?.main?.temp ?? '-.-'}
				<span class="measure">&deg;C</span>
			</p>
			<p class="title-case">
				{getWeekday()}<span class="time">, {$time}</span>
			</p>
		</div>
	</div>
	<hr class="separator" noshade size="1" width="100%" />
	<div class="description">
		<img src={image} width="60" height="60" alt={description} />
		<p class="title-case">{description}</p>
	</div>
</div>

<style lang="scss">
	@media screen and (max-width: $layout-breakpoint) {
		.big-icon {
			min-width: 120px;
			width: 20%;
		}
		.line {
			display: flex;
		}
	}
	@media screen and (min-width: $layout-breakpoint) {
		.big-icon {
			width: 100%;
		}
	}
	.container {
		padding: 1.5em;
	}
	.description {
		display: flex;
		align-items: center;
	}
	.temperature {
		font-size: 3em;
		margin: 0;
	}
	.measure {
		font-size: 0.6em;
		position: absolute;
		margin: 8px 5px;
		color: var(--second-fg-color);
	}
	.title-case::first-letter {
		text-transform: uppercase;
	}
	.time {
		color: var(--second-fg-color);
	}
	.separator {
		color: var(--second-bg-color);
	}
</style>
