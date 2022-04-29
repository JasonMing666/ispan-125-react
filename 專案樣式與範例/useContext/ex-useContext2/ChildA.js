import React from 'react'
import { ColorContext, SetColorContext } from './MultipleContext'

function ChildA() {
  return (
    <>
      <ColorContext.Consumer>
        {(color) => (
          <SetColorContext.Consumer>
            {(setColor) => (
              <>
                <p style={{ color: color }}>Hello World</p>
                <button onClick={() => setColor('red')}>Red</button>
                <button onClick={() => setColor('green')}>Green</button>
              </>
            )}
          </SetColorContext.Consumer>
        )}
      </ColorContext.Consumer>
    </>
  )
}

export default ChildA
