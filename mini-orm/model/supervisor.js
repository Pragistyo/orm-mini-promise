const sqlite3    = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db')
const Project = require('./project.js')


class Supervisor {
  constructor(raw) {
    this.id = raw.id
    this.nama = raw.nama
    this.email = raw.email
  }

  static findAll() {
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

  static projectAll(){
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
      db.all(`SELECT * FROM supervisor where id = ${params}`, (err, rows)=>{
          let results = rows.map(m => new Supervisor(m))
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
      db.all(`SELECT * FROM supervisor where ${attr} = ${params}`, (err, rows)=>{
          let results = rows.map(m => new Supervisor(m))
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
      db.run(`INSERT INTO supervisor(name,email)
              VALUES('${data.name}',
                     '${data.email}')`,(err)=>{
                       if(!err){resolve()}
                       else{reject(err)}
                     })
    })
  }

  static update(data,params) {
    return new Promise((resolve,reject)=>{
      db.run(`UPDATE supervisor
              SET name     = '${data.name}',
                  status   = '${data.email}'
                  WHERE id =  ${params.id}`,(err)=>{
                    if(!err){resolve()}
                    else{reject(err)}
                  })
    })
  }

  static destroy() {
    return new Promise((resolve,reject)=>{
        db.run(`DELETE FROM supervisor WHERE id = ${id}`,()=>{
          resolve()
      })
    })
  }

}

module.exports = Supervisor
