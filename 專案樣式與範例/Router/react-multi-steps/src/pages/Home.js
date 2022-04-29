import React from 'react'

function Home(props) {
  const { auth } = props

  return (
    <>
      <h1>Home</h1>
      <p>目前登入情況: {auth ? '登入中' : '未登入'}</p>
    </>
  )
}

export default Home
