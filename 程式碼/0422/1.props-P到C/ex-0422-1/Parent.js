import ChildA from './ChildA'
import ChildB from './ChildB'

import { useState } from 'react'

function Parent() {
  const [parentData, setParentData] = useState('parent data')

  return (
    <>
      <h1>Parent</h1>
      <hr />
      <ChildA data={parentData} />
      <hr />
      <ChildB />
    </>
  )
}

export default Parent
