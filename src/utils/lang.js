import { get } from 'svelte/store'
import { settings } from 'src/stores'

export function getBrowserLanguage() {
	return get(settings).locale
}
