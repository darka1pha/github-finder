import { RepoProps } from 'app/user/[id]/page'
import Link from 'next/link'
import { Hierarchy2 } from 'iconsax-react'

const RepoCard = ({
	description,
	fork,
	forks,
	html_url,
	topics,
	url,
	name,
}: RepoProps) => {
	return (
		<Link
			href={html_url}
			target='_blank'
			className='flex flex-1 flex-col md:min-w-[380px] basis-[46%] h-48 flex-shrink p-4 border-yankeesBlue border-[1px] rounded-xl m-2'>
			<p className='text-tuftsBlue font-semibold text-lg'>{name}</p>
			<p className='text-lightPeriwinkle overflow-hidden text-ellipsis mt-2'>
				{description}
			</p>
			<div className='flex flex-wrap'>
				{fork && (
					<div className='flex items-center mt-2'>
						<Hierarchy2 size='18' className='text-lightPeriwinkle' />
						<p className='text-lightPeriwinkle text-sm ml-2'>{forks}</p>
					</div>
				)}
			</div>
			<div className='flex flex-wrap'>
				{topics.map((topic,key) => (
					<p key={key} className='p-2 bg-yankeesBlue rounded-lg text-sm text-lightPeriwinkle my-2 mx-1'>
						{topic}
					</p>
				))}
			</div>
		</Link>
	)
}

export default RepoCard
