import { Search } from '@components'
import './globals.css'

export const metadata = {
	title: 'Github Finder',
	description: "An app using githun API's",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-dark flex min-h-screen flex-col items-center p-4 md:p-24'>
				<Search />
				{children}
			</body>
		</html>
	)
}
