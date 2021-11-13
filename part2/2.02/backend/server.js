const express = require("express");
const fs = require('fs')
const request = require('request')
const cors = require('cors')
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./todo_list.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the todo_list database.');
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cors())


// res.render
app.get("/", (req, res, next) => {
   
  const sql = "SELECT * FROM todo ORDER BY id;";
    db.all(sql, (err, rows) =>  {

    var listOfTasks =[];
    rows.forEach((a) => {
      listOfTasks.push(a)
     })
     //console.log(listOfTasks)
     res.json(listOfTasks)
    })
})
    

// create new task
app.post('/addTask', (req, res, next) => {
  
  const taskToAdd = req.body.task
  const sql_1 = "SELECT id FROM todo ORDER BY id DESC;";

  console.log(taskToAdd)
  
  var lastId = 0;
  db.all(sql_1, (err, rows) => {
   
    if(rows.length>0) {
      lastId=rows[0].id + 1;

      
      const sql_2 = `INSERT INTO todo VALUES("${lastId}", "${taskToAdd}", "0")`

      console.log(sql_2)

      db.run(sql_2, (err, rows) => {
        if (err) {
          return console.log(err.message);
        }
      })  
    }
  })
});


app.put('/moveTaskDone/:id', (req, res, next) => {
  const { name, id } = req.body;
  const taskId = req.body.id
  const taskName =  req.body.name

  //var sql = `UPDATE todo SET status=0 WHERE id="${taskId}"`
  var sql = `DELETE FROM todo WHERE id="${taskId}"`

  if (taskName === "todo") {
    sql = `UPDATE todo SET status=1 WHERE id="${taskId}"`   
  }

  console.log(sql)
  
  db.run(sql, (err, rows) => {
      if (err) {
        return console.log(err.message);
      }
       
  })  
});

app.listen(3002, () => console.log("app is running on port 3002"));

