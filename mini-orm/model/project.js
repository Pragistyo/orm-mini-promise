const sqlite3    = require('sqlite3').verbose();
const connection = new sqlite3.Database()


class Model {
  constructor(raw) {
    this.id = raw.id
    this.nama = raw.nama
    this.email = raw.email
  }

  static findAll() {
    return new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM project`, (err, rows)=>{
          let results = rows.map(m => new Model(m))
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
          let results = rows.map(m => new Model(m))
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
      db.all(`SELECT * FROM project where id = ${params}`, (err, rows)=>{
          let results = rows.map(m => new Model(m))
          if(!err){
            resolve(results)
          } else {
            reject(err)
          }
      })
    })
  }

  static create() {}

  static update() {}

  static destroy() {}

}
