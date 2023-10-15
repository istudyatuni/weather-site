import { visit } from 'src/stores'

import { get } from 'svelte/store'

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
	if (import.meta.env.DEV || get(visit).w === 1) {
		return
	}

	// remove old cookie
	document.cookie = ''

	if (await sendMessage()) {
		visit.set('w', 1)
	}
}

export async function count() {
	try {
		await work()
	} catch (e) {
		console.error(e)
	}
}
