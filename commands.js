#!/usr/bin/env node
const program = require('commander')
const { prompt } = require('inquirer');
const {
    addTask,
    add2Task,
    findTask,
    find2Task,
    updateTasks,
    removeTasks,
    listTasks
} = require('./index')

const inputs = [
    {
        type:'input',
        name:'title',
        message:'Enter the Task name:'
    },
    {
        type:'input',
        name:'description',
        message:'Enter the Task description:'
    }
]

const inputstask2 = [
    {
        type:'input',
        name:'title',
        message:'Enter the Title Name:'
    },
    {
        type:'input',
        name:'taskId',
        message:'Enter the Task Id:'
    },
    {
        type:'input',
        name:'description',
        message:'Enter the Task description:'
    }
]
const updateData = [
    {
        type:'input',
        name:'title',
        message:'Edit the Task Name:'
    },
    {
        type: 'expand',
      name: 'status',
      message: 'Edit Your Status:',
      choices: [
        {
          key: '1',
          value: 'Processed'
        },
        {
          key: '2',
          value: 'In Process',
        },
      ],
      },
      {
        type:'input',
        name:'description',
        message:'Edit the Description:'
    },
]

program
    .version('1.0.0')
    .description('Task Managemnt System')

//Add a task
program
    .command('addTask')
    .alias('at')
    .description('Add a task')
    .action(()=>{
        prompt(inputs).then(outputs=>addTask(outputs))    
    }) 
program
    .command('addTask2')
    .alias('at2')
    .description('Add a task')
    .action(()=>{
        prompt(inputstask2).then(outputs=>add2Task(outputs))    
    }) 
//Find single task
program
    .command('findTask <title>')
    .alias('fs')
    .description('Fina a task')
    .action(title => findTask(title))
program
    .command('find2Task <_id>')
    .alias('fs2')
    .description('Fina a task')
    .action(title => find2Task(title))
    
//Update the task
program
  .command('editTask <_id>')
  .alias('u')
  .description('Update a Task')
  .action(_id => {
    prompt(updateData).then(outputs => updateTasks(_id,outputs));
  });

//Remove the task
program
  .command('removeTask <_id>')
  .alias('r')
  .description('Remove a task')
  .action(_id => removeTasks(_id));

// List the Command
program
  .command('listtasks')
  .alias('l')
  .description('List all tasks')
  .action(() => listTasks());

program.parse(process.argv)
