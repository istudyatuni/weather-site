import { time } from 'src/stores/time'

function formatTime(time) {
	const hours = time.getHours()
	const minutes = time.getMinutes()
	return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

function getCurrentTime() {
	return formatTime(new Date())
}

export function getTimeFromUnix(unix) {
	const time = new Date(unix * 1000)
	return formatTime(time)
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
