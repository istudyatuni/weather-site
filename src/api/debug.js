export async function loadVersion() {
	return await (await fetch('version.txt')).text()
}
