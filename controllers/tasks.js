
const getAllTasks = (req,res)=>{
    res.send("Get all Task")
}
const getTask = (req, res) => {
  res.send('Get single Task')
}

const createTask = (req, res) => {
  res.send('Create Task hi')
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