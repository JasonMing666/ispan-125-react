import { useState, useEffect } from 'react'

const initState = () => {
  console.log('相當於constructor')
  return 0
}

function FCLifecycle() {
  const [total, setTotal] = useState(initState())

  // 模擬componentDidMount
  useEffect(() => {
    console.log('模擬componentDidMount')
  }, [])

  return (
    <>
      {console.log('模擬 render')}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FCLifecycle
