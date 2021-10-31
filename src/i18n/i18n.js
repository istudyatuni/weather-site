import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

async function loader(path) {
	return fetch(path)
}

const locales_dir = 'locales/'

// import en from './locales/en.json'

register('en', loader(locales_dir + 'en.json'))
register('ru', loader(locales_dir + 'ru.json'))

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator(),
})
