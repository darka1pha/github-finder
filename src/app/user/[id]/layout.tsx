import { Menu, Profile } from '@components/user'
import { UserProps } from '@types'
import { getData } from 'helpers'

const UserLayout = async ({
	children,
	params: { id },
}: {
	children: React.ReactNode
	params: { id: number }
}) => {
	const data: UserProps = await getData(`user/${id}?`)
	return (
		<main>
			<Menu />
			<div className='flex p-8 md:flex-row flex-col'>
				<Profile
					avatar={data.avatar_url}
					fullname={data.name}
					location={data.location}
					username={data.login}
					blog={data.blog}
					bio={data.bio}
				/>
				{children}
			</div>
		</main>
	)
}

export default UserLayout
