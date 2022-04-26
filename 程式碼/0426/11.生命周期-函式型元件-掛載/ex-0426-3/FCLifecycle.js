import { useState, useEffect } from 'react'

const initState = () => {
  console.log('初始化(類似constructor時初始工作)')
  return 0
}

function FCLifecycle() {
  const [total, setTotal] = useState(initState())

  // 模擬componentDidMount
  useEffect(() => {
    console.log('模擬 componentDidMount')
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
