import { get } from 'svelte/store'

import {
	register as register_i18n,
	init,
	getLocaleFromNavigator as getUserLocale,
} from 'svelte-i18n'
import { settings } from 'src/stores/settings'

import { locales, getLocaleShortName } from './locales'

async function loader(path) {
	return (await fetch(path)).json()
}

function register(locale) {
	register_i18n(locale, () => loader(`locales/${locale}.json`))
}

function registerMany(locales) {
	for (let key of Object.keys(locales)) {
		// ignore 'en-US', use only short variant 'en'
		if (key === getLocaleShortName(key)) {
			register(key)
		}
	}
}

export function initI18n() {
	if (get(settings).locale === undefined) {
		settings.set('locale', getLocaleShortName(getUserLocale()))
	}

	registerMany(locales)

	init({
		fallbackLocale: 'en',
		initialLocale: get(settings).locale,
	})
}
