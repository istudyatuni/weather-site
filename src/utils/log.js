import { get } from 'svelte/store'
import { debug, log } from 'src/stores/debug'

export function logger(message) {
	if (get(debug)) {
		log.set([...get(log), message])
	}
}
