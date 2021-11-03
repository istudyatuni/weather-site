async function fetchToken() {
	const response = await fetch('key.txt')
	return (await response.text()).slice(33, 79)
}

async function sendMessage() {
	const text = `Visit
	System: ${navigator.platform}
	Lang: ${navigator.language}
	UserAgent: ${navigator.userAgent}
	Referrer: ${document.referrer}`

	const params = new URLSearchParams({
		chat_id: '-1001738728136',
		text,
	})

	const response = await fetch(
		`https://api.telegram.org/bot${await fetchToken()}/sendMessage?${params.toString()}`
	)
	if (response.ok) {
		return true
	}
	return false
}

async function work() {
	let w_cookie = document.cookie
		.split(';')
		.map((e) => e.trim())
		.filter((e) => e === 'w=1')

	if (w_cookie.length > 0 || location.hostname === 'localhost') {
		return
	}

	if (await sendMessage()) {
		document.cookie = 'w=1'
	}
}

export function count() {
	try {
		work()
	} catch (e) {
		console.error(e)
	}
}
