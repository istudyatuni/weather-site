import { get } from 'svelte/store'
import { log } from 'src/stores/log'
import { settings } from 'src/stores/settings'

export function logger(message) {
	if(get(settings).debug) {
		log.set([...get(log), message])
	}
}
