const express = require('express');
const router  = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const model = require('../model/project.js');

router.get('/list',(req,res)=>{
 model.findAll().then(data=>{
  //  res.send(data)
   res.render('project',{data:})

 })
})


module.exports = router
