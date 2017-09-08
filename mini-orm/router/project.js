const express = require('express');
const router  = express.Router();
// const sqlite3 = require('sqlite3').verbose();
// const db      =

router.get('/',(req,res)=>{
  res.render('project')
})


module.exports = router
