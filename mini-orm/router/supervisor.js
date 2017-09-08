const express = require('express');
const router  = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const model = require('../model/supervisor.js');

router.get('/list',(req,res)=>{
 model.findAll().then(row=>{
   model.projectAll().then(rowSupervisor=>{
    //  model.manipulate().then(rowsManipulate=>{
     res.render('supervisor',{data:row,dataSupervisor:rowSupervisor})
      // res.send(row)
    // })
   })
 })
})

router.get('/add',(req,res)=>{
  res.render('addSupervisor')
})

router.post('/add',(req,res)=>{
  model.create(req.body).then(()=>{
    res.redirect('/supervisor/list')
  })
})

router.get('/update/:id',(req,res)=>{
  model.findById(req.params.id).then(rows=>{
    model.projectAll().then(rowsSpv=>{
      res.render('editSupervisor',{data:rows,dataSupervisor:rowSupervisor})
    })
  })
})

router.get('/delete/:id',(req,res)=>{
  model.destroy(req.params.id).then(()=>{
    res.redirect('/supervisor/list')
  })
})


module.exports = router
