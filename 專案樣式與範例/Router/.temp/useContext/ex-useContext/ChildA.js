import React from 'react'
import ThemeContext from './ThemeContext'

function ChildA() {
  return (
    <>
      <ThemeContext.Consumer>
        {(value) => (
          <>
            <p style={{ color: value.color }}>Hello World</p>
            <button onClick={() => value.setColor('red')}>Red</button>
            <button onClick={() => value.setColor('green')}>Green</button>
          </>
        )}
      </ThemeContext.Consumer>
    </>
  )
}

export default ChildA
