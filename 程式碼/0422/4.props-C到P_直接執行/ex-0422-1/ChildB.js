import { useEffect, useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B data')

  // const sendData = () => {
  //   props.setDataFromChildB(childBData)
  // }

  useEffect(() => {
    props.setDataFromChildB(childBData)
  }, [])

  return (
    <>
      <h1>Child B</h1>

      {/* <button
        onClick={() => {
          // 觸發callback回送內部的狀態值
          props.setDataFromChildB(childBData)
        }}
      >
        送資料到Parent
      </button> */}
    </>
  )
}

export default ChildB
