const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema ({
    name: {
      type: String,
      required: true
    },
    createdTask: {
       type: Number,
       default: Date.now
    },
    modificatedTask: {
       type: Number,
       default: Date.now
    },
    completedTask: {
       type: Boolean,
       default: false
    }


})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task