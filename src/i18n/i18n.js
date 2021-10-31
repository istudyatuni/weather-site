import {
	register as register_i18n,
	init,
	getLocaleFromNavigator,
} from 'svelte-i18n'

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
	initialLocale: getLocaleFromNavigator(),
})
