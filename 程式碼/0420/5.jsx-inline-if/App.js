import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {total > 0 && <p>Message: count 大於0</p>}
    </>
  )
}

export default App
