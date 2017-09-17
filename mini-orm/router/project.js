const express = require('express');
const router  = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const model = require('../model/project.js');

router.get('/list',(req,res)=>{
 model.findAll().then(row=>{
  //  model.spvAll().then(rowSupervisor=>{
    //  model.manipulate().then(rowsManipulate=>{
     res.render('project',{data:row})
      // res.send(row)
    // })
  //  })
 })
})

router.get('/add',(req,res)=>{
   model.spvAll().then(rowSupervisor=>{
  res.render('addProject',{dataSupervisor:rowSupervisor})
  })
})

router.post('/add',(req,res)=>{
  model.create(req.body).then(()=>{
    res.redirect('/project/list')
  })
})

router.get('/update/:id',(req,res)=>{
  model.findById(req.params.id).then(rows=>{
    model.spvAll().then(rowsSpv=>{
      res.render('editProject',{data:rows,dataSupervisor:rowsSpv})
    })
  })
})

router.post('/update/:id',(req,res)=>{
  console.log(`${req.body.status}`);
  model.update(req.body,req.params).then(()=>{
    res.redirect('/project/list')
  })
})


router.get('/delete/:id',(req,res)=>{
  model.destroy(req.params.id).then(()=>{
    res.redirect('/project/list')
  })
})



module.exports = router
