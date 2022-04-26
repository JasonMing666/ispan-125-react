import { useState, useEffect } from 'react'

function FCLifecycle() {
  const [total, setTotal] = useState(0)

  // 模擬componentDidMount
  useEffect(() => {
    console.log('模擬 componentDidMount')
  }, [])

  // 模擬componentDidUpdate + componentDidMount
  useEffect(() => {
    console.log('模擬 componentDidUpdate + componentDidMount(相依於total更動)')
    console.log('total=', total)
  }, [total])

  // 模擬componentDidUpdate
  useEffect(() => {
    if (total > 0) {
      console.log('模擬 componentDidUpdate(相依於total更動)')
      console.log('total=', total)
    }
  }, [total])

  // 模擬componentWillUnmount
  useEffect(() => {
    return () => {
      //willunmount
      console.log('模擬 componentWillUnmount')
    }
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
