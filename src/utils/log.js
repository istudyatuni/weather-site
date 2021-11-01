import { get } from 'svelte/store'
import { debug, log } from 'src/stores/debug'

export function logger(message) {
	if (get(debug)) {
		log.update((logs) => [...logs, message])
	}
}
