export const req = async (url, option) => {
	const s = await fetch(url, option)
	if (s.status > 399) {
		throw s
	}
	return s
}

export const post = async (url, body, option = {}) => {
	Object.assign(option, {
		method: "POST",
		body,
	})
	return await req(url, option)
}

export const fJson = async (url, option) => (await req(url, option)).json()
