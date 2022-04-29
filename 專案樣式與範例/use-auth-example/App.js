import React, { useState } from 'react'
import { AuthProvider } from './components/useAuth'
import Parent from './components/AuthTest/Parent'

function App() {
  return (
    <>
      <AuthProvider>
        <Parent />
      </AuthProvider>
    </>
  )
}

export default App
