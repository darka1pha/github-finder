const BASEURL = 'https://api.github.com/'
const GITHUB_SECRETE = '0423679eaf1aff8c3a91566704e0622ae4259912'
const CLIENT_ID = 'Iv1.61b9899a607c0110'

export const getData = async (url: string) => {
	console.log(`${BASEURL}${url}&client_id=${CLIENT_ID}&client_secret=${GITHUB_SECRETE}`)
	const data = await fetch(
		`${BASEURL}${url}client_id=${CLIENT_ID}&client_secret=${GITHUB_SECRETE}`,
		{
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
	return data.json()
}
