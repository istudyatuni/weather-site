import {
	register as register_i18n,
	init,
	getLocaleFromNavigator,
} from 'svelte-i18n'
import { settings } from 'src/stores/settings'

import locales from './locales'

async function loader(path) {
	return (await fetch(path)).json()
}

function register(locale, path = undefined) {
	register_i18n(locale, () => loader(`locales/${path || locale}.json`))
}

function registerMany(locales) {
	for (let key of Object.keys(locales)) {
		register(key, locales[key])
	}
}

// need refactor when add language picker
const currentLocale = getLocaleFromNavigator()
settings.set('locale', currentLocale)

registerMany(locales)

init({
	fallbackLocale: 'en',
	initialLocale: currentLocale,
})
