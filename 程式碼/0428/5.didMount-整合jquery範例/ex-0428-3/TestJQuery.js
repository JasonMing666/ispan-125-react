import React, { useEffect } from 'react'
import $ from 'jquery'

function TestJQuery(props) {
  // didMount
  useEffect(() => {
    // jquery程式碼要寫在這
    // Equivalent event setup using the `.on()` method
    $('p').on('click', function () {
      console.log('click')
    })
  }, [])

  return (
    <>
      <h1>TestJQuery</h1>
      <p>123</p>
    </>
  )
}

export default TestJQuery
