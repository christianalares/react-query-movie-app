import React, { useContext } from 'react'
import useMovies from '../../hooks/useMovies'
import Movie from '../Movie/Movie'
import { store } from '../../store'
import styles from './Movies.module.scss'

const Movies = () => {
  const { state } = useContext(store)
  const { isLoading, isError, error, data } = useMovies(1000, state.app.locale.code)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  const { items: movies } = data

  return (
    <div className={styles.container}>
      {movies.map((m) => (
        <Movie
          key={m.sys.id}
          title={m.fields.title}
          image={{
            src: m.fields.cover.fields.file.url,
            alt: m.fields.cover.fields.title,
          }}
          rating={m.fields.rating}
          author={{
            img: {
              src: m.fields.author.fields.profilePicture.fields.file.url,
              alt: m.fields.author.fields.profilePicture.fields.title,
            },
            name: m.fields.author.fields.name,
          }}
        />
      ))}
    </div>
  )
}

export default Movies
