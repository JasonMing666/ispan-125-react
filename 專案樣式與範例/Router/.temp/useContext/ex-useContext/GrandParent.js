import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import Parent from './Parent'

function GrandParent() {
  const [color, setColor] = useState('green')

  return (
    <ThemeContext.Provider value={{ color: color, setColor: setColor }}>
      <Parent />
    </ThemeContext.Provider>
  )
}

export default GrandParent
