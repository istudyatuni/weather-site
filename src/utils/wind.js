const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']

export function getWindDirection(deg) {
	return directions[Math.round(deg / 45) % 8]
}
