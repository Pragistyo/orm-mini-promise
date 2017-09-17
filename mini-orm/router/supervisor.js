const express = require('express');
const router  = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const model   = require('../model/supervisor.js');
const project = require('../model/project.js');

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
  model.projectAll().then(rowSupervisor=>{
    res.render('addSupervisor',{dataSupervisor:rowSupervisor})
  })
})

router.post('/add',(req,res)=>{
  model.create(req.body).then(()=>{
    res.redirect('/supervisor/list')
  })
})

router.get('/update/:id',(req,res)=>{
  model.findById(req.params.id).then(rows=>{
    model.projectAll().then(rowsSpv=>{
      res.render('editSupervisor',{data:rows,dataProject:rowsSpv})
    })
  })
})

router.post('/update/:id',(req,res)=>{
  // res.send('hahahhaha')
  model.update(req.body,req.params).then(()=>{
    res.redirect('/supervisor/list')
  })
})


router.get('/delete/:id',(req,res)=>{
  model.destroy(req.params.id).then(()=>{
    res.redirect('/supervisor/list')
  })
})


router.get('/assignProject/:id',(req,res)=>{
  model.findById(req.params.id).then(rows=>{
    project.findAll().then(allProject=>{
      project.findWhere('supervisorID',req.params.id).then(eachProject=>{
        res.render('supervisorAssign',{data:rows,dataProject:allProject,dataEach:eachProject})
    })
    })
  })
})

router.post('/assignProject/:id',(req,res)=>{
  project.updateAssociation(
                            req.body.name,req.body.status,req.params.id,req.body.id
  ).then(()=>{
    res.redirect(`/supervisor/assignProject/${req.params.id}`)
  })
})

module.exports = router
