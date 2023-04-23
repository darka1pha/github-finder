import { getData } from 'helpers'
import { create } from 'zustand'

interface SearchState {
	getSearchResults: (query: string) => void
	clearResults: () => void
	searching: boolean
	results:
		| []
		| [
				{
					login: string
					id: number
					avatar_url: string
					url: string
					html_url: string
					score: number
				}
		  ]
}

const useSearchStore = create<SearchState>()((set, get) => ({
	results: [],
	searching: false,
	clearResults: () => {
		set(() => ({ results: [] }))
	},
	getSearchResults: async (query) => {
		set(() => ({ searching: true }))
		const data = await getData(`search/users?q=${query}&`)
		set(() => ({ results: data.items, searching: false }))
	},
}))

export default useSearchStore
