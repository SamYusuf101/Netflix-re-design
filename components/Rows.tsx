import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
    title: string
    movies: Movie[]
}

function Rows({title, movies}: Props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
        <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] 
        transition duration-200 hover:text-white md:text-2xl'>{title}</h2>
        <div className='group relative md:ml-2'>
            <ChevronLeftIcon className='RowIcon' />

            <div>
                <Thumbnail />
            </div>
            <ChevronRightIcon className='RowIcon'  />
        </div>
    </div>
  )
}


export default Rows