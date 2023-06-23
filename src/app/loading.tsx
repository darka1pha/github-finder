import { ItemsCardSkeleton, Search } from '@components'

const Loading = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-4 md:p-24'>
			<Search />
			<div className='flex flex-wrap w-full mt-5'>
				{Array.from(Array(10).keys()).map((i) => (
					<ItemsCardSkeleton key={i} />
				))}
			</div>
		</main>
	)
}

export default Loading
