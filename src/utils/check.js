export function is_array(object) {
	return Array.isArray(object)
}

export function is_object(object) {
	return object?.constructor === Object
}
