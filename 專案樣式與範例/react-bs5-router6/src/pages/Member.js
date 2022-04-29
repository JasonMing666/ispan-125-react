import React from 'react'
import { Navigate } from 'react-router-dom'
import { withRouter } from '../utils/withRouter'

function Member(props) {
  const { auth } = props

  if (!auth) return <Navigate to="/login" replace={true} />

  //   if (!auth)
  //     return (
  //       <Redirect>
  //         你沒登入，請連到<Link to="/login">登入頁面</Link>
  //       </Redirect>
  //     )

  return (
    <>
      <h1>會員專區</h1>
    </>
  )
}

export default withRouter(Member)
