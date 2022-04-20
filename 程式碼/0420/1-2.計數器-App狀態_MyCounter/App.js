import { useState } from 'react'
import MyCounter from './components/MyCounter'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <MyCounter value={2} setCountBack={setCount1}/>
      <MyCounter value={5} setCountBack={setCount2}/>
    </>
  )
}

export default App
