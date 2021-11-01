import { storageKeyValueStore } from 'src/stores/storageKeyValueStore'

/**
 * Settings store
 * Keys:
 *   - current_city
 *   - locale
 *   - debug
 */
export const settings = storageKeyValueStore('settings', localStorage)
