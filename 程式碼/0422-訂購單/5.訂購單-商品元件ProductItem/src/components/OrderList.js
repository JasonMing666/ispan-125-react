import React from 'react'
import ProductItem from './ProductItem'

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '黑色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 400,
  },
]

function OrderList(props) {
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {products.map((product, i) => {
          const { id, name, categroy, image, price } = product

          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              categroy={categroy}
              price={price}
              image={image}
            />
          )
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
