'use client'
import ItemsCard from './itemsCard'
import { ItemProps } from '@types'

const ItemsContainer = ({ data }: { data: ItemProps[] }) => {
	return (
		<div className='flex flex-wrap w-full mt-5'>
			{data && data.map(({ avatar_url, id, login }, key) => (
				<ItemsCard key={key} avatar={avatar_url} name={login} id={id} />
			))}
		</div>
	)
}

export default ItemsContainer
