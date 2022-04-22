function ChildA(props) {
  return (
    <>
      <h1>Child A</h1>
      來自Child B資料: {props.dataFromChildB}
    </>
  )
}

export default ChildA
