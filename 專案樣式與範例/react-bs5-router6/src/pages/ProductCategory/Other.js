import { useParams } from 'react-router-dom'

function Other(props) {
  const { type, id } = useParams()

  return (
    <>
      <h1>Other</h1>
      <h2>用URL Params</h2>
      <h3>產品類型 = {type}</h3>
      <h3>產品id = {id}</h3>
    </>
  )
}

export default Other
