const express = require('express');
const app = express();
const tasks = require('./routes/tasks')




//middleware 
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/v1/tasks', tasks)

const port = 5000;


app.listen(port, console.log(`port is listening on ${port}`))