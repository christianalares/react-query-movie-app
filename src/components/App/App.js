import React, { useEffect, useContext } from 'react'
import { ReactQueryConfigProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import { StateProvider } from '../../store'
import { store } from '../../store'
import useLocales from '../../hooks/useLocales'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import { getStorage } from '../../utils/LS'

const queryConfig = {
  queries: {
    staleTime: 1000 * 60 * 1, // 1 minute
  },
}

function App() {
  const { state, dispatch } = useContext(store)
  const { status } = useLocales(1000, {
    onSuccess: (data) => {
      const localeFromLS = getStorage('app/SET_LOCALE')
      dispatch({
        type: 'app/SET_LOCALE',
        payload: localeFromLS ? data.items.find((l) => l.code === localeFromLS) : data.items.find((l) => l.default),
        saveToLocalStorage: true,
      })
    },
  })

  if (status === 'loading') {
    return <h1>Loading app...</h1>
  }

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Header />
      <main>
        <Movies />
      </main>
    </div>
  )
}

export default () => (
  <ReactQueryConfigProvider config={queryConfig}>
    <StateProvider>
      <App />
    </StateProvider>
    <ReactQueryDevtools />
  </ReactQueryConfigProvider>
)
