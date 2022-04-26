import { useRef } from 'react'

function RefsForm() {
  const inputRef = useRef(null)

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        focus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        blur
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        get value
      </button>
    </>
  )
}

export default RefsForm
