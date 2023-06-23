const BASEURL = 'https://api.github.com/'
const GITHUB_SECRETE = '0423679eaf1aff8c3a91566704e0622ae4259912'
const CLIENT_ID = 'Iv1.61b9899a607c0110'

export const getData = async (url: string, cache?: RequestCache) => {
	// console.log(
	// 	`${BASEURL}${url}&client_id=${CLIENT_ID}&client_secret=${GITHUB_SECRETE}`
	// )
	const data = await fetch(
		`${BASEURL}${url}client_id=${CLIENT_ID}&client_secret=${GITHUB_SECRETE}`,
		{
			cache,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
	return data.json()
}

export const searchUsers = async (query: string) => {
	if (query && query.length > 0)
		return await getData(`search/users?q=${query}&`, 'no-store')
	return []
}

export const updateSearchParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search)

	searchParams.set(type, value)

	const newPathname = `${window.location.pathname}?${searchParams.toString()}`

	return newPathname
}

export const deleteSearchParams = (type: string) => {
	const newSearchParams = new URLSearchParams(window.location.search)

	newSearchParams.delete(type.toLocaleLowerCase())

	const newPathname = `${
		window.location.pathname
	}?${newSearchParams.toString()}`

	return newPathname
}
