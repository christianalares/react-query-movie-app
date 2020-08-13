import React, { useContext } from 'react'
import { store } from '../../store'
import useLocales from '../../hooks/useLocales'
import styles from './Header.module.scss'

const Header = () => {
  const { status, data, error } = useLocales()
  const { state, dispatch } = useContext(store)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>{error.message}</div>
  }

  const { items: locales } = data

  return (
    <header className={styles.header}>
      {locales.map((locale) => (
        <button
          key={locale.sys.id}
          onClick={() =>
            dispatch({
              type: 'app/SET_LOCALE',
              payload: locale,
              saveToLocalStorage: true,
            })
          }
        >
          {state.app.locale.code === locale.code && '* '}
          {locale.name}
        </button>
      ))}
    </header>
  )
}

export default Header
