import { localStore } from 'svelte-storages'

/**
 * Settings store
 *
 * Keys:
 *
 *   - `current_city`
 *   - `locale`
 *   - `theme`: one of 'light', 'dark', 'system'
 */
export const settings = localStore('settings', {
	theme: 'system',
	current_city: {
		lat: 51.50853,
		lon: -0.12574,
		name: 'London, United Kingdom',
	},
})
