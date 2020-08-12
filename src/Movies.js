import React from 'react'
import Movie from './Movie'

const Movies = ({ movies }) =>
  movies.map((m) => (
    <Movie
      key={m.sys.id}
      title={m.fields.title}
      image={{
        src: m.fields.cover.fields.file.url,
        alt: m.fields.cover.fields.title,
      }}
      rating={m.fields.rating}
    />
  ))

export default Movies
