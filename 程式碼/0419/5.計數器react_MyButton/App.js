import { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  const [total, setTotal] = useState(0)

  const handleClick = (value) => {
    setTotal(total + value)
  }

  return (
    <>
      <h1>{total}</h1>
      <MyButton handleClick={handleClick} value={5} />
      <MyButton handleClick={handleClick} value={-99} />
      <MyButton handleClick={handleClick} value={1} />
      <MyButton handleClick={handleClick} value={-1} />
      <MyButton handleClick={handleClick} value={2} />
      <MyButton handleClick={handleClick} value={-2} />
    </>
  )
}

export default App
