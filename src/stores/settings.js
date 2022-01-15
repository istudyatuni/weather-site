import { localStore } from 'svelte-storages'

/**
 * Settings store
 *
 * Keys:
 *
 *   - `current_city`
 *   - `locale`
 */
export const settings = localStore('settings')
