// import { useContext } from 'react'
// import { store } from '../store'
import { useQuery } from 'react-query'
import client from '../client'

const useMovies = (delay = 0, locale, options = {}) => {
  // const { state } = useContext(store)

  // const {
  //   app: { locale: currentLocale },
  // } = state

  const query = useQuery(
    ['movies', locale],
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          return resolve(client.getEntries({ content_type: 'movie', locale }))
        }, delay)
      })
    },
    options
  )

  return query
}

export default useMovies
