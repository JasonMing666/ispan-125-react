import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

function OrderSteps(props) {
  const [step, setStep] = useState(1)

  //console.log(props.match.params.step)
  const matchStepsTable = ['one', 'two', 'three', 'four']

  useEffect(() => {
    const initStep = matchStepsTable.indexOf(props.match.params.step) + 1

    if (initStep > 0 && initStep < 5) {
      setStep(initStep)
    }
  }, [props.match.params.step])

  const cart = (
    <>
      <h2>購物車</h2>
      <p>步驟1</p>
    </>
  )

  const shippingForm = (
    <>
      <h2>運送表單</h2>
      <p>步驟2</p>
    </>
  )

  const paymentForm = (
    <>
      <h2>付款表單</h2>
      <p>步驟3</p>
    </>
  )

  const orderDetail = (
    <>
      <h2>訂購詳細</h2>
      <p>步驟4</p>
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
    if (isAdded && step < 4) {
      const newStep = step + 1
      //setStep(newStep)
      props.history.push('/order-steps/' + matchStepsTable[newStep - 1])
    }

    if (!isAdded && step > 1) {
      const newStep = step - 1
      //setStep(newStep)
      props.history.push('/order-steps/' + matchStepsTable[newStep - 1])
    }
  }

  return (
    <>
      <h1>訂購流程表單</h1>
      <ul>
        {matchStepsTable.map((v, i) => {
          return (
            <li>
              <Link to={'/order-steps/' + v}>{v}</Link>
            </li>
          )
        })}
      </ul>
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

export default withRouter(OrderSteps)
