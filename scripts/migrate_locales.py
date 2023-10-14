# update en.json, then run this script to update other locale's structure
# only additions of new keys and changes string -> dictionary are detected

import json
import os.path
from os import listdir, path

LOCALES_FOLDER = 'public/locales'
BASE_LOCALE = 'en.json'

def read_locale(name) -> dict:
	with open(os.path.join(LOCALES_FOLDER, name)) as f:
		return dict(json.load(f))

def write_locale(name, data: dict):
	s = json.dumps(data, indent='\t', ensure_ascii=False)
	with open(os.path.join(LOCALES_FOLDER, name), 'w') as f:
		f.write(s + '\n')

def update_locale(orig: dict, old: dict, acc = None):
	if acc is None:
		acc = {}
	for k, v in orig.items():
		if k not in old:
			acc[k] = v
			continue

		if isinstance(v, str):
			if k in old:
				if isinstance(old[k], str):
					# both v and old[k] are strings
					acc[k] = old[k]
				else:
					raise NotImplementedError('orig[k] is string, but old[k] is not:', old[k])
		elif isinstance(v, dict):
			if isinstance(old[k], str):
				# remember old value
				acc['//removed:' + k] = old[k]
				# add new value
				acc[k] = v
			elif isinstance(old[k], dict):
				acc[k] = {}
				update_locale(v, old[k], acc[k])
			else:
				raise NotImplementedError('orig[k] is dict, but old[k] is not (string | dict):', old[k])
		else:
			raise NotImplementedError('orig[k] is not (string | dict):', v)
	return acc

def main():
	locales = [
		f for f in listdir(LOCALES_FOLDER)
		if path.isfile(path.join(LOCALES_FOLDER, f)) and f.endswith('.json')
	]
	locales = list(filter(lambda l: l != BASE_LOCALE, locales))
	if len(locales) == 0:
		return

	default_locale = read_locale(BASE_LOCALE)
	for l in locales:
		try:
			new = update_locale(default_locale, read_locale(l))
			write_locale(l, new)
		except NotImplementedError as e:
			print('Not implemented [update_locale]:', e)

if __name__ == '__main__':
	main()
