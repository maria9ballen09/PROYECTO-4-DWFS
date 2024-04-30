const express = require('express')
const app = express()
const port = 3030
const bodyParser = require('body-parser')
const { route } = require('./apis/productsView')
const router = require('./apis/productsView')


app.use(express.json())
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})