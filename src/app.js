const express = require('express')
require("./db/mongoose")
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')

const app = express()

// Get Data From web
app.use(express.json())

//route data from files
app.use(userRouter)
app.use(taskRouter)

module.exports = app