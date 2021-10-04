const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

export function getWindDirection(deg) {
	return directions[Math.floor(deg / 45)]
}
