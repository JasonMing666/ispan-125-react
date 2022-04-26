import { useState } from 'react'
import './HTML5Form.css'

function HTML5Form() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birth, setBirth] = useState('')

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form>
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
