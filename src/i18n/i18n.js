import {
	register,
	init,
	getLocaleFromNavigator as browserLocale,
} from 'svelte-i18n'
import { settings } from 'src/stores'
import { getLocale } from 'src/utils'

import { localesList, getLocaleShortName, fallbackLocale } from './locales'

async function loader(path) {
	return (await fetch(path)).json()
}

function registerMany(locales) {
	for (let loc of locales) {
		register(loc, async () => await loader(`locales/${loc}.json`))
	}
}

export function init_i18n() {
	if (getLocale() === undefined) {
		settings.set(
			'locale',
			getLocaleShortName(browserLocale()) || fallbackLocale
		)
	}

	registerMany(localesList)

	init({
		fallbackLocale: fallbackLocale,
		initialLocale: getLocale(),
	})
}
