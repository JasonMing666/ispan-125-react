import React, { useState } from 'react'
import { ColorContext, SetColorContext } from './MultipleContext'
import Parent from './Parent'

function GrandParent() {
  const [color, setColor] = useState('green')

  return (
    <ColorContext.Provider value={color}>
      <SetColorContext.Provider value={setColor}>
        <Parent />
      </SetColorContext.Provider>
    </ColorContext.Provider>
  )
}

export default GrandParent
