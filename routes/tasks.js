const express = require('express')
const router = express.Router();

router.route('/').get((req,res)=>{
    res.send("Get all Tasks")
})

module.exports = router