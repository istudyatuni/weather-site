import { get } from 'svelte/store'

export function migrateStore(store, initial) {
	let old = get(store)
	// version could be undefined
	if ((old.version ?? 0) === initial.version) {
		return
	}
	let updated = {
		version: initial.version,
	}
	updateFields(initial, old, updated)
	for (let [k, v] of Object.entries(updated)) {
		store.set(k, v)
	}
}

/** Merge ini and old, put to acc */
export function updateFields(ini, old, acc) {
	let keys = new Set([...Object.keys(ini), ...Object.keys(old)])
	for (let k of keys) {
		let iniv = ini[k]
		let oldv = old[k]

		if (typeof iniv === 'undefined') {
			// new value not defined
			acc[k] = oldv
		} else if (typeof oldv === 'undefined') {
			// old value not defined
			acc[k] = iniv
		} else if (typeof iniv === 'object' && iniv !== null) {
			if (typeof oldv === 'object') {
				if (oldv !== null) {
					acc[k] = oldv
				} else {
					acc[k] = iniv
				}
			} else {
				// new value is complex object
				acc[k] = {}
				updateFields(iniv, old[k], acc[k])
			}
		} else if (typeof iniv !== typeof acc[k]) {
			// new type of value, we want to replace it
			acc[k] = iniv
		} else {
			acc[k] = oldv
		}
	}
}
