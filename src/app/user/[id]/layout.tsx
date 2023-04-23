import { Menu, Profile } from '@components/user'
import { getData } from 'helpers'

interface UserProps {
	login: string
	avatar_url: string
	html_url: string
	followers_url: string
	following_url: string
	starred_url: string
	subscriptions_url: string
	repos_url: string
	name: string
	company: string
	blog: string
	location: string
	email: string
	hireable: boolean
	bio: string
	twitter_username: string
	public_repos: number
	public_gists: number
	followers: number
	following: number
}

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
			<div className='flex p-8'>
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
