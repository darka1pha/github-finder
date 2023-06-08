import { ItemsContainer, Search } from '@components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-4 md:p-24'>
			<Search />
			<ItemsContainer />
		</main>
	)
}
