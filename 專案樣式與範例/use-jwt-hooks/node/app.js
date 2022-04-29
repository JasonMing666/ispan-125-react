const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const csrf = require('csurf')
const cors = require('cors')

const app = express()

// 不使用 res.render
// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// CSRF Protection
const csrfProtection = csrf({
  cookie: true,
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 3600, // 1-hour
})

app.use(csrfProtection)

// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')

// use auth router(csrf, jwt, login, logout)
const authRouter = require('./routes/auth')
// demo data
const productsRouter = require('./routes/products')

// app.use('/', indexRouter)
// app.use('/users', usersRouter)

// use auth router(csrf, jwt, login, logout)
app.use('/auth', authRouter)

// demo data
app.use('/products', productsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.status(500).send({ error: 'Error 500' })
})

module.exports = app
