import { useState } from 'react'

function Controlled() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // 記錄選中了哪個值
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

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
    </>
  )
}

export default Controlled
