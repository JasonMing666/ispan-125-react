const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config()

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
//const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

module.exports = function authenticateJWT(req, res, next) {
  // get access token from react request
  if (!req.headers.authorization) {
    return res.sendStatus(403)
  }

  // use headers from react state
  const token = req.headers['authorization']
  //const token = req.cookies.accessToken
  //console.log(token)

  if (token) {
    jsonwebtoken.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }

      req.user = user
      next()
    })
  } else {
    res.sendStatus(401)
  }
}
