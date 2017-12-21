const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const red = require('chalk').red
const PORT = process.env.PORT || 8080;
const firebase = require('./firebase')
const app = express()
module.exports = app

app.get('/', (req, res, next) => {
  res.send('You got it!!')
})

app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`)
})
