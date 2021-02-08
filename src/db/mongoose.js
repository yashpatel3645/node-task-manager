const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})




// const work = new task({
//     description: 'Work',
//     completed: true
// })

// work.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });