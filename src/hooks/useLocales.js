import { useQuery } from 'react-query'
import client from '../client'

const useLocales = (delay = 0, options = {}) => {
  const query = useQuery(
    'locales',
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          return resolve(client.getLocales())
        }, delay)
      })
    },
    options
  )

  return query
}

export default useLocales
