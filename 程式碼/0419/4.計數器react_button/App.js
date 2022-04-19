import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  const handleClick = (value) => () => {
    setTotal(total + value)
  }

  return (
    <>
      <h1>{total}</h1>
      <button onClick={handleClick(1)}>+1</button>
      <button onClick={handleClick(-1)}>-1</button>
    </>
  )
}

export default App
