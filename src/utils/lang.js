import { get } from 'svelte/store'
import { settings } from 'src/stores/settings'

export function getBrowserLanguage() {
	return get(settings).locale
}
