
const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    title:{type: String},
    description:{type:String},
    status:{type:String,  default: 'In Process'}
})

module.exports = mongoose.model('Task',taskSchema)