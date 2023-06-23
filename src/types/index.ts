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
