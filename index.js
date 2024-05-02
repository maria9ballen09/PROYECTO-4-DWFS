const express = require('express')
const app = express()
const dotenv = require ('dotenv')
const bodyParser = require('body-parser')
const { route } = require('./apis/productsView')
const router = require('./apis/productsView')
const { create } = require('lodash')
const { parseTwoDigitYear } = require('moment')


dotenv.config()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})