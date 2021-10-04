import { writable } from 'svelte/store'

/**
 * Writable store based on sessionStorage / localStorage
 * Example usage:
 * 	const store = localKeyValueStore('dates')
 * 	set: dates.set('key', value)
 * 	get: dates.key
 * @param  {String} name    Name for storing in storage
 * @param  {Object} storage Storage object (sessionStorage / localStorage)
 * @param  {Object} initial Initial object
 * @return {[type]}         [description]
 */
export function storageKeyValueStore(name, storage, initial = {}) {
	if (![localStorage, sessionStorage].includes(storage)) {
		throw 'Incorrect storage'
	}

	const toString = (value) => JSON.stringify(value, null, 2)
	const toObject = JSON.parse

	if (storage.getItem(name) === null) {
		storage.setItem(name, toString(initial))
	}

	const saved = toObject(storage.getItem(name))

	const { subscribe, set, update } = writable(saved)

	return {
		subscribe,
		set: (key, value) =>
			update((data) => {
				data[key] = value
				storage.setItem(name, toString(data))
				return data
			}),
		delete: (key) =>
			update((data) => {
				delete data[key]
				storage.setItem(name, toString(data))
				return data
			}),
	}
}
