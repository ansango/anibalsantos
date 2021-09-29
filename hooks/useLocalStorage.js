import { useEffect, useState } from 'react'

const useLocalStorage = (defaultValue, key) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const localStorage = window.localStorage.getItem(key)

    if (localStorage !== null) {
      setValue(JSON.parse(localStorage))
    }
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
