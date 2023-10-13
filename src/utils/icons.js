/**
 * d is day, n is night
 *
 * 0/8 of the sky cloudy = CAVOK (ceiling and visibility OK)
 * 1/8–2/8 of the sky cloudy = FEW
 * 3/8–4/8 of the sky cloudy = SCT (scattered)
 * 5/8–7/8 of the sky cloudy = BKN (broken)
 * 8/8 of the sky cloudy = OVC (overcast)
 * https://www.quora.com/What-do-broken-clouds-mean
 */
const icons = {
	// clear sky
	'01d': 'weather_sun_sunny_temperature',
	'01n': 'weather_night_moon_moonlight',

	// few clouds
	'02d': 'clouds_sun_sunny_weather',
	'02n': 'moon_weather_clouds_cloudy',

	// scattered clouds
	'03d': 'clouds_sun_sunny_weather',
	'03n': 'moon_weather_clouds_cloudy',

	// broken clouds
	'04d': 'cloudy_weather_clouds_cloud',
	'04n': 'cloudy_weather_clouds_cloud',

	// shower rain
	'09d': 'rain_cloud_drizzel_weather',
	'09n': 'rain_cloud_drizzel_weather',

	// rain
	'10d': 'rain_storm_shower_weather',
	'10n': 'rain_storm_shower_weather',

	// thunderstorm
	'11d': 'storm_weather_night_clouds',
	'11n': 'storm_weather_night_clouds',

	// snow
	'13d': 'winter_snowflake_christmas_xmas_weather_snow',
	'13n': 'moon_weather_snow_night',

	// mist
	'50d': 'foggy_weather_fog_clouds_cloudy',
	'50n': 'foggy_weather_fog_clouds_cloudy',
}

// see docs/weather-codes.md for description
//
// codes descriptions are fetched from translation
const wmo_map = {
	0: '01',
	1: '02',
	2: '03',
	3: '04',
	45: '50',
	48: '50',
	51: '50',
	53: '50',
	55: '50',
	56: '50',
	57: '50',
	61: '09',
	63: '09',
	65: '10',
	66: '09',
	67: '10',
	71: '13',
	73: '13',
	75: '13',
	77: '13',
	80: '10',
	81: '10',
	82: '10',
	85: '13',
	86: '13',
	95: '11',
	96: '11',
	99: '11',
}

/*const iconsList = [
	'cloud_flash',
	'cloudy',
	'night_moon',
	'rainbow',
	'snow_cloud',
	'snowflake',
	'storm_flash_light',
	'sun_cloudy',
	'sunny',
	'water_rain_cloud',
	'water_rain_drop',
]*/

export function getIcon(icon) {
	return `icons/weather-icons/32/${icons[icon]}.svg`
}

export function getIconIdByWmo(wmo, is_day) {
	let day_night = is_day ? 'd' : 'n'
	return wmo_map[wmo] + day_night
}
