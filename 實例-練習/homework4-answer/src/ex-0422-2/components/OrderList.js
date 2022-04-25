import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { productsInOrder, setProductsInOrder } = props

  const setCount = (newCount, i) => {
    //1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
    const newProductsInOrder = [...productsInOrder]

    //2. 在拷貝出的新陣列(物件)上運算或處理
    // 更新陣列中對應的商品數量
    newProductsInOrder[i].count = newCount < 1 ? 1 : newCount

    //3. 設定回原本的狀態
    setProductsInOrder(newProductsInOrder)
  }

  // 處理項目刪除用
  const handleDelete = (id) => {
    //1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
    //2. 在拷貝出的新陣列(物件)上運算或處理
    const newProductsInOrder = [...productsInOrder].filter((v, i) => {
      return v.id !== id
    })

    //3. 設定回原本的狀態
    setProductsInOrder(newProductsInOrder)
  }

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
        {productsInOrder.map((v, i) => {
          return (
            <ProductItem
              key={v.id}
              name={v.name}
              category={v.category}
              image={v.image}
              price={v.price}
              count={v.count}
              handleDelete={() => {
                handleDelete(v.id)
              }}
              setCount={(newCount) => {
                setCount(newCount, i)
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
