import ChildA from './ChildA'
import ChildB from './ChildB'

import { useState } from 'react'

function Parent() {
  const [parentData, setParentData] = useState('parent data')

  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>Parent</h1>
      <hr />
      <ChildA parentData={parentData} />
      <hr />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
