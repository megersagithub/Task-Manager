const Task = require('../models/Task')
const { json } = require("express")
const { param } = require("../routes/tasks")


const getAllTasks =  (req, res) => {
    res.send('all items from the file')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    //res.send('create tasks')
   res.status(201).json({task})
  //res.json(req.body)
}
const getTask = (req, res) => {
   // res.send('getting  tasks')
   res.json({id:req.params.id})
}
const updateTask = (req, res) => {
    res.send('updating tasks')
}
const deleteTask = (req, res) => {
    res.send('deleting tasks')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}