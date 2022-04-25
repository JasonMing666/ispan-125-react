import { useState } from 'react'

function Controlled() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // 記錄選中了哪個值
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // select
  const [selectedValue, setSelectedValue] = useState('')
  const carOptions = ['volvo', 'saab', 'mercedes', 'audi']

  return (
    <>
      <section id="input-text">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="input-radio">
        <h2>選項按鈕</h2>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="select">
        <h2>下拉清單</h2>
        <label htmlFor="cars">選擇你喜歡的車子品牌:</label>
        <select
          name="cars"
          id="cars"
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          {carOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {/* 開頭轉為大寫英文 */}
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}

export default Controlled
