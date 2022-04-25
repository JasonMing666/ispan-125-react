import './OrderPage.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

import { startTransition, useState } from 'react'

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
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 400,
  },
]

// const initState = (array) => {
//   //return array.map((v) => 1)
//   //return Array(array.length).fill(1)
//   const state = []
//   for (let i = 0; i < array.length; i++) {
//     state.push(1)
//   }
//   return state
// }

function OrderPage() {
  // [1,1]
  const [counts, setCounts] = useState(Array(products.length).fill(1))

  const totalNumber = () => {
    let total = 0
    for (let i = 0; i < counts.length; i++) {
      total += counts[i]
    }
    return total
  }

  const totalPrice = () => {
    let total = 0
    for (let i = 0; i < counts.length; i++) {
      total += counts[i] * products[i].price
    }
    return total
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList products={products} setCounts={setCounts} counts={counts} />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  )
}

export default OrderPage
