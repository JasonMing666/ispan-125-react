import './OrderPage.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
]

function OrderPage() {
  const [count, setCount] = useState(1)

  return (
    <div className="card">
      <div className="row">
        <OrderList products={products} count={count} setCount={setCount} />
        <Summary totalNumber={count} totalPrice={count * products[0].price} />
      </div>
    </div>
  )
}

export default OrderPage
