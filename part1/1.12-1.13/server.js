const express = require("express");
const fs = require('fs')
const request = require('request')
const Swal = require('sweetalert2')
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./todo_list.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the todo_list database.');
});


const app = express();

const url = 'https://picsum.photos/1200'
//const path = './public/image.jpg'
const path = '/usr/src/app/public/image.jpg'

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const imageFile = () => {
  if (!(fs.existsSync(path))) {
    download(url, path, () => {
    console.log('✅ download ok !')
    })
  }
  return 'image.jpg'
}
const image = imageFile()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use(express.static("public"));

// res.render
app.get("/", (req, res) => {

  const sql = "SELECT * FROM todo ORDER BY id;";
    db.all(sql, (err, rows) =>  {

    var listOfTasks =[];
    rows.forEach((a) => {
      listOfTasks.push(a)
     })
     res.render("index", { todos: listOfTasks, image: image });
    })
})
    

// create new task
app.post("/addTask", (req, res) => {
  
  const { textTodo } = req.body;
  const taskToAdd = req.body.textTodo;

  if (taskToAdd.length > 140) {
    console.log("Task description max length is 140 characters !")
    return
  }
 
  const sql_1 = "SELECT id FROM todo ORDER BY id DESC;";
  
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
  res.redirect("/");
});

app.put("/moveTaskDone", (req, res) => {
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

app.listen(3000, () => console.log("app is running on port 3000"));

