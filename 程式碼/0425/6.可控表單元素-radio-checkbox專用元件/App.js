import { useState } from 'react'
import CheckBox from './components/CheckBox'
import RadioButton from './components/RadioButton'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // radio group
  const [radioValue, setRadioValue] = useState('')
  const foodOptions = ['排骨飯', '雞腿飯', '牛肉面']

  // radio - 專用元件
  const [gender2, setGender2] = useState('')
  // radio - 選項
  const genderOptions = ['男', '女', '不提供']

  // select
  const [selectedValue, setSelectedValue] = useState('')

  // single checkbox - agree
  const [agree, setAgree] = useState(false)

  // checkbox group
  const [likeList, setLikeList] = useState([])
  const fruitOptions = ['西瓜', '芒果', '芭樂']

  // checkbox group(專用元件)
  const [likeList2, setLikeList2] = useState([])
  const fruitOptions2 = ['西瓜', '芒果', '香蕉', '龍眼']

  return (
    <>
      <h1>可控表單元素</h1>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h2>文字輸入區域</h2>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value)
        }}
      />
      <h2>選項按鈕(群組)</h2>
      {foodOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value)
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        )
      })}
      <h2>下拉清單</h2>
      <label htmlFor="cars">選擇車子:</label>
      <select
        name="cars"
        id="cars"
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <h2>核取方塊(單一)</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意會員註冊條款</label>
      <h2>核取方塊(群組)</h2>
      <p>選擇你喜歡的水果</p>
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={v}
              checked={likeList.includes(v)}
              onChange={(e) => {
                //先判斷是否有在狀態陣列中
                const inState = likeList.includes(e.target.value)

                if (inState) {
                  //if 在陣列中 -> 移除
                  const newLikeList = likeList.filter(
                    (v, i) => v !== e.target.value
                  )
                  setLikeList(newLikeList)
                } else {
                  //else  -> 加入陣列
                  const newLikeList = [...likeList, e.target.value]
                  setLikeList(newLikeList)
                }
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}
      <h2>選項按鈕(專用元件)</h2>
      {genderOptions.map((v, i) => {
        return (
          <RadioButton
            key={i}
            value={v}
            checkedValue={gender2}
            className="form-check-input"
            setCheckedValue={setGender2}
          />
        )
      })}

      <h2>多個核取方塊(專用元件)</h2>
      {fruitOptions2.map((v, i) => {
        return (
          <CheckBox
            key={i}
            value={v}
            className="form-check-input"
            checkedValueList={likeList2}
            setCheckedValueList={setLikeList2}
          />
        )
      })}
    </>
  )
}

export default App
