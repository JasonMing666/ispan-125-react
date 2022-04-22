import { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B data')

  return (
    <>
      <h1>Child B</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(childBData)
        }}
      >
        送資料到Parent
      </button>
    </>
  )
}

export default ChildB
