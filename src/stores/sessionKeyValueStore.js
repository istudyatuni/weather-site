import { writable } from 'svelte/store'

/**
 * Writable store based on sessionStorage
 * Example usage:
 * 	const store = localKeyValueStore('dates')
 * 	set: dates.set('key', value)
 * 	get: dates.key
 * @param  {String} name    Name for storing in sessionStorage
 * @param  {Object} initial Initial object
 * @return {[type]}         [description]
 */
export function sessionKeyValueStore(name, initial = {}) {
	const toString = (value) => JSON.stringify(value, null, 2)
	const toObject = JSON.parse

	if (sessionStorage.getItem(name) === null) {
		sessionStorage.setItem(name, toString(initial))
	}

	const saved = toObject(sessionStorage.getItem(name))

	const { subscribe, set, update } = writable(saved)

	return {
		subscribe,
		set: (key, value) =>
			update((data) => {
				data[key] = value
				sessionStorage.setItem(name, toString(data))
				return data
			}),
		delete: (key) =>
			update((data) => {
				delete data[key]
				sessionStorage.setItem(name, toString(data))
				return data
			}),
	}
}
