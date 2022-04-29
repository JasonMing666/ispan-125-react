import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'

// 模擬從伺服器來的資料
import { data } from '../data'

function ProductDetailQS(props) {
  console.log(props)

  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // didMount
  useEffect(() => {
    //使用網址上的id和伺服器要資料
    const paramsString = props.location.search
    const searchParams = new URLSearchParams(paramsString)

    const id = searchParams.get('id')

    const newProduct = data.find((v) => {
      return v.id === id
    })

    if (newProduct) setProduct(newProduct)
  }, [])

  return (
    <>
      <h1>Product</h1>
      <MultiLevelBreadCrumb />
      <p>
        {product.name}/{product.price}
      </p>
      <button
        onClick={() => {
          props.history.push('/product-category')
        }}
      >
        回到產品分類頁
      </button>
    </>
  )
}

export default withRouter(ProductDetailQS)
