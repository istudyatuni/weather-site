import { storageKeyValueStore } from 'src/stores/storageKeyValueStore'

export const cities = storageKeyValueStore('cities', localStorage)
