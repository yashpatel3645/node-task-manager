const express = require('express')
require("./db/mongoose")
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3000

// Add File Upload
const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word Document.'))
        }

        cb(undefined, true)

        // cb(new Error('File Must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

// Get Data From web
app.use(express.json())

//route data from files
app.use(userRouter)
app.use(taskRouter)

// Provide port for run
app.listen(port, () => {
    console.log('Server is Running on ' + port);
})