import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'

// 模擬從伺服器來的資料
import { data } from '../data/'

function ProductDetail(props) {
  console.log(props)

  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // didMount
  useEffect(() => {
    //使用網址上的id和伺服器要資料
    const id = props.match.params.id

    const newProduct = data.find((v) => {
      return v.id === id
    })

    if (newProduct) setProduct(newProduct)
  }, [])

  return (
    <>
      <h1>Product</h1>
      <MultiLevelBreadCrumb />
      <p>
        {product.name}/{product.price}
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <p>
        HTTP 404或Not
        Found錯誤訊息是HTTP的其中一種「標準回應訊息」（HTTP狀態碼），此訊息代表客戶端在瀏覽網頁時，伺服器無法正常提供訊息，或是伺服器無法回應且不知原因。通常是因為使用者所存取的對應網頁已被刪除、移動或從未存在。404也是網際網路上最常見的錯誤之一。404錯誤訊息可能與「server
        not found」（無法找到伺服器）或其他類似訊息產生混淆。
      </p>
      <button
        onClick={() => {
          props.history.push('/product-category')
        }}
      >
        回到產品分類頁
      </button>
    </>
  )
}

export default withRouter(ProductDetail)
