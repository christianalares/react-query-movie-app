import React, { useContext, useRef } from 'react'
import { store } from '../../store'
import useLocales from '../../hooks/useLocales'
import styles from './Header.module.scss'

const Header = () => {
  const { status, data, error } = useLocales()
  const { state, dispatch } = useContext(store)
  const {
    app: { locale: currentLocale },
  } = state

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
          {currentLocale.code === locale.code && '* '}
          {locale.name}
        </button>
      ))}
    </header>
  )

  return <h1>Header</h1>
}

export default Header
