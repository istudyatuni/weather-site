import { writable } from 'svelte/store'

import { sessionStore } from 'svelte-storages'

export const debug = writable(false)
export const isApiLoading = writable(false)
export const log = writable([])
export const time = writable('')
export const weather = sessionStore('weather')

export { settings } from 'src/stores/settings'
