import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

const locales_dir = './locales/'

register('en', () => import(locales_dir + 'en.json'));
register('ru', () => import(locales_dir + 'ru.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator(),
});
