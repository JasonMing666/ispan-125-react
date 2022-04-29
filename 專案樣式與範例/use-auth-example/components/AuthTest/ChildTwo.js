import React from 'react'
import { useAuth } from '../useAuth'

function ChildTwo() {
  const { auth, setAuth } = useAuth()

  return (
    <div>
      Child
      <div>auth: {auth ? 'login' : 'no login'}</div>
      <button
        onClick={() => {
          setAuth(false)
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default ChildTwo
