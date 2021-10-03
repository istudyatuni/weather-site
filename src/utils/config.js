import { owm_key } from 'src/stores/owm'

export async function loadConfig() {
	const config = await (await fetch('config.json')).json()
	owm_key.set(config.openweathermap_key)
}
