import { localStore } from 'svelte-storages'

import { migrateStore } from 'src/stores/migration'

const initial = {
	version: 2,
	theme: 'system',
	locale: undefined,
	current_city: {
		lat: 51.50853,
		lon: -0.12574,
		name: 'London, United Kingdom',
	},
	// get client timezone
	tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
	/** @type {import('src/utils/types').OsmProvider} */
	maps_provider: 'osm',
}

/** Settings store */
export const settings = localStore('settings', initial)

/** Migrate settings */
export function migrateSettings() {
	migrateStore(settings, initial)
}
