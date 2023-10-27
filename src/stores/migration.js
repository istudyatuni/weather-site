import { get } from 'svelte/store'

/**
 * Migrate `store` using `migrations` to `version`
 * @param  {import('svelte/store').Writable} store Store to migrate
 * @param  {{ [key: number]: (data: object, store: import('svelte/store').Writable) => {}}}
 * migrations Migrations to apply
 * @param  {number} version    To which version migrate
 */
export function migrateStore(store, migrations, version) {
	let old = get(store)
	// version could be undefined
	if ((old.version ?? 0) === version) {
		return
	}
	Object.keys(migrations)
		.map((v) => parseInt(v))
		.filter((v) => v > old.version && v <= version)
		.sort()
		.forEach((v) => {
			store.set('version', v)
			// its possible case that `old` will be changed inside migration,
			// and this will affect next migrations
			migrations[v](old, store)
		})
}
