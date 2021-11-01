import { noCacheHeaders as headers } from 'src/utils/constants'

export async function loadVersion() {
	return await (
		await fetch('version.txt', {
			headers,
		})
	).text()
}
