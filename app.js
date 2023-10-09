const express = require('express');
const app = express();



//middleware 
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("hello")
})

const port = 5000;


app.listen(port, console.log(`port is listening on ${port}`))