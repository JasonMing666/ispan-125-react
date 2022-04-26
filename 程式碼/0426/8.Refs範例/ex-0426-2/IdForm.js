function IdForm() {
  return (
    <>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        focus
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        blur
      </button>
      <button
        onClick={() => {
          console.log(document.getElementById('my-input').value)
        }}
      >
        get value
      </button>
    </>
  )
}

export default IdForm
