import React from 'react'
import { useState } from 'react'

function MyCounter(props) {
  const { value, setCountBack } = props

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + value)
          setCountBack(count + value)
        }}
      >
        +{value}
      </button>
      <button
        onClick={() => {
          setCount(count - value)
          setCountBack(count - value)
        }}
      >
        -{value}
      </button>
    </>
  )
}

export default MyCounter
