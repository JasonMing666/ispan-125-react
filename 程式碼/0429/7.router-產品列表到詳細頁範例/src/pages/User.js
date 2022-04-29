import React from 'react'
import { useLocation } from 'react-router-dom'

function User(props) {
  const location = useLocation()
  console.log(location)

  const { auth } = props

  return (
    <>
      <h1>會員頁面 User</h1>
      {auth ? '已登入' : '尚未登入'}
    </>
  )
}

export default User
