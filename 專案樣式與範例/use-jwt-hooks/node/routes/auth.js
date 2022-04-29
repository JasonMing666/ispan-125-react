var express = require('express')
var router = express.Router()

const jsonwebtoken = require('jsonwebtoken')
const authenticateJWT = require('../middleware/jwt')

require('dotenv').config()

// 定義安全的私鑰字串
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

// users demo data
const users = [
  { id: 1, username: 'pony', password: '11111', role: 'admin' },
  { id: 2, username: 'harry', password: '12345', role: 'user' },
  { id: 3, username: 'eddy', password: '33333', role: 'admin' },
]

let refreshTokens = []

// request new access token
router.get('/jwt-token', (req, res) => {
  //const { token } = req.body
  const token = req.cookies.refreshToken

  if (!token) {
    return res.sendStatus(401)
  }

  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403)
  }

  jsonwebtoken.verify(token, refreshTokenSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }

    const accessToken = jsonwebtoken.sign(
      { id: user.id, username: user.username, role: user.role },
      accessTokenSecret,
      { expiresIn: '60m' }
    )

    res.json({
      accessToken,
    })
  })
})

// request new csrf token
router.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() })
})

router.post('/login', (req, res) => {
  // read username and password from request body
  const { username, password } = req.body

  // filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password
  })

  if (user) {
    // generate an access token
    const accessToken = jsonwebtoken.sign(
      { id: user.id, username: user.username, role: user.role },
      accessTokenSecret,
      { expiresIn: '60m' }
    )

    // generate an refreshToken token
    const refreshToken = jsonwebtoken.sign(
      { id: user.id, username: user.username, role: user.role },
      refreshTokenSecret,
      { expiresIn: '60d' }
    )

    refreshTokens.push(refreshToken)

    // now in react state !
    //res.cookie('accessToken', accessToken, { httpOnly: true })

    // refresh token is in browser cookie
    res.cookie('refreshToken', refreshToken, { httpOnly: true })

    // only need to pass access token to react state
    // refresh token is in browser cookie
    res.json({
      accessToken,
      // refreshToken,
    })
  } else {
    res.send('Username or password incorrect')
  }
})

router.get('/logout', authenticateJWT, (req, res) => {
  refreshTokens = refreshTokens.filter((t) => t !== req.cookies.accessToken)

  // clear refresh token Cookie
  // now in react state !
  // res.clearCookie('accessToken', { httpOnly: true })
  res.clearCookie('refreshToken', { httpOnly: true })

  res.json({ message: 'Logout successful' })
})

// check login
router.get('/check-login', authenticateJWT, (req, res) => {
  res.json({ message: 'login' })
})

module.exports = router
