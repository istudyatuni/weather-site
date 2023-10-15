import { get } from 'svelte/store'
import { debug, log, settings } from 'src/stores'

/** @type {[import("src/utils/types").GeoDirection]} */
const geo_directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']

/**
 * Convert deg to geo direction
 * @param  {Number} deg
 * @return {import("src/utils/types").GeoDirection}
 */
export function getGeoDirection(deg) {
	return geo_directions[Math.round(deg / 45) % 8]
}

export function getWeekday() {
	let current = new Date()
	let today = current.toLocaleDateString(getLocale(), {
		weekday: 'long',
	})
	return today
}

export function getLocale() {
	return get(settings).locale
}

export function logger(message) {
	if (get(debug)) {
		log.update((logs) => [...logs, message])
	}
}
