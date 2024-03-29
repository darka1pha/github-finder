import { RepoCard } from '@components/user'
import { getData } from 'helpers'

interface UserPageProps {
	params: {
		id: number
	}
}

export interface RepoProps {
	name: string
	html_url: string
	description: string
	fork: boolean
	url: string
	forks: number
	topics: Array<string>
}

interface UserProps {
	login: string
}

const User = async ({ params: { id } }: UserPageProps) => {
	const data: UserProps = await getData(`user/${id}?`)
	const repositories: Array<RepoProps> = await getData(
		`users/${data.login}/repos?`
	)

	return (
		<>
			{repositories
				.slice(0, 4)
				.map(
					({ description, fork, forks, html_url, topics, url, name }, key) => (
						<RepoCard
							name={name}
							description={description}
							fork={fork}
							forks={forks}
							html_url={html_url}
							topics={topics}
							url={url}
							key={key}
						/>
					)
				)}
		</>
	)
}

export default User
