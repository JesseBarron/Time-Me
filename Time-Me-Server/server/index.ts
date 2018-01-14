const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const passport = require('passport')
const morgan = require('morgan')
const red = require('chalk').red
const PORT = process.env.PORT || 8080;
const app = express()

module.exports = app

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user)
})
app.use(compression())
app.use(passport.initialize())


app.get('/', (req, res, next) => {
  res.send('You got it!!')
})

app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

app.use((err, req, res, next) => {
  console.log(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'internal server error')
})

app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`)
})
