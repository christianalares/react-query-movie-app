import React, { createContext, useReducer } from 'react'
import { setStorage } from './utils/LS'

const initialState = {
  app: {
    locale: 'test',
  },
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'app/SET_LOCALE':
        if (action.saveToLocalStorage) {
          setStorage(action.type, action.payload.code)
        }

        return {
          ...state,
          app: {
            ...state.app,
            locale: action.payload,
          },
        }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
