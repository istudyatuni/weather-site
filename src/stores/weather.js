import { storageKeyValueStore } from 'src/stores/storageKeyValueStore'

export const weather = storageKeyValueStore('weather', sessionStorage)
