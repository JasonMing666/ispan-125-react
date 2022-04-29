import { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'
import jwt from 'jwt-decode'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

import {
  jwtTokenUrl,
  csrfTokenUrl,
  loginUrl,
  logoutUrl,
  checkLoginUrl,
} from './server-config'

const JwtCsrfTokenContext = createContext()

const initialUser = {
  id: 0,
  username: '',
  role: '',
  exp: 0,
  iat: 0,
}

export const JwtCsrfTokenProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState('')
  const [jwtToken, setJwtToken] = useState('')
  const [jwtDecodedData, setJwtDecodeData] = useState(initialUser)
  const [auth, setAuth] = useState(false)

  const refreshAuthLogic = (failedRequest) =>
    axios
      .get(jwtTokenUrl, { skipAuthRefresh: true })
      .then((tokenRefreshResponse) => {
        // localStorage.setItem('token', tokenRefreshResponse.data.token)
        // failedRequest.response.config.headers['Authorization'] =
        //   'Bearer ' + tokenRefreshResponse.data.token
        failedRequest.response.config.headers['Authorization'] =
          tokenRefreshResponse.data.accessToken

        setJwtToken(tokenRefreshResponse.data.accessToken)
        setJwtDecodeData(jwt(tokenRefreshResponse.data.accessToken))
        return Promise.resolve()
      })
      .catch((e) => {
        // TODO: handle redirect to login page
        // setFetchError(e.message)
        //window.location.reload(false)
      })

  const getCsrfToken = async () => {
    try {
      const { data } = await axios.get(csrfTokenUrl)
      setCsrfToken(data.csrfToken)
      axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken
    } catch (e) {
      console.error(e)
    }
  }

  // get csrf token first
  useEffect(() => {
    getCsrfToken()
    // check login or refresh access token if has refresh token
    checkLogin()
  }, [])

  // if react has jwtToken use it
  useEffect(() => {
    if (jwtToken) axios.defaults.headers.common['Authorization'] = jwtToken
  }, [jwtToken])

  const init = (axios) => {
    // Instantiate the interceptor
    createAuthRefreshInterceptor(axios, refreshAuthLogic, {
      statusCodes: [401, 403],
    })
  }

  const login = async ({ username, password }) => {
    try {
      const { data } = await axios.post(loginUrl, {
        username,
        password,
      })

      // access token in state(memory)
      // but refresh token in cookie(httpOnly)
      axios.defaults.headers.common['Authorization'] = data.accessToken

      setJwtToken(data.accessToken)
      setJwtDecodeData(jwt(data.accessToken))
    } catch (e) {
      console.error(e)
    }
  }

  const checkLogin = async () => {
    try {
      const { data } = await axios.get(checkLoginUrl)
      console.log(data.message)
      if (data.message) setAuth(true)
    } catch (e) {
      console.error(e)
    }
  }

  const logout = async () => {
    const { data } = await axios.get(logoutUrl)
    console.log(data.message)

    // no default headers now
    // cookie will clear from express server(refreshToken)
    axios.defaults.headers.common['Authorization'] = ''

    // set all state to initial state
    setJwtToken('')
    // setCsrfToken('')
    setJwtDecodeData(initialUser)
  }

  const getNewAccessToken = async () => {
    const { data } = await axios.get(jwtTokenUrl)

    // access token in state(memory)
    // but refresh token in cookie(httpOnly)
    axios.defaults.headers.common['Authorization'] = data.accessToken

    setJwtToken(data.accessToken)
    setJwtDecodeData(jwt(data.accessToken))
  }

  return (
    <JwtCsrfTokenContext.Provider
      value={{
        csrfToken,
        jwtToken,
        jwtDecodedData,
        login,
        logout,
        getNewAccessToken,
        init,
        auth,
      }}
    >
      {children}
    </JwtCsrfTokenContext.Provider>
  )
}

export const useJwtCsrfToken = () => useContext(JwtCsrfTokenContext)
