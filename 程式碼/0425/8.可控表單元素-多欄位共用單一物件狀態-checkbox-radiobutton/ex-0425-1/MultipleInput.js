import { useState } from 'react'

function MultipleInput() {
  const [userData, setUserData] = useState({
    fullname: '',
    phone: '',
    gender: '',
    agree: false,
    likeList: [],
  })

  const genderOptions = ['男', '女', '不提供']

  const fruitOptions = ['芒果', '西瓜', '芭樂']

  const handleChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)

    if (e.target.name === 'likeList') {
      // 先判斷是否有在陣列中
      const inState = userData.likeList.includes(e.target.value)

      // 如果有的話  從陣列中移除
      if (inState) {
        // 步驟1+2
        const newLikeList = userData.likeList.filter(
          (v, i) => v !== e.target.value
        )
        //  設定回狀態 步驟3
        setUserData({ ...userData, likeList: newLikeList })
      } else {
        // 如果沒有就加入陣列
        // 步驟1+2
        const newLikeList = [...userData.likeList, e.target.value]
        //  設定回狀態 步驟3
        setUserData({ ...userData, likeList: newLikeList })
      }

      return
    }

    if (e.target.name === 'agree') {
      const newUserData = { ...userData, [e.target.name]: e.target.checked }

      // 步驟3: 設定回原狀態
      setUserData(newUserData)

      return
    }

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
      <div>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                name="gender"
                checked={userData.gender === v}
                value={v}
                onChange={handleChange}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </div>
      <div>
        <input
          type="checkbox"
          name="agree"
          checked={userData.agree}
          onChange={handleChange}
        />
        <label>我同意網站新會員註冊條款</label>
      </div>
      <div>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                name="likeList"
                checked={userData.likeList.includes(v)}
                onChange={handleChange}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MultipleInput
