import React, { useEffect } from 'react'
import Router from './router/Router'
import Navbar from './components/Navbar/Navbar'
import { useAuthStore } from './store/userAuthStore'

function App() {
  const { authUser, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log("Auth user: ", authUser)

  return (
    <div>
      <Navbar />
      <Router />
    </div>
  )
}

export default App
