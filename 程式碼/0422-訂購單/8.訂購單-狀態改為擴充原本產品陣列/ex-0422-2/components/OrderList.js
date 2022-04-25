import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { productsInOrder, setProductsInOrder } = props

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
        {productsInOrder.map((product, i) => {
          const { id, name, category, image, price, count } = product

          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              category={category}
              price={price}
              image={image}
              count={count}
              setCount={(newCount) => {
                // 1. 從原本的狀態陣列拷貝出來一個新陣列
                const newProductsInOrder = [...productsInOrder]

                // 2. 在這新陣列上作處理
                // 如果小於1則用1
                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount

                // 3. 設定回原狀態
                setProductsInOrder(newProductsInOrder)
              }}
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
