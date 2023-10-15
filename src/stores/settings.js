import { localStore } from 'svelte-storages'

import { migrateStore } from 'src/stores/migration'
import isMobile from 'is-mobile'

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
	// set to google on mobile to support opening links in mobile app
	maps_provider: isMobile({ tablet: true }) ? 'google' : 'osm',
}

/** Settings store */
export const settings = localStore('settings', initial)

/** Migrate settings */
export function migrateSettings() {
	migrateStore(settings, initial)
}
