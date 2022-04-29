import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/product'

function ProductClothingList(props) {

  return (
    <>
      <h1>ProductClothingList</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link to={`/product-clothing-detail/${v.id}`}>
                {v.name}/{v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductClothingList
