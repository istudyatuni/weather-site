import { getBrowserLanguage } from 'src/utils/lang'

export function getWeekday() {
	let current = new Date()
	let today = current.toLocaleDateString(getBrowserLanguage(), {
		weekday: 'long',
	})
	return today
}
