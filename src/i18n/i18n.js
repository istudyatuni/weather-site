import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

async function loader(path) {
	return (await fetch(path)).json()
}

const locales_dir = 'locales/'

register('en', () => loader(locales_dir + 'en.json'))
register('ru', () => loader(locales_dir + 'ru.json'))

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator(),
})
