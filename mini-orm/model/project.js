const sqlite3    = require('sqlite3').verbose();
const db        = new sqlite3.Database('db/database.db')


class Project {
  constructor(raw) {
    this.id = raw.id
    this.nama = raw.nama
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
      db.all(`SELECT * FROM project where ${attr} = ${params}`, (err, rows)=>{
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
    return new Promis((resolve,reject)=>{
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
              SET name     = '${data.name}',
                  status   = '${data.status}'
                  WHERE id =  ${params.id}`,(err)=>{
                    if(!err){resolve()}
                    else{reject(err)}
                  })
    })
  }

  static destroy() {
    return new Promise((resolve,reject)=>{
      db.run(`DELETE FROM project WHERE id = ${id}`,()=>{
        resolve()
      })
    })
  }

}

module.exports = Project
