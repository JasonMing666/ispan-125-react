import { useReducer } from 'react'

// 1. 決定初始狀態
const initialState = { total: 0 }

// 2. reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { total: state.total + action.payload.value }
    case 'sub':
      return { total: state.total - action.payload.value }
    default:
      throw new Error()
  }
}

function App() {
  // 3. 宣告state, dispatch
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>{state.total}</h1>
      <button onClick={() => dispatch({ type: 'add', payload: { value: 10 } })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: 'sub', payload: { value: 5 } })}>
        -5
      </button>
    </>
  )
}

export default App
