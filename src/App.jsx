import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routing/AppRouting'
import AuthProvider from './context/AuthContext'
import UserProvider from './context/UserContext'
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'

export default function App() {

  const queryClient = new QueryClient()
  return (
    <>
    <AuthProvider>
    <UserProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router ={routes}/>

    </QueryClientProvider>

    </UserProvider>
    </AuthProvider>
    </>
  )
}
