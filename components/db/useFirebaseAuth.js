import { useEffect, useState } from 'react'
import firebase from '@/lib/firebase'

const formatAuthUser = (user) => ({ uid: user.uid, email: user.email })

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
    }

    setLoading(true)
    const formattedUser = formatAuthUser(authState)
    setAuthUser(formatAuthUser)
    setLoading(false)
  }

  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged(authStateChanged)
    return () => unsuscribe()
  })
  return { authUser, loading }
}

export default useFirebaseAuth
