/** @type {[{
 *    key: import('src/utils/types').OsmProvider,
 *    name: String,
 *    base_url: String
 * }]}
 */
export const maps_providers = [
	{
		key: 'osm',
		name: 'OpenStreetMap',
		base_url: 'http://www.openstreetmap.org/?',
	},
	{
		key: 'google',
		name: 'Google',
		base_url: 'https://maps.google.com/?',
	},
]

/**
 * @param  {import('src/utils/types').OsmProvider} provider
 * @return {String}
 */
export function formatMapLink(provider, lat, lon) {
	let params = new URLSearchParams()
	if (provider === 'osm') {
		params.append('mlat', lat)
		params.append('mlon', lon)
	} else if (provider === 'google') {
		params.append('q', [lat, lon])
	}
	let base = maps_providers.find((p) => p.key === provider).base_url
	return base + params.toString()
}
