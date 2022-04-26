import { useState } from 'react'
import './HTML5Form.css'

function HTML5Form() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birth, setBirth] = useState('')

  // 表單通過html5驗証時會呼叫
  const handleSubmit = (e) => {
    // 阻擋表單預設行為
    e.preventDefault()

    // 作其它自訂驗証
    if (password !== confirmPassword) {
      alert('密碼與確認密碼不相同')
      return
    }

    // 送到伺服器…ajax…fetch...
    console.log('這裡送出表單資料到伺服器了')
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
        </div>
        <div>
          <label>密碼</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            minLength={6}
          />
        </div>
        <div>
          <label>確認密碼</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
            required
            minLength={6}
          />
        </div>
        <div>
          <label>出生年月日</label>
          <input
            type="date"
            name="birth"
            value={birth}
            onChange={(e) => {
              setBirth(e.target.value)
            }}
            required
          />
        </div>
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTML5Form
