import { useState } from 'react'
import './HTML5Form.css'

function HTML5Form() {
  const [fields, setFields] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    birth: '',
  })

  // 記錄欄位錯誤訊自用的狀態
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    birth: '',
  })

  const fruitOptions = ['芒果', '西瓜', '芭樂']

  // 每個表單輸入時觸發onChange使用
  const handleChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)

    // 步驟1+2
    const newData = { ...fields, [e.target.name]: e.target.value }

    // 步驟3: 設定回原狀態
    setFields(newData)
  }

  // 表單通過html5驗証時會呼叫
  const handleSubmit = (e) => {
    // 阻擋表單預設行為
    e.preventDefault()

    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    // 獲取同名稱的checkbox
    console.log(formData.getAll('likeList'))

    // 作其它自訂驗証
    if (fields.password !== fields.confirmPassword) {
      alert('密碼與確認密碼不相同')
      return
    }

    // 送到伺服器…ajax…fetch...
    console.log('這裡送出表單資料到伺服器了')
  }

  // 表單出現不合法的html5驗証時會呼叫
  const handleInvalid = (e) => {
    // 阻擋表單預設行為(錯誤的泡泡訊息)
    e.preventDefault()

    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldErrors(newFieldErrors)

    //console.log(e.target.validationMessage)
  }

  // 當整個表單有變動時會觸發
  // 只是為了暫時清除錯誤訊息而已
  const handleFormChange = (e) => {
    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(newFieldErrors)
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onChange={handleFormChange}
      >
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleChange}
            required
          />
        </div>
        {fieldErrors.username !== '' && (
          <div className="error">{fieldErrors.username}</div>
        )}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
          />
        </div>
        {fieldErrors.email !== '' && (
          <div className="error">{fieldErrors.email}</div>
        )}
        <div>
          <label>密碼</label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>
        {fieldErrors.password !== '' && (
          <div className="error">{fieldErrors.password}</div>
        )}
        <div>
          <label>確認密碼</label>
          <input
            type="password"
            name="confirmPassword"
            value={fields.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>
        {fieldErrors.confirmPassword !== '' && (
          <div className="error">{fieldErrors.confirmPassword}</div>
        )}
        <div>
          <label>出生年月日</label>
          <input
            type="date"
            name="birth"
            value={fields.birth}
            onChange={handleChange}
            required
          />
        </div>
        {fieldErrors.birth !== '' && (
          <div className="error">{fieldErrors.birth}</div>
        )}

        <div>
          {fruitOptions.map((v, i) => {
            return (
              <div key={i}>
                <input type="checkbox" value={v} name="likeList" />
                <label>{v}</label>
              </div>
            )
          })}
        </div>
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTML5Form
