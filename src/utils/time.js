import { time } from 'src/stores'

export function formatTime(time) {
	if (!(time instanceof Date)) {
		time = new Date(time)
	}
	const hours = time.getHours()
	const minutes = time.getMinutes()
	return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

function getCurrentTime() {
	return formatTime(new Date())
}

function refreshTimer() {
	time.set(getCurrentTime())
}

export function startTimer() {
	time.set(getCurrentTime())
	setTimeout(() => {
		refreshTimer()
		setInterval(refreshTimer, 60 * 1000)
	}, (60 - new Date().getSeconds()) * 1000)
}
