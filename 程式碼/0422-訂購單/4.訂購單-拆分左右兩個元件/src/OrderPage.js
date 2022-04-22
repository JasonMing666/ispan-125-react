import './OrderPage.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

function OrderPage() {
  return (
    <div className="card">
      <div className="row">
        <OrderList />
        <Summary />
      </div>
    </div>
  )
}

export default OrderPage
