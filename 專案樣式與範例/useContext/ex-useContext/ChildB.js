import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ChildB() {
  const { color, setColor } = useContext(ThemeContext)

  return (
    <>
      <p style={{ color: color }}>Hello World</p>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
    </>
  )
}

export default ChildB
