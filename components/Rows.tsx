import React from 'react'
import { Movie } from '../typings'

interface Props {
    title: string
    movies: Movie[]
}

function Rows({title, movies}: Props) {
  return (
    <div>Rows</div>
  )
}

export default Rows