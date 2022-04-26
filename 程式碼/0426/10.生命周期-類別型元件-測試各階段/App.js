import CCLifecycle from './ex-0426-3/CCLifecycle'

import { useState } from 'react'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <CCLifecycle />}
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '移除' : '呈現'}
      </button>
    </>
  )
}

export default App
