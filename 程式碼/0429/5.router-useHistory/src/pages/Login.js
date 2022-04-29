import React from 'react'
import { useHistory } from 'react-router-dom'

function Login(props) {
  const { auth, setAuth } = props

  const history = useHistory()

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          setAuth(!auth)

          // 呈現歡迎訊息
          alert('你好，歡迎')

          //導向會員頁面
          history.push('/user')
        }}
      >
        {auth ? '登出' : '會員登入'}
      </button>
      <hr />
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        返回上一頁
      </button>
    </>
  )
}

export default Login
