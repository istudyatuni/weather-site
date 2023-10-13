import { get } from 'svelte/store'

import { localStore } from 'svelte-storages'

const initial = {
	version: 1,
	theme: 'system',
	locale: undefined,
	current_city: {
		lat: 51.50853,
		lon: -0.12574,
		name: 'London, United Kingdom',
		tz: 'Europe/London',
	},
}

/**
 * Settings store
 *
 * Keys:
 *
 *   - `current_city`
 *   - `locale`
 *   - `theme`: one of 'light', 'dark', 'system'
 */
export const settings = localStore('settings', initial)

/** Migrate settings */
export function migrateSettings() {
	let old = get(settings)
	// version could be undefined
	if ((old.version ?? 0) === initial.version) {
		return
	}
	let res = {
		version: initial.version,
	}
	/** Recursively update obj fields */
	function updateFields(obj, ini, old) {
		for (let [k, v] of Object.entries(ini)) {
			if (typeof v === 'undefined') {
				// new value not defined
			} else if (typeof old[k] === 'undefined') {
				// value in old not defined
				obj[k] = v
			} else if (typeof v === 'object') {
				if (v !== null) {
					// value is complex object
					obj[k] = {}
					updateFields(obj[k], v, old[k])
				}
			} else if (typeof v !== typeof obj[k]) {
				// new type of setting, we want to replace it
				obj[k] = v
			}
		}
	}
	updateFields(res, initial, old)
	for (let [k, v] of Object.entries(res)) {
		settings.set(k, v)
	}
}
