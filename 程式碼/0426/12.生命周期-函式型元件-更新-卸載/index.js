import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

// 注意: React 18中的strict mode會在mounts時作立即unmount又重新mount模擬
// 只有development模式會這樣，所以會有生命周期方法測試時不匹配的問題
// 可以先移除 index.js中的<React.StrictMode>元件再測試
// 參考: https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
