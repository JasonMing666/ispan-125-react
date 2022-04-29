import React, { useContext } from 'react'
import { ColorContext, SetColorContext } from './MultipleContext'

function ChildB() {
  const color = useContext(ColorContext)
  const setColor = useContext(SetColorContext)

  return (
    <>
      <p style={{ color: color }}>Hello World</p>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
    </>
  )
}

export default ChildB
