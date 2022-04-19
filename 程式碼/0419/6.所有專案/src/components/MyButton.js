function MyButton(props) {
  return (
    <>
      <button onClick={() => props.handleClick(props.value)}>
        {props.value > 0 ? '+' : ''}
        {props.value}
      </button>
    </>
  )
}

export default MyButton
