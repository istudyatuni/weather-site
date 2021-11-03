async function fetchToken() {
	const response = await fetch('key.txt')
	return (await response.text()).slice(33, 79)
}

const code = (t) => '`' + t + '`'

async function sendMessage() {
	const text = [
		'*Visit*',
		'System: ' + code(navigator.platform),
		'Lang: ' + code(navigator.language),
		'UserAgent: ' + code(navigator.userAgent),
		'Referrer: ' + code(document.referrer),
	].join('\n')

	const params = new URLSearchParams({
		chat_id: '-1001738728136',
		text,
		parse_mode: 'markdown',
	})

	const response = await fetch(
		`https://api.telegram.org/bot${await fetchToken()}/sendMessage?${params.toString()}`
	)
	return response.ok
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

export async function count() {
	try {
		await work()
	} catch (e) {
		console.error(e)
	}
}
