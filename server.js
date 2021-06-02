require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.use(express.static(join(__dirname, '/public/')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', '.hbs')
app.use(express.json())

app.use(require('./controllers'))

app.listen(process.env.PORT || 3000, () => console.log('Server running on: http://localhost: 3000'))
