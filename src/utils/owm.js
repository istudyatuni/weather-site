import { owm_key } from 'src/stores/owm'

import { noCacheHeaders as headers } from 'src/utils/constants'

const storageIndex = 'owm_key'

async function fetchKey() {
	const response = await fetch('key.txt', { headers })
	const key = (await response.text()).trimEnd()

	if (response.ok && key.length === 32) {
		return key
	}

	return undefined
}

function askKey() {
	const key = prompt('No openweathermap key found. Please enter it')
	if (!key) {
		alert('The key is not entered. Reload the page to try again')
		return null
	}

	const save = confirm('Save for future?')
	if (save) {
		localStorage.setItem(storageIndex, key)
	}
	return key
}

export async function initKey() {
	let key = localStorage.getItem(storageIndex) || (await fetchKey())
	if (key) {
		owm_key.set(key)
		return
	}

	key = askKey()
	if (key) {
		owm_key.set(key)
	}
}
