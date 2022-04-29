import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/product'

function ProductClothingDetail(props) {
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    categroy: '',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 0,
  })

  const params = useParams()
  console.log(params.productId)

  // didmount
  useEffect(() => {
    const item = products.find((v) => String(v.id) === String(params.productId))

    if (item) {
      setProduct(item)
    }
  }, [])

  return (
    <>
      <h1>ProductClothingDetail</h1>
      <p>產品id: {params.productId}</p>
      <p>name:{product.name}</p>
      <p>price:{product.price}</p>
    </>
  )
}

export default ProductClothingDetail
