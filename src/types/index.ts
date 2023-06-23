export interface ItemProps {
	login: string
	id: number
	avatar_url: string
	url: string
	html_url: string
	score: number
}

export interface SearchResultProps {
	items: ItemProps[]
}

export interface UserProps {
	login: string
	avatar_url: string
	html_url: string
	followers_url: string
	following_url: string
	starred_url: string
	subscriptions_url: string
	repos_url: string
	name: string
	company: string
	blog: string
	location: string
	email: string
	hireable: boolean
	bio: string
	twitter_username: string
	public_repos: number
	public_gists: number
	followers: number
	following: number
}