import { get } from 'svelte/store'
import { debug, api_log, log, settings } from 'src/stores'
import { is_string } from 'src/utils/check'

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

export function api_logger(message) {
	if (get(debug)) {
		api_log.update((logs) => [...logs, message])
	}
}

export function logger(level, ...message) {
	if (get(debug)) {
		log.update((logs) => [
			...logs,
			{
				[level]: message
					.map((e) => (is_string(e) ? e : JSON.stringify(e)))
					.join(' '),
			},
		])
	}
}

export const level = {
	info: 'info',
	error: 'error',
}
