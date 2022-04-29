import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '../useAuth'

function Child() {
  const { auth, setAuth } = useAuth()

  return (
    <div>
      Child
      <div>auth: {auth ? 'login' : 'no login'}</div>
      <button
        onClick={() => {
          setAuth(true)
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Child
