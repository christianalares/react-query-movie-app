import React, { useState, useEffect } from 'react'
import Movies from './Movies'
import './App.css'
import client from './client'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [locales, setLocales] = useState('')
  const [currentLocale, setCurrentLocale] = useState('')

  useEffect(() => {
    client.getLocales().then((res) => {
      setLocales(res.items)
      // console.log(res.items)

      const defaultLocale = res.items.find((l) => l.default) || null
      setCurrentLocale(defaultLocale)
    })
  }, [])

  useEffect(() => {
    setLoading(true)

    client
      .getEntries({
        locale: currentLocale.code,
      })
      .then((res) => {
        setMovies(res.items)
        setLoading(false)
      })
  }, [setMovies, setLoading, currentLocale])

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <div>Current locale: {currentLocale.name}</div>
        <div>
          {locales.map((locale) => (
            <button key={locale.sys.id} onClick={() => setCurrentLocale(locale)}>
              {locale.name}
            </button>
          ))}
        </div>
      </header>
      <h1>Movies App</h1>
      {loading ? <p>Loading...</p> : <Movies movies={movies} />}
    </div>
  )
}

export default App
