import { get } from 'svelte/store'

export function migrateStore(store, initial) {
	let old = get(store)
	// version could be undefined
	if ((old.version ?? 0) === initial.version) {
		return
	}
	let res = {
		version: initial.version,
	}
	updateFields(res, initial, old)
	for (let [k, v] of Object.entries(res)) {
		store.set(k, v)
	}
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
