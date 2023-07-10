const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('Hi user')
})

const productRouter = require('./routes/Emp')
app.use('/Emp', productRouter)

app.listen(9999, '0.0.0.0', () => {
  console.log('server started on port 9999')
})