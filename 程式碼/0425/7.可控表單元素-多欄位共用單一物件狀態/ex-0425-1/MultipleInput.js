import { useState } from 'react'

function MultipleInput() {
  const [userData, setUserData] = useState({ fullname: '', phone: '' })

  const handleChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)

    // 步驟1+2
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUserData = { ...userData, [e.target.name]: e.target.value }

    // 步驟3: 設定回原狀態
    setUserData(newUserData)
  }

  return (
    <>
      <div>
        <label>姓名</label>
        <input
          type="text"
          name="fullname"
          value={userData.fullname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>電話</label>
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default MultipleInput
