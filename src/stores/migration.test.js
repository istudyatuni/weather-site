import { it, expect } from 'vitest'
import { updateFields } from './migration'

it('migrate::updateFields', () => {
	let table = [
		{
			initial: {},
			old: {},
			expected: {},
		},
		{
			initial: {},
			old: { a: 5 },
			expected: { a: 5 },
		},
		{
			initial: {},
			old: { a: 5, b: { c: 7 } },
			expected: { a: 5, b: { c: 7 } },
		},
		{
			initial: { a: { c: 8 } },
			old: { a: 5 },
			expected: { a: { c: 8 } },
		},
		{
			initial: { a: { c: 8 }, d: 7 },
			old: { a: 5 },
			expected: { a: { c: 8 }, d: 7 },
		},
		{
			initial: { a: 5 },
			old: { a: { c: 8 } },
			expected: { a: 5 },
		},
	]
	for (let { initial, old, expected } of table) {
		let acc = {}
		updateFields(initial, old, acc)
		expect(acc).toMatchObject(expected)
	}
})
