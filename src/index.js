const app = require('./app')

const port = process.env.PORT

// Provide port for run
app.listen(port, () => {
    console.log('Server is Running on ' + port);
})