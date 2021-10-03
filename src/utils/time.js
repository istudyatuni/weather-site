import { time } from 'src/stores/time'

function getTime() {
	const current = new Date()
	const hours = current.getHours()
	const minutes = current.getMinutes()
	return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

function refreshTimer() {
	time.set(getTime())
	setInterval(refreshTimer, 60 * 1000)
}

export function startTimer() {
	time.set(getTime())
	setTimeout(refreshTimer, (60 - new Date().getSeconds()) * 1000)
}
