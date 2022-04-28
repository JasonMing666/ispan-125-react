import React from 'react'

function Child(props) {
  return (
    <>
      <div>Child</div>
      count from parent: {props.count}
    </>
  )
}

export default Child
