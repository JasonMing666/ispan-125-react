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

  // checkbox (單一)
  const [agree, setAgree] = useState(false)

  // checkbox (多選)
  const [likeList, setLikeList] = useState(['芒果', '西瓜'])

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
      <section id="input-checkbox-single">
        <h2>核取方塊(單一)</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我同意網站新會員註冊條款</label>
      </section>
      <section id="input-checkbox-group">
        <h2>核取方塊(群組)</h2>
        <input
          type="checkbox"
          value="西瓜"
          checked={likeList.includes('西瓜')}
          onChange={(e) => {
            // 先判斷是否有在陣列中
            const inState = likeList.includes(e.target.value)

            // 如果有的話  從陣列中移除
            if (inState) {
              // 步驟1+2
              const newLikeList = likeList.filter(
                (v, i) => v !== e.target.value
              )
              //  設定回狀態 步驟3
              setLikeList(newLikeList)
            } else {
              // 如果沒有就加入陣列
              // 步驟1+2
              const newLikeList = [...likeList, e.target.value]
              //  設定回狀態 步驟3
              setLikeList(newLikeList)
            }
          }}
        />
        <label>西瓜</label>
        <input
          type="checkbox"
          value="芒果"
          checked={likeList.includes('芒果')}
          onChange={(e) => {
            // 先判斷是否有在陣列中
            const inState = likeList.includes(e.target.value)

            // 如果有的話
            if (inState) {
              // 從陣列中移除
              const newLikeList = likeList.filter(
                (v, i) => v !== e.target.value
              )

              setLikeList(newLikeList)
            } else {
              // 如果沒有就加入陣列
              const newLikeList = [...likeList, e.target.value]

              setLikeList(newLikeList)
            }
          }}
        />
        <label>芒果</label>
      </section>
    </>
  )
}

export default Controlled
