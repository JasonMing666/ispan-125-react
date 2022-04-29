import React, { useState } from 'react'

function OrderSteps(props) {
  const [step, setStep] = useState(1)

  const cart = (
    <>
      <h2>購物車</h2>
    </>
  )

  const shippingForm = (
    <>
      <h2>運送表單</h2>
    </>
  )

  const paymentForm = (
    <>
      <h2>付款表單</h2>
    </>
  )

  const orderDetail = (
    <>
      <h2>訂購詳細</h2>
    </>
  )

  const switchStep = (step) => {
    switch (step) {
      case 1:
        return cart
      case 2:
        return shippingForm
      case 3:
        return paymentForm
      case 4:
        return orderDetail
      default:
        return cart
    }
  }

  const changeStep = (isAdded = true) => {
    if (isAdded && step < 4) setStep(step + 1)
    if (!isAdded && step > 1) setStep(step - 1)
  }

  return (
    <>
      <h1>訂購流程表單</h1>
      <div>{switchStep(step)}</div>
      {step !== 1 && (
        <button
          onClick={() => {
            changeStep(false)
          }}
        >
          上一步
        </button>
      )}
      {step !== 4 && (
        <button
          onClick={() => {
            changeStep(true)
          }}
        >
          下一步
        </button>
      )}
    </>
  )
}

export default OrderSteps
