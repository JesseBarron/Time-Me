const express = require('express')
const bodyParser = require('body-parser')
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

// app.use(compression())


app.get('/', (req, res, next) => {
  res.send('You got it!!')
})

app.use('/api', require('./api'))


app.use((err, req, res, next) => {
  console.log(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'internal server error')
})

app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`)
})
