import { get } from 'svelte/store'
import { owm_key } from 'src/stores/owm'
import { weather } from 'src/stores/weather'

import { getBrowserLanguage } from 'src/utils/lang'

const refreshMinutes = 20

/**
 * While not used. Need for using One-call API
 * @param  {[type]} city [description]
 * @return {[type]}      [description]
 */
async function getCoords(city) {
	const params = new URLSearchParams()
	params.set('q', city)
	params.set('appid', get(owm_key))

	const response = await fetch(
		'https://api.openweathermap.org/geo/1.0/direct?' + params.toString()
	)
}

export async function loadCityWeather(city = 'moscow') {
	const current = new Date()

	if (get(weather)?.current?.until > current.getTime()) {
		return
	}

	const params = new URLSearchParams()
	params.set('q', city)
	params.set('appid', get(owm_key))
	params.set('lang', getBrowserLanguage())

	const response = await fetch(
		'https://api.openweathermap.org/data/2.5/weather?' + params.toString()
	)
	const content = await response.json()

	current.setMinutes(current.getMinutes() + refreshMinutes)
	weather.set('current', {
		content,
		until: current.getTime(),
		city,
	})
}
