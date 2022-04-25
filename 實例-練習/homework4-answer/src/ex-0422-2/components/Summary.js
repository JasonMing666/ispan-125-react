import { useState } from 'react'

function Summary(props) {
  const { productCount, subTotal, total, setShippingFee } = props

  const [selectedValue, setSelectedValue] = useState('')

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style">共 {productCount} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">小計</div>
          <div className="col text-right">${subTotal}</div>
        </div>
        <div className="row  row-style">
          <select
            class="custom-select"
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value)

              setShippingFee(Number(e.target.value))
            }}
          >
            <option value="">請選擇運送方式</option>
            <option value="200">郵局+200</option>
            <option value="250">快遞+250</option>
          </select>
        </div>
        <div className="row row-style">
          <div className="col">總計</div>
          <div className="col text-right">${total > 0 && total}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  )
}

export default Summary
