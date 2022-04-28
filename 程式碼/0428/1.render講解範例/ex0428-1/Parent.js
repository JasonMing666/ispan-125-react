import React, { useState, useEffect } from 'react'
import Child from './Child'

function Parent() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)



  return (
    <>
      <div>Parent</div>
      <button
        onClick={() => {
          setCount(1)
        }}
      >
        Set Count = 1
      </button>
      <button
        onClick={() => {
          setFlag(!flag)
        }}
      >
        Toggle flag
      </button>
      <hr />
      <Child count={count} />
    </>
  )
}

export default Parent
