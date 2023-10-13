import { get } from 'svelte/store'
import { owm_key, settings, weather } from 'src/stores'

import { logger } from 'src/utils/log'

const refreshMinutes = 20

export async function loadCityWeather(force = false) {
	const current = new Date()

	if (!force && get(weather)?.current?.until > current.getTime()) {
		return
	}

	const s = get(settings)

	const params = new URLSearchParams()
	params.set('appid', get(owm_key))
	params.set('lang', s.locale)
	params.set('lat', s.current_city.lat)
	params.set('lon', s.current_city.lon)

	const response = await fetch(
		'https://api.openweathermap.org/data/2.5/weather?' + params.toString()
	)
	logger(response.url)
	const content = await response.json()

	if (response.ok) {
		current.setMinutes(current.getMinutes() + refreshMinutes)
		// hack to use name from geocoding api
		content.name = s.current_city.name
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
