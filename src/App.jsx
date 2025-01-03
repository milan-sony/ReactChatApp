import React, { useEffect } from 'react'
import Router from './router/Router'
import Navbar from './components/Navbar/Navbar'
import { userAuthStore } from './store/userAuthStore'
import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast';

function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = userAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
  )

  return (
    <div>
      <Navbar />
      <Router />
      <Toaster />
    </div>
  )
}

export default App
