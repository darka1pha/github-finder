'use client'
import { Book1, Book, Star1 } from 'iconsax-react'
import { usePathname, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const buttons = [
	{
		name: 'Overview',
		path: (id: string) => `/user/${id}`,
		icon: (active: boolean) => (
			<Book1
				className={`${
					!active
						? 'text-lightPeriwinkle transition-all ease-out group-hover:text-lightPeriwinkle/60'
						: 'text-lightPeriwinkle'
				}`}
				size={32}
			/>
		),
	},
	{
		name: 'Repositories',
		path: (id: string) => `/user/${id}/repos`,
		icon: (active: boolean) => (
			<Book
				className={`${
					!active
						? 'text-lightPeriwinkle transition-all ease-out group-hover:text-lightPeriwinkle/60'
						: 'text-lightPeriwinkle'
				}`}
				size={32}
			/>
		),
	},
	{
		name: 'Stars',
		path: (id: string) => `/user/${id}/stars`,
		icon: (active: boolean) => (
			<Star1
				className={`${
					!active
						? 'text-lightPeriwinkle transition-all ease-out group-hover:text-lightPeriwinkle/60'
						: 'text-lightPeriwinkle'
				}`}
				size={32}
			/>
		),
	},
]

const Menu = () => {
	const pathname = usePathname()
	const params = useParams()
	return (
		<div className='flex w-full items-center justify-center mt-5'>
			{buttons.map(({ icon, name, path }, key) => (
				<Link
					key={key}
					href={path(params.id)}
					className={` flex flex-col justify-center items-center mx-5 relative group`}>
					{path(params.id) === pathname && (
						<motion.span
							layoutId='bubble'
							className='absolute bg-flame mix-blend-difference h-1 w-full -bottom-2'
							style={{ borderRadius: 2 }}
							transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
						/>
					)}
					{icon(path(params.id) === pathname)}
					<p
						className={`${
							path(params.id) !== pathname
								? 'text-lightPeriwinkle transition-all ease-out group-hover:text-lightPeriwinkle/60'
								: 'text-lightPeriwinkle'
						}`}>
						{name}
					</p>
				</Link>
			))}
		</div>
	)
}

export default Menu
