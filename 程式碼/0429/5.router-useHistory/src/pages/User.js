import React from 'react'

function User(props) {
  const { auth } = props

  return (
    <>
      <h1>會員頁面 User</h1>
      {auth ? '已登入' : '尚未登入'}
    </>
  )
}

export default User
