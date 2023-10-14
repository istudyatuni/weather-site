import cssnano from 'cssnano'

export const plugins =
	process.env.NODE_ENV === 'production'
		? [cssnano]
		: []
