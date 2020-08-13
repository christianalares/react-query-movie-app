export const setStorage = (key, data) => {
  try {
    window.localStorage.setItem(key, data)
  } catch (error) {
    console.error(`Failed to set localStorage ${key}`)
  }
}

export const getStorage = (key) => {
  try {
    return window.localStorage.getItem(key) || null
  } catch (error) {
    console.error(`Failed to access localStorage ${key}`)
  }
}
