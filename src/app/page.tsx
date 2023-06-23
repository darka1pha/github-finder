import { ItemsContainer, Search } from '@components'
import { SearchResultProps } from '@types'
import { searchUsers } from 'helpers'

export default async function Home({
	searchParams,
}: {
	searchParams: { search: string }
}) {
	const data: SearchResultProps = await searchUsers(searchParams.search)
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-4 md:p-24'>
			<Search />
			<ItemsContainer data={data.items} />
		</main>
	)
}
