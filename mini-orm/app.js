const express    = require('express');
// const sqlite3    = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app        = express();

// const db         = new sqlite3.Database('db/Database.db')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('view engine','ejs')


const index       = require('./router/index.js');
// const project     = require('./router/project.js')
// const supervisor  = require('./router/supervisor.js');

app.use('/', index)
// app.use('/project', project)
// app.use('/supervisor', supervisor)




app.listen(3000, () => {
  console.log("everything ok at PORT 3000");
})
