import './OrderPage.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

import { useState } from 'react'

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
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 400,
  },
  {
    id: 3,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 100,
  },
]

// 擴充原本的商品陣列，多一個count屬性
const initState = (products) => {
  // 用for迴圈的語法
  // const state = []
  // for (let i = 0; i < products.length; i++) {
  //   state.push({ ...products[i], count: 1 })
  // }
  // return state

  // 用map的語法
  return products.map((v) => {
    return { ...v, count: 1 }
  })
}

function OrderPage() {
  // [
  //   {
  //     id: 1,
  //     name: '咖啡色 T-shirt',
  //     category: 'Shirt',
  //     image: 'https://i.imgur.com/1GrakTl.jpg',
  //     price: 300,
  //     count:1
  //   }
  // ]
  const [productsInOrder, setProductsInOrder] = useState(initState(products))

  const totalNumber = () => {
    let total = 0
    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count
    }
    return total
  }

  const totalPrice = () => {
    let total = 0
    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count * productsInOrder[i].price
    }
    return total
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  )
}

export default OrderPage
