

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Task = require('./task')
const task2Schema = mongoose.Schema({
    title:{type:String},
    taskId: { type: Schema.Types.ObjectId, ref: Task },
    description:{type:String},
    status:{type:String,  default: 'In Process'}
})

module.exports = mongoose.model('Task2',task2Schema)