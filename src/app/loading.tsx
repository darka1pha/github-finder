import { ItemsCardSkeleton } from '@components'

const Loading = () => {
	return (
		<div className='flex flex-wrap w-full mt-5'>
			{Array.from(Array(10).keys()).map((i) => (
				<ItemsCardSkeleton key={i} />
			))}
		</div>
	)
}

export default Loading
