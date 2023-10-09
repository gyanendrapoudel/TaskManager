require('dotenv').config()
const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONG_URI)
  .then(console.log('connection is successful'))
  .catch((error) => console.log(error))