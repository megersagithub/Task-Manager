const Task = require('../models/Task')
const { json } = require("express")
const { param } = require("../routes/tasks")


const getAllTasks =  async (req, res) => {
    //res.send('all items from the file')
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
    //res.send('create tasks')
   res.status(201).json({task})
  //res.json(req.body)
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    
}
const getTask = async (req, res) => {
   // res.send('getting  tasks')
   try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    res.status(200).json({task})

    // res.json({id:req.params.id})
    
   } catch (error) {
    
   }

   
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