import { useState } from 'react'

import './OrderPage.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
]

// 初始化狀態用的函式
// const initState = (array) => {
//   const state = []

//   for (let i = 0; i < array.length; i++) {
//     state.push(1)
//   }

//   return state
// }

const initStateWithObject = (products) => {
  const state = []

  for (let i = 0; i < products.length; i++) {
    state.push({ ...products[i], count: 1 })
  }

  return state
}

function OrderPage() {
  // 多樣產品狀態：陣列
  // ex. 三樣商品 -> [1,1,1]
  //const [counts, setCounts] = useState(initState(products))
  //const [counts, setCounts] = useState(Array(products.length).fill(1))

  // 多樣產品狀態：物件
  // [{
  //   id: 1,
  //   name: '咖啡色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 300,
  //   count: 1
  // }]
  const [productsInOrder, setProductsInOrder] = useState(
    initStateWithObject(products)
  )

  // 運費
  const [shippingFee, setShippingFee] = useState(0)

  // Summary
  // 計算目前商品數量
  const productCount = () => {
    let totalCount = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      totalCount += productsInOrder[i].count
    }

    return totalCount
  }

  const subTotal = () => {
    let sum = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }

    return sum
  }

  const total = () => {
    let sum = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }

    // 加入運費
    return shippingFee ? sum + shippingFee : 0
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary
          setShippingFee={setShippingFee}
          productCount={productCount()}
          subTotal={subTotal()}
          total={total()}
        />
      </div>
    </div>
  )
}

export default OrderPage
