const sqlite3    = require('sqlite3').verbose();
const db         = new sqlite3.Database('db/database.db')
const Supervisor = require('./supervisor.js')


class Project {
  constructor(raw) {
    this.id = raw.id
    this.name = raw.name
    this.status = raw.status
  }

  static findAll() {
    return new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM project`, (err, rows)=>{
          let results = rows.map(m => new Project(m))
          if(!err){
            resolve(results)
          } else {
            reject(err)
          }
      })
    })
  }

  static spvAll(){
    return new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM supervisor`, (err, rows)=>{
          let results = rows.map(m => new Supervisor(m))
          if(!err){
            resolve(results)
          } else {
            reject(err)
          }
      })
    })
  }

  static findById(params) {
    return new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM project where id = ${params}`, (err, rows)=>{
          let results = rows.map(m => new Project(m))
          if(!err){
            resolve(results)
          } else {
            reject(err)
          }
      })
    })
  }

  static findWhere(attr,key) {
    return new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM project where ${attr} = ${key}`, (err, rows)=>{
          let results = rows.map(m => new Project(m))
          if(!err){
            resolve(results)
          } else {
            reject(err)
          }
      })
    })
  }

  static create(data) {
    return new Promise((resolve,reject)=>{
      db.run(`INSERT INTO project(name,status)
              VALUES('${data.name}',
                     '${data.status}')`,(err)=>{
                       if(!err){resolve()}
                       else{reject(err)}
                     })
    })
  }

  static update(data,params) {
    return new Promise((resolve,reject)=>{
      db.run(`UPDATE project
              SET name         = '${data.name}',
                  status       = '${data.status}'
                  WHERE id     =  ${params.id}`,(err)=>{
                    if(!err){resolve()}
                    else{reject(err)}
                  })
    })
  }

  static updateAssociation(bodyName,bodyStatus,paramsId,bodyId) {
    return new Promise((resolve,reject)=>{
      db.run(`UPDATE project
              SET name         = '${bodyName}',
                  status       = '${bodyStatus}',
                  supervisorID = '${paramsId}'
                  WHERE id     =  ${bodyId}`,(err)=>{
                    if(!err){resolve()}
                    else{reject(err)}
                  })
    })
  }

  static destroy(params) {
    return new Promise((resolve,reject)=>{
      db.run(`DELETE FROM project WHERE id = ${params}`,()=>{
        resolve()
      })
    })
  }

  static manipulate(){
    let count = 0;
    return new Promise((resolve,reject)=>{
      Project.findAll().then(hasil=>{
        hasil.forEach(eachHasil=>{
          Supervisor.findById(eachHasil.supervisorID).then(spvData=>{
            eachHasil['namaSupervisor'] = spvData[0].nama
            count ++
            if(count == hasil.length){
              resolve(hasil)
            }
          })
        })
      })
    })
  }

}

module.exports = Project
