import {
	register as register_i18n,
	init,
	getLocaleFromNavigator,
} from 'svelte-i18n'
import { settings } from 'src/stores/settings'

// need refactor when add language picker
const currentLocale = getLocaleFromNavigator()
settings.set('locale', currentLocale)

async function loader(path) {
	return (await fetch(path)).json()
}

function register(locale) {
	register_i18n(locale, () => loader(`locales/${locale}.json`))
}

register('en')
register('ru')

init({
	fallbackLocale: 'en',
	initialLocale: currentLocale,
})
