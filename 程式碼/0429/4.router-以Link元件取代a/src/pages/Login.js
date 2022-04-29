import React from 'react'

function Login(props) {
  const { auth, setAuth } = props

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          setAuth(!auth)
        }}
      >
        {auth ? '登出' : '會員登入'}
      </button>
    </>
  )
}

export default Login
