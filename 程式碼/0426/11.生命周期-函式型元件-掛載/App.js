//import CCLifecycle from './ex-0426-3/CCLifecycle'
import FCLifecycle from './ex-0426-3/FCLifecycle'

import { useState } from 'react'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <FCLifecycle />}
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
