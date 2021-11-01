import { storageKeyValueStore } from 'src/stores/storageKeyValueStore'

/**
 * Settings store
 * Keys:
 *   - current_city
 *   - locale
 */
export const settings = storageKeyValueStore('settings', localStorage)
