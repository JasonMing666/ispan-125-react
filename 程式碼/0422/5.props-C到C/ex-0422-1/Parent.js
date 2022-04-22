import ChildA from './ChildA'
import ChildB from './ChildB'

import { useState } from 'react'

function Parent() {
  // 準備接收ChildB用的狀態
  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>Parent</h1>
      <hr />
      <ChildA dataFromChildB={dataFromChildB} />
      <hr />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
