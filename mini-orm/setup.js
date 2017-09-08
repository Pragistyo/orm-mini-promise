var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/database.db');



db.serialize(()=>{


  db.run(`CREATE TABLE IF NOT EXISTS supervisor(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(50),email VARCHAR(50))`,()=>{

    console.log('Table "supervisor" created !');
  })

  db.run(`CREATE TABLE IF NOT EXISTS project(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(50),status VARCHAR(50), supervisorID INTEGER, FOREIGN KEY (supervisorID) REFERENCES supervisor(id))`, ()=>{

      console.log('Table "project" created !');

  })
})
