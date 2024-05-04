const express = require('express')
const app = express()
const dotenv = require ('dotenv')
// const port = 3000
const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`
const bodyParser = require('body-parser')
const { route } = require('./apis/products.View')
const router = require('./apis/products.View')
const { create } = require('lodash')
const { parseTwoDigitYear } = require('moment')


dotenv.config()
const PORT = process.env.PORT || 3040


app.use(express.json())
app.use(router)
// app.use(serverUrl )



app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })