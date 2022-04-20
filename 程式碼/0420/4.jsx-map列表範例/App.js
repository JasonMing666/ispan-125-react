function App() {
  const todos = [
    { id: 1, text: '學REACT' },
    { id: 2, text: '學HTML' },
  ]

  return (
    <ul>
      {todos.map((v, i) => {
        return <li key={v.id}>{v.text}</li>
      })}
    </ul>
  )
}

export default App
