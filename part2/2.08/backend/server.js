const express = require("express");
//const fs = require('fs')
//const request = require('request')
const cors = require('cors')
//const sqlite3 = require("sqlite3").verbose();

const pw = process.env.POSTGRES_PASSWORD.toString()
console.log(pw)

const { Client } = require('pg')
const client = new Client({
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password:  pw,
  host: 'postgres-db-lb',
  port: 5432,
})

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // create table pong if it does not exist
  const query_0 = `SELECT count(*) FROM information_schema.tables WHERE table_name = 'todo';`;
  client.query(query_0, (err, res) => {

    var rowCount = Number(res.rows[0].count)
    console.log(rowCount) 

    if (rowCount===0) {
      const query_1 = `CREATE TABLE todo(id SERIAL PRIMARY KEY, task VARCHAR(140) UNIQUE, status INT DEFAULT 0);`
      client.query(query_1, (err, res) => {
        if (err) {
            console.error(err + res + ' table creation error');
            return;
        }
        console.log('Table todo created !')
      })
    }
    }) 
  })

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cors())


// res.render
app.get("/", (req, res, next) => {

  const sql = `SELECT * FROM todo ORDER BY id;`;
  console.log(sql)

  client.query(sql, (err, result) => {
     if (err) {
        console.error(err);
        return;
     }
     var listOfTasks =[];
     result.rows.forEach((a) => {
       listOfTasks.push(a)
      })
      //console.log(listOfTasks)
      res.json(listOfTasks)
  });  
})
    

// create new task
app.post('/addTask', async (req, res) => {

  try {
    const task = req.body.task
    //console.log(task)
    const newTodo = await client.query(`INSERT INTO todo (task) VALUES ('${task}') RETURNING *;`);
    res.json(newTodo.rows[0]);
    console.log('Task was added successfully')

  } catch(err) {
    console.log(err.message);
  }   
});


app.put('/moveTaskDone/:id', (req, res) => {
  const { name, id } = req.body;
  const taskId = req.body.id
  const taskName =  req.body.name
  console.log(req.body)

  sql = `UPDATE todo SET status=1 WHERE id=${taskId};`   
  console.log(sql)

  client.query(sql, (err, result) => {
      if (err) {
        return console.log(err.message);
      }       
      console.log('Move successful !'
      )
  })  
});

app.delete('/deleteTask/:id', (req, res) => {
  const taskId = req.params.id
  console.log(taskId)

  var sql = `DELETE FROM todo WHERE id=${taskId};`
  console.log(sql)

  client.query(sql, (err, result) => {
      if (err) {
        return console.log(err.message);
      }       
      console.log('Task deleted successfully !')
  })  
});

app.listen(3002, () => console.log("app is running on port 3002"));
