import { it, expect } from 'vitest'
import { updateFields } from './migration'

it('src/stores/migration:updateFields', () => {
	let table = [
		{
			initial: {},
			old: {},
			expected: {},
			name: 'empty',
		},
		{
			initial: {},
			old: { a: 5 },
			expected: { a: 5 },
			name: 'init empty, old have simple value',
		},
		{
			initial: { a: 5 },
			old: {},
			expected: { a: 5 },
			name: 'old empty, init have simple value',
		},
		{
			initial: {},
			old: { b: { c: 7 } },
			expected: { b: { c: 7 } },
			name: 'init empty, old have object value',
		},
		{
			initial: { a: 5 },
			old: { a: 8 },
			expected: { a: 8 },
			name: 'both have simple value, get from old',
		},
		{
			initial: { a: { c: 8 } },
			old: { a: 5 },
			expected: { a: { c: 8 } },
			name: 'replace simple value with object',
		},
		{
			initial: { a: 5 },
			old: { a: { c: 8 } },
			expected: { a: 5 },
			name: 'replace object with simple value',
		},
		{
			initial: { a: { c: 8 } },
			old: { a: { c: 5 } },
			expected: { a: { c: 5 } },
			name: 'merge',
		},
	]
	for (let { initial, old, expected, name } of table) {
		let acc = {}
		updateFields(initial, old, acc)
		expect(acc, name).toMatchObject(expected)
	}
})
