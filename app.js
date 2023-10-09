const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()




//middleware 
app.use(express.json())

//express.static tells Express to serve static files from the "public" directory.
//it allows you to serve these static files to users when they access specific routes.
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/v1/tasks', tasks)

const port = 5000;

const start = async ()=>{
  try{
      await connectDB(process.env.MONG_URI)
      app.listen(
        port,
        console.log(`port is listening on ${port}`)
      )
    } catch(error){
        console.log(error)
    }
}
start();


