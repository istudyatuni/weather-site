import { writable } from 'svelte/store'

import { localStore, sessionStore } from 'svelte-storages'

import { migrateCache } from 'src/stores/cache'
import { migrateSettings } from 'src/stores/settings'

export const debug = writable(false)
export const isApiLoading = writable(false)
export const log = writable([])
export const time = writable('')
export const weather = sessionStore('weather')
export const cache = localStore('cache', { version: 1, cities: [] })

export { settings } from 'src/stores/settings'

export function migrateStores() {
	migrateCache()
	migrateSettings()
}
