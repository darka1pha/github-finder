import { ItemsContainer, Search, ItemsCardSkeleton } from '@components'
import { SearchResultProps } from '@types'
import { getData, searchUsers } from 'helpers'

export default async function Home({
	searchParams,
}: {
	searchParams: { search: string }
}) {
	const data: SearchResultProps = await searchUsers(searchParams.search)
	return (
		<main>
			<ItemsContainer data={data.items} />
		</main>
	)
}
