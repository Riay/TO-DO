const express = require('express')
const mongoose = require('mongoose')

const path = require('path')


const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')
const apiKey = require('./routes/middelwares/key')
const routerBody = require('./routes/middelwares/body')


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT

const app = express()

mongoose.Promise = Promise
mongoose.connect(DB_URI)


app.use(express.static( path.join(__dirname, '../client') ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use(apiKey)
app.use(routerBody)
app.use('/tasks', routerTasks)
app.use('/task', routerTask)


app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);


