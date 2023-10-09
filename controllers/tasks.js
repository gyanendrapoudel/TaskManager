const Task = require('../models/task')
const getAllTasks = (req,res)=>{
    res.send("Get all Task")
}
const getTask = (req, res) => {
  res.send('Get single Task')
}

const createTask = async (req, res) => {
  try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTask = (req, res) => {
  res.send('Delete Task')
}

const updateTask = (req, res) => {
  res.send('Update Task')
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}