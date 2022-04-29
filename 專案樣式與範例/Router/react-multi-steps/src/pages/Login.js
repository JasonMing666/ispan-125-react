import React from 'react'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'

function Login(props) {
  console.log(props)

  const { auth, setAuth } = props

  return (
    <>
      <h1>Login</h1>
      <MultiLevelBreadCrumb />
      <p>目前登入情況: {auth ? '登入中' : '未登入'}</p>
      <button
        onClick={() => {
          setAuth(true)
          //出現歡迎訊息
          alert('你好，登入已完成！')
          //跳回首頁
          props.history.push('/')
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          props.history.push('/about')
        }}
      >
        連到 關於我們
      </button>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到上一頁
      </button>
    </>
  )
}

export default withRouter(Login)
