const mongoose = require('mongoose')
const validator = require('validator')

const task = mongoose.model('task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = task