import { localStore } from 'svelte-storages'

import { migrateStore } from 'src/stores/migration'

const initial = {
	version: 1,
	// last cities searches
	searches: [],
}

/** Cache store */
export const cache = localStore('cache', initial)

/** Migrate cache */
export function migrateCache() {
	migrateStore(cache, initial)
}
