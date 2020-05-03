const mongoose = require('mongoose')
const taskModel = require('./models/task')
const task2Model = require('./models/task1')
mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://localhost:27017/nodejscli',{ useUnifiedTopology: true,useNewUrlParser: true 
}) 

//Add task
const addTask = (addtask)=>{
    taskModel.create(addtask).then(addtask=>{
    console.info('Result:Task has been created')
    })
    .catch(error => console.info('Error:',error.message))
}

const add2Task = (addtask)=>{
    task2Model.create(addtask).then(addtask=>{
    console.info('Result:Task has been created')
    })
    .catch(error => console.info('Error:',error.message))
}
//find task
const findTask = (title)=>{
    taskModel.find({ title: { "$regex": title, "$options": "i" } })
    .then(task =>{
        console.info(task)
        console.info(`${task.length} Matches`)
    })
    .catch(error => console.info('Error:',error.message))
}

const find2Task = (id)=>{
    task2Model.find({ _id:id }).
    populate('taskId')
    .then(task =>{
        console.info(task)
        console.info(`${task.length} Matches`)
    })
    .catch(error => console.info('Error:',error.message))
}
//update Task
const updateTasks = (_id, tasks) => {
    taskModel.updateOne({ _id }, tasks)
      .then(tasks => {
        console.info('Result: Task has been modified')
      })
      .catch(error => console.info('Error:',error.message))
  }
  
  // Remove Task
  const removeTasks = (_id) => {
    taskModel.deleteOne({ _id })
      .then(tasks => {
        console.info('Task is Removed')
      })
      .catch(error => console.info('Error:',error.message))
  }
  
  // List All tasks
  const listTasks = () => {
    taskModel.find()
      .then(task => {
        console.info(task)
      })
      .catch(error => console.info('Error:',error.message))
  }


module.exports = {
    addTask,
    add2Task,
    findTask,
    find2Task,
    updateTasks,
    removeTasks,
    listTasks
}