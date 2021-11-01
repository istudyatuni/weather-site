import { get } from 'svelte/store'
import { owm_key } from 'src/stores/owm'
import { settings } from 'src/stores/settings'
import { weather } from 'src/stores/weather'

import { getBrowserLanguage } from 'src/utils/lang'
import { logger } from 'src/utils/log'

const refreshMinutes = 20
const defaultCity = 'moscow'

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

export async function loadCityWeather(force = false) {
	const current = new Date()

	if (!force && get(weather)?.current?.until > current.getTime()) {
		return
	}

	const params = new URLSearchParams()
	params.set('q', get(settings).current_city || defaultCity)
	params.set('appid', get(owm_key))
	// slice for convert 'ru-RU' -> 'ru'
	params.set('lang', getBrowserLanguage().slice(0, 2))

	const response = await fetch(
		'https://api.openweathermap.org/data/2.5/weather?' + params.toString()
	)
	logger(response.url)
	const content = await response.json()

	if (response.ok) {
		current.setMinutes(current.getMinutes() + refreshMinutes)
		weather.set('current', {
			content,
			until: current.getTime(),
		})
	} else {
		alert(content.message)

		if (content.message === 'city not found') {
			settings.delete('current_city')
		}
	}
}
