/**
 * Locales dict
 * 'locale': 'path'
 * where path will be used as 'path + .json'
 * @type {Object}
 */
const locales = {
	en: 'en',
	'en-US': 'en',
	ru: 'ru',
	'ru-RU': 'ru',
}

export const fallbackLocale = 'en'

export const localesList = [...new Set(Object.values(locales))]

export function getLocaleShortName(l) {
	return locales[l]
}

/**
 * For using in language selector. Requires because we loading locales asynchronously
 * @type {Object}
 */
export const localesNames = {
	en: 'English',
	ru: 'Русский',
}
