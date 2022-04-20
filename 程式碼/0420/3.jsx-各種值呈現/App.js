function App() {
  return (
    <>
      <h2>Number</h2>
      {123}
      {888 + 999}
      {NaN}
      <h2>String</h2>
      {'abc'}
      {`hello ${100 - 5}`}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <h2>Object</h2>
      {/* error */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>function</h2>
      {() => {
        console.log(123)
      }}
    </>
  )
}

export default App
