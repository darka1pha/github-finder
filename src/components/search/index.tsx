'use client'
import { ChangeEvent, useState } from 'react'
import Spinner from './spinner'
import { deleteSearchParams, updateSearchParams } from 'helpers'
import { useRouter, useSearchParams } from 'next/navigation'

const Search = () => {
	const searchParams = useSearchParams()
	const [search, setSearch] = useState(searchParams.get('search') || '')
	const router = useRouter()
	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}
	const onSearch = () => {
		const newPathname = updateSearchParams('search', search)
		router.push(newPathname)
	}

	const onClear = () => {
		const newPathname = deleteSearchParams('search')
		router.push(newPathname)
	}

	return (
		<div className='flex w-full md:flex-row flex-col'>
			<input
				className='text-black h-14 w-full rounded-xl px-4 focus:outline-none outline-none'
				value={search}
				placeholder='Search user...'
				onChange={searchHandler}
			/>
			<button
				onClick={onSearch}
				className='w-full md:w-48 py-4 mt-4 md:mt-0 md:ml-6 bg-maastrichtBlue flex items-center justify-center rounded-lg hover:scale-105 transition-all ease-in-out active:scale-90'>
				<p className='text-white'>{false ? <Spinner /> : 'Submit'}</p>
			</button>
			{searchParams.get('search') && (
				<button
					onClick={onClear}
					className='md:px-10 py-4 mt-4 md:mt-0 md:ml-6 bg-red-500 rounded-lg hover:scale-105 transition-all ease-in-out active:scale-90'>
					<p className='text-white'>Clear</p>
				</button>
			)}
		</div>
	)
}

export default Search
