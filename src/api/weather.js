import { get } from 'svelte/store'
import { settings, weather } from 'src/stores'

import { logger } from 'src/utils/log'
import { getIconIdByWmo } from '../utils/icons'

const BASE = 'https://api.open-meteo.com/v1/forecast'
const refreshMinutes = 20

const query = {
	// fields
	current: [
		'temperature_2m',
		'relativehumidity_2m',
		'is_day',
		'weathercode',
		'windspeed_10m',
		'winddirection_10m',
	],
	hourly: ['visibility'],
	daily: ['sunrise', 'sunset', 'uv_index_max'],

	// units
	windspeed_unit: 'ms',

	// config
	forecast_days: 1,
}

export async function loadCityWeather(force = false) {
	const current = new Date()

	if (!force && get(weather)?.current?.until > current.getTime()) {
		return
	}

	const s = get(settings)

	const params = new URLSearchParams()
	params.set('latitude', s.current_city.lat)
	params.set('longitude', s.current_city.lon)
	params.set('timezone', s.tz)
	for (let [k, v] of Object.entries(query)) {
		params.set(k, v)
	}

	const response = await fetch(BASE + '?' + params.toString())
	logger(response.url)
	const content = await response.json()

	if (response.ok) {
		current.setMinutes(current.getMinutes() + refreshMinutes)
		weather.set('current', {
			content: mapForecastResponse(content),
			until: current.getTime(),
		})
	} else {
		alert(content.message)

		if (content.message === 'city not found') {
			settings.delete('current_city')
		}
	}
}

function mapForecastResponse(res) {
	// length of all hourly arrays always equals to 24
	// so use current hour to get index
	let nowHour = new Date().getHours()
	return {
		weather: {
			weathercode: res.current.weathercode,
			icon: getIconIdByWmo(res.current.weathercode, res.current.is_day),
		},
		main: {
			temp: res.current.temperature_2m,
			// feels_like: res.current.apparent_temperature,
			// temp_min
			// temp_max
			// pressure
			humidity: res.current.relativehumidity_2m,
		},
		visibility: res.hourly.visibility[nowHour],
		wind: {
			speed: res.current.windspeed_10m,
			deg: res.current.winddirection_10m,
		},
		sunrise: res.daily.sunrise[0],
		sunset: res.daily.sunset[0],
		uv_index: res.daily.uv_index_max[0],
	}
}
