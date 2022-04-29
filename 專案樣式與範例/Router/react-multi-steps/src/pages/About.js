import React from 'react'

function About(props) {
  const { auth } = props

  return (
    <>
      <h1>About</h1>
      <p>目前登入情況: {auth ? '登入中' : '未登入'}</p>
    </>
  )
}

export default About
