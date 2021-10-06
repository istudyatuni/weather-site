import { owm_key } from 'src/stores/owm'

const storageIndex = 'owm_key'

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

export async function loadConfig() {
	const response = await fetch('config.json')

	if (response.ok) {
		const config = await response.json()
		owm_key.set(config.openweathermap_key)
		return
	}

	let key = localStorage.getItem(storageIndex)
	if (key) {
		owm_key.set(key)
		return
	}

	key = askKey()
	if (key) {
		owm_key.set(key)
	}
}
