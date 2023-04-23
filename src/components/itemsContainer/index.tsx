'use client'
import useSearchStore from 'store'
import ItemsCard from './itemsCard'

const ItemsContainer = () => {
	const { results } = useSearchStore()
	return (
		<div className='flex flex-wrap w-full mt-5'>
			{results.map(({ avatar_url, id, login }, key) => (
				<ItemsCard key={key} avatar={avatar_url} name={login} id={id} />
			))}
		</div>
	)
}

export default ItemsContainer
