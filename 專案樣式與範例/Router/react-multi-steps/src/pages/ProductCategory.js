import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'

// 模擬從伺服器來的資料
import { data } from '../data/'

function ProductCategory(props) {
  const [products, setProducts] = useState([])

  // didMount
  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <>
      <h1>ProductCategory</h1>
      <MultiLevelBreadCrumb />
      <h2>使用match.params</h2>
      <ul>
        {products.map((v, i) => {
          return (
            <li>
              <Link to={'/product-category/product-detail/' + v.id}>
                {v.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <h2>使用url query string(search params)</h2>
      <ul>
        {products.map((v, i) => {
          return (
            <li>
              <Link to={'/product-category/product-detail-qs/?id=' + v.id}>
                {v.name}
              </Link>
            </li>
          )
        })}
      </ul>
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
    </>
  )
}

export default ProductCategory
