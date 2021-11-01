const noCacheHeaders = new Headers()
noCacheHeaders.append('cache-control', 'no-cache')
noCacheHeaders.append('pragma', 'no-cache')

export { noCacheHeaders }
