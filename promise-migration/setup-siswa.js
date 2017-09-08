const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

db.serialize(() => {

  // db.run(`CREATE TABLE IF NOT EXISTS siswa (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(200), last_name VARCHAR(200), full_name VARCHAR(200))`,() => {
  //   console.log('Create Table Siswa Berhasil');
  // })

  db.run(`INSERT INTO siswa (first_name,last_name) VALUES
  ('Jainal', 'Arifin'),
  ('Kautzar', 'Alibani),
  ('Muko', 'Atahirudin'),
  ('Noor', 'Achmadi'),
  ('Pragistyo', 'Machmud'),
  ('Rizki', 'Joelisman'),
  ('Yonathan', 'Setiadi'),
  ('Denny', 'Reza'),
  ('Dimas', 'Gardenia'),
  ('Jason', 'Effendi')
  `,() => {
    console.log('Seed Table Siswa Berhasil');
  });


})
