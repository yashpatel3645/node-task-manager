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

// Provide port for run
app.listen(port, () => {
    console.log('Server is Running on ' + port);
})

// const Task = require('./models/tasks')
// const User = require('./models/user')

// const main = async() => {
//     const task = await Task.findById('6022adbaa6de263903ffca46')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner);

//     const user = await User.findById('6022acd78a971638de2a13f6')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);

// }

// main()