import ChildA from './ChildA'
import ChildB from './ChildB'

import { useState } from 'react'

function Parent() {
  // 傳給ChildA的狀態
  const [parentData, setParentData] = useState('parent data')

  // 準備接收ChildB用的狀態
  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>Parent</h1>
      從ChildB來的資料: {dataFromChildB}
      <hr />
      <ChildA parentData={parentData} />
      <hr />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
