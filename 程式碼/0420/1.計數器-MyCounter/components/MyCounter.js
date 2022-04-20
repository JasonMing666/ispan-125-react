import { useState } from 'react'

function MyCounter(props) {
  const { value } = props

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + value)
        }}
      >
        +{value}
      </button>
      <button
        onClick={() => {
          setCount(count - value)
        }}
      >
        -{value}
      </button>
    </>
  )
}

export default MyCounter
