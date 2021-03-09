const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
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