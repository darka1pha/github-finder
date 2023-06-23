import { RepoCard } from '@components/user'
import { getData } from 'helpers'
import { RepoProps } from '../page'

interface ReposPageProps {
	params: {
		id: number
	}
}

interface UserProps {
	login: string
}

const Repos = async ({ params: { id } }: ReposPageProps) => {
	const data: UserProps = await getData(`user/${id}?`)
	const repositories: Array<RepoProps> = await getData(
		`users/${data.login}/repos?`
	)

	return (
		<>
			{repositories.map(
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

export default Repos
