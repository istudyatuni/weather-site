const headers = new Headers()
headers.append('cache-control', 'no-store')

export async function loadVersion() {
	return await (await fetch('version.txt', {
		headers
	})).text()
}
