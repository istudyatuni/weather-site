import { get } from 'svelte/store'

import {
	register as register_i18n,
	init,
	getLocaleFromNavigator as browserLocale,
} from 'svelte-i18n'
import { settings } from 'src/stores'

import { localesList, getLocaleShortName } from './locales'

async function loader(path) {
	return (await fetch(path)).json()
}

function register(locale) {
	register_i18n(locale, () => loader(`locales/${locale}.json`))
}

function registerMany(locales) {
	for (let loc of locales) {
		register(loc)
	}
}

export function init_i18n() {
	if (get(settings).locale === undefined) {
		settings.set('locale', getLocaleShortName(browserLocale()))
	}

	registerMany(localesList)

	init({
		fallbackLocale: 'en',
		initialLocale: get(settings).locale,
	})
}
