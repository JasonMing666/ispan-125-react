import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useJwtCsrfToken } from './utils/csrf-hook/useJwtCsrfToken'
//import Spinner from './components/Spinner'
import { useSpinner } from './utils/spinner-hook/useSpinner'

function Demo() {
  const [newFoodMessage, setNewFoodMessage] = useState(null)

  //const storedJwt = localStorage.getItem('token')
  // const [jwtToken, setJwtToken] = useState('')
  // const [jwtDecodedData, setJwtDecodeData] = useState(initialUser)
  const [foods, setFoods] = useState([])
  const [fetchError, setFetchError] = useState('')
  //const [loading, setLoading] = useState(false)

  const {
    csrfToken,
    jwtToken,
    jwtDecodedData,
    login,
    logout,
    getNewAccessToken,
    init,
    auth,
  } = useJwtCsrfToken()

  const { spinner, setLoading } = useSpinner(1300)

  init(axios)

  const createFood = async () => {
    try {
      const { data } = await axios.post('/products/foods')
      setNewFoodMessage(data.message)
      setFetchError(null)
    } catch (err) {
      setFetchError(err.message)
    }
  }

  const getFoods = async () => {
    setLoading(true)

    try {
      const { data } = await axios.get(`/products/foods`)
      setFoods(data)
      setFetchError('')
    } catch (err) {
      setFetchError(err.message)
    }
  }

  return (
    <>
      {spinner}
      <section>
        <button onClick={() => getFoods()}>Get Foods</button>
        <ul>
          {foods.map((food, i) => (
            <li key={food.id}>{food.description}</li>
          ))}
        </ul>
        {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
      </section>
      <section>
        <button onClick={() => createFood()}>Create New Food</button>
        {newFoodMessage && <p>{newFoodMessage}</p>}
      </section>
      <section style={{ marginBottom: '10px' }}>
        <button
          onClick={() => {
            logout()
            setFoods([])
          }}
        >
          Logout
        </button>
      </section>
      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => login({ username: 'eddy', password: '33333' })}>
          login
        </button>
      </section>
      <section style={{ marginBottom: '10px' }}>
        <h2>Debug</h2>
        <p>CSRF Token: {csrfToken}</p>
        <p style={{ wordWrap: 'break-word', width: '500px' }}>
          Access Token: {jwtToken}
        </p>
        <p>Token Decoded Data: {Object.entries(jwtDecodedData).join(' ')}</p>
      </section>
    </>
  )
}

export default Demo
