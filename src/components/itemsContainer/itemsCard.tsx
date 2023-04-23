import Image from 'next/image'
import Link from 'next/link'

const ItemsCard = ({
	name,
	avatar,
	id,
}: {
	name: string
	avatar: string
	id: number
}) => {
	return (
		<div className='w-[240px] rounded-xl my-4 mx-auto border-[1px] border-yankeesBlue flex items-center flex-col p-4'>
			<div className='rounded-full h-32 w-32 overflow-auto'>
				<Image src={avatar} height={128} width={128} alt='avatar' />
			</div>
			<p className='text-lightPeriwinkle font-medium mt-3'>{name}</p>
			<Link
				className='px-8 py-2 rounded-md bg-yankeesBlue mt-4 hover:scale-105 transition-all ease-in-out active:scale-90'
				href={`/user/${id}`}>
				<p className='text-lightPeriwinkle font-medium'>More</p>
			</Link>
		</div>
	)
}

export default ItemsCard
