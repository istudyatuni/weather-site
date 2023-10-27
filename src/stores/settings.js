import isMobile from 'is-mobile'
import { localStore } from 'svelte-storages'

import { migrateStore } from 'src/stores/migration'

function getDefaultMapsProvider() {
	return isMobile({ tablet: true }) ? 'google' : 'osm'
}

const initial = {
	version: 3,
	theme: 'system',
	locale: undefined,
	current_city: {
		lat: 51.50853,
		lon: -0.12574,
		name: 'London',
		country: 'United Kingdom',
	},
	// get client timezone
	tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
	/** @type {import('src/utils/types').OsmProvider} */
	// set to google on mobile to support opening links in mobile app
	maps_provider: getDefaultMapsProvider(),
}

const migrations = {
	2: (_, s) => {
		s.maps_provider = getDefaultMapsProvider()
	},
	3: (data, s) => {
		let [name, country] = data.current_city.name.split(', ')
		let current_city = data.current_city
		current_city.name = name
		current_city.country = country || ''
		s.set('current_city', current_city)
	},
}

/** Settings store */
export const settings = localStore('settings', initial)

/** Migrate settings */
export function migrateSettings() {
	migrateStore(settings, migrations, initial.version)
}
