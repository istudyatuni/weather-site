import { storageKeyValueStore } from 'src/stores/storageKeyValueStore'

export const settings = storageKeyValueStore('settings', localStorage)
