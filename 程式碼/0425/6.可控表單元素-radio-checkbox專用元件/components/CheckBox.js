import React from 'react'

function CheckBox(props) {
  // otherProps是指其它的屬性物件值，ex. css classname...etc
  const { value, checkedValueList, setCheckedValueList, ...otherProps } = props

  const handleChange = (e) => {
    //toggle(切換)
    // 如果目前這個值在陣列中 -> 移出陣列
    if (checkedValueList.includes(e.target.value)) {
      // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
      // 2. 在拷貝出的新陣列(物件)上運算或處理
      const newLikeList = checkedValueList.filter((v, i) => {
        return v !== e.target.value
      })
      // 3. 設定回原本的狀態
      setCheckedValueList(newLikeList)
    } else {
      // 反之如果目前這個值"沒在"陣列中 -> 加入陣列
      // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
      // 2. 在拷貝出的新陣列(物件)上運算或處理
      const newLikeList = [...checkedValueList, e.target.value]

      // 3. 設定回原本的狀態
      setCheckedValueList(newLikeList)
    }
  }

  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handleChange}
        {...otherProps}
      />
      <label>{value}</label>
    </>
  )
}

export default CheckBox
