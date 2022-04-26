import React from 'react'

class CCLifecycle extends React.Component {
  constructor() {
    super()
    this.state = { total: 0 }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // 注意: React 18中的strict mode會在mounts時作立即unmount又重新mount模擬
  // 只有development模式會這樣，所以會有不匹配的問題
  // 可以先移除 index.js中的<React.StrictMode>元件再測試
  // 參考: https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CCLifecycle
