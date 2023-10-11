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
})
