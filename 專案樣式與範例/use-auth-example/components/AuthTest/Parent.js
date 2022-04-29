import React from 'react'
import Child from './Child'
import ChildTwo from './ChildTwo'
import { useAuth } from '../useAuth'

function Parent(props) {
  const { auth } = useAuth()

  return (
    <div>
      Parent
      <div>auth: {auth ? 'login' : 'no login'}</div>
      <Child />
      <ChildTwo />
    </div>
  )
}

export default Parent
