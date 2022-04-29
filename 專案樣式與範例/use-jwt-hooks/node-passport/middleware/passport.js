require('dotenv').config()

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local').Strategy

const findOne = require('../demo/users')
const findOneById = require('../demo/users')
const create = require('../demo/users')
// 定義安全的私鑰字串
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromHeader('authorization')
opts.secretOrKey = accessTokenSecret
// opts.issuer = 'accounts.examplesoft.com'
// opts.audience = 'yoursite.net'

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      async (username, password, done) => {
        try {
          const user = findOne(username, password)

          if (user) {
            return done(null, user)
          } else {
            return done('Incorrect Username / Password')
          }
        } catch (error) {
          done(error)
        }
      }
    )
  )

  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      //console.log(jwt_payload)
      const user = findOneById(jwt_payload.id)

      if (user) {
        return done(null, user)
      } else {
        return done('jwt error', false)

        // or you could create a new account
      }
    })
  )
}
