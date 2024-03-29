import { weather } from 'src/stores'

import { api_logger, getLocale, level, logger } from 'src/utils'

const BASE = 'https://geocoding-api.open-meteo.com/v1/search'
const defaultSearchCount = 5

export async function searchByCityName(name, count = defaultSearchCount) {
	const params = new URLSearchParams()
	params.set('count', count)
	params.set('language', getLocale())
	params.set('name', name)

	logger(level.info, 'fetching geocoding api')
	const response = await fetch(BASE + '?' + params.toString())
	api_logger(response.url)
	const content = await response.json()

	if (response.ok) {
		if (content.results !== undefined) {
			weather.set('geocoding', mapGeocodingResponse(content.results))
		}
	} else {
		if (content.error === true) {
			logger(level.error, 'error quering geocoding api:', content.reason)
		}
		logger(level.error, 'error quering geocoding api')
	}
}

/**
 * @param  {Array} list
 * @return {Array}
 */
function mapGeocodingResponse(list) {
	return list.map((e) => {
		let res = {
			id: e.id,
			// display full name, used in search result's dropdown
			name: [e.name, e.country].filter((v) => (v ?? '') !== '').join(', '),
			details: {
				name: e.name,
				country: e.country,
			},
			lat: e.latitude,
			lon: e.longitude,
		}
		if (e.admin1 !== undefined && e.admin1 !== e.name) {
			res.admin = e.admin1
		}
		return res
	})
}
