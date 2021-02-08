const express = require('express')
require("./db/mongoose")
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3000

// Get Data From web
app.use(express.json())

//route data from files
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is Running on ' + port);
})