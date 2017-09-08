const express = require('express');
const router  = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const model = require('../model/project.js');

router.get('/list',(req,res)=>{
 model.findAll().then(row=>{
  //  model.spvAll().then(rowSupervisor=>{
     model.manipulate().then(rowsManipulate=>{
    //  res.render('project',{data:row,dataSupervisor:rowSupervisor})
      res.send(row)
    // })
   })
 })
})

router.get('/add',(req,res)=>{
  res.render('addProject')
})

router.post('/add',(req,res)=>{
  model.create(req.body).then(()=>{
    res.redirect('/project/list')
  })
})

router.get('/update/:id',(req,res)=>{
  model.findById(req.params.id).then(rows=>{
    // model.spvAll().then(rowsSpv=>{
      res.render('editProject',{data:rows,dataSupervisor:rowsSpv})
    // })
  })
})

router.get('/delete/:id',(req,res)=>{
  model.destroy(req.params.id).then(()=>{
    res.redirect('/project/list')
  })
})



module.exports = router
