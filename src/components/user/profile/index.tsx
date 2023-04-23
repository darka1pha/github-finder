import Image from 'next/image'
import { Link2, Location } from 'iconsax-react'
import Link from 'next/link'

interface ProfileProps {
	avatar: string
	username: string
	fullname: string
	location: string
	bio: string
	blog?: string
}
const Profile = ({
	avatar,
	username,
	fullname,
	location,
	bio,
	blog,
}: ProfileProps) => {
	return (
		<div className='border-r-[1px] border-yankeesBlue p-3 w-72 flex flex-col items-center'>
			<div className='h-48 w-48 rounded-full overflow-hidden'>
				<Image
					alt='avatar'
					src={avatar}
					height={192}
					width={192}
					sizes='100vw'
					className='object-cover h-full'
				/>
			</div>
			<div className='w-full flex flex-col mt-2'>
				<div className='border-b-[1px] border-yankeesBlue pb-4'>
					<p className='text-lightPeriwinkle text-lg font-medium ml-3'>
						{fullname}
					</p>
					<p className='text-lightPeriwinkle/80 ml-3'>{`@${username}`}</p>
				</div>
				<div>
					<p className='text-lightPeriwinkle text-sm py-4'>{bio}</p>
				</div>
				<div className='border-t-[1px] border-yankeesBlue pt-2'>
					<div className='flex items-center mt-4'>
						<Location size={24} className='text-lightPeriwinkle' />
						<p className='text-lightPeriwinkle text-lg font-medium ml-3'>
							{location}
						</p>
					</div>
					{blog && (
						<div className='flex items-center mt-2'>
							<Link2 size={24} className='text-lightPeriwinkle' />
							<Link
								href={`https://${blog}`}
								target='_blank'
								className='text-lightPeriwinkle text-lg ml-3'>
								{blog}
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Profile
