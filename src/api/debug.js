const headers = new Headers()
headers.append('cache-control', 'no-cache')
headers.append('pragma', 'no-cache')

export async function loadVersion() {
	return await (
		await fetch('version.txt', {
			headers,
		})
	).text()
}
