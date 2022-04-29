import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import { useCart } from 'utils/useCart'

// 商品範例
import products from 'data/products.json'

function ProductList(props) {
  // 對話盒使用
  const [show, setShow] = useState(false)
  // 對話盒中的商品名稱
  const [productName, setProductName] = useState('')

  const { addItem } = useCart()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = (name) => {
    setProductName('產品：' + name + '已成功加入購物車')
    handleShow()
  }

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            // 導向購物車頁面
            props.history.push('/')
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const display = (
    <div className="card-columns">
      {products.map((v, i) => {
        return (
          <div className="card" key={v.id}>
            <img src={v.picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{v.name}</h5>
              <p className="card-text">
                這裡只是放一些商品的描述說明。這裡只是放一些商品的描述說明。
              </p>
              <p className="card-text text-danger">NTD {v.price}元</p>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  // 商品原本無數量屬性(quantity)，要先加上
                  const item = { ...v, quantity: 1 }
                  // 注意: 重覆加入會自動+1產品數量
                  addItem(item)
                  // 呈現跳出對話盒
                  showModal(v.name)
                }}
              >
                加入購物車
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      <h1>商品列表頁範例</h1>
      <p className="text-nowrap bd-highlight">/pages/Product/ProductList.js</p>
      {messageModal}
      {display}
    </>
  )
}

export default withRouter(ProductList)
