'use client'
import { ChangeEvent, useState } from 'react'
import useSearchStore from 'store'
import Spinner from './spinner'

const Search = () => {
	const { getSearchResults, clearResults, results, searching } =
		useSearchStore()
	const [search, setSearch] = useState('')
	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
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
				onClick={() => getSearchResults(search)}
				className='w-full md:w-48 py-4 mt-4 md:mt-0 md:ml-6 bg-maastrichtBlue flex items-center justify-center rounded-lg hover:scale-105 transition-all ease-in-out active:scale-90'>
				<p className='text-white'>{searching ? <Spinner /> : 'Submit'}</p>
			</button>
			{results.length !== 0 && (
				<button
					onClick={clearResults}
					className='md:px-10 py-4 mt-4 md:mt-0 md:ml-6 bg-red-500 rounded-lg hover:scale-105 transition-all ease-in-out active:scale-90'>
					<p className='text-white'>Clear</p>
				</button>
			)}
		</div>
	)
}

export default Search
