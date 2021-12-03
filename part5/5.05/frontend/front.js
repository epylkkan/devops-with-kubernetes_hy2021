//dependencies required for the app
var express = require("express");
var app = express();
const cors = require('cors')

//require('custom-env').env('','./dbpw')
//const pw = process.env.POSTGRES_PASSWORD.toString()
const pw = process.env.POSTGRES_PASSWORD || "pong";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors())

const { Client } = require('pg')
const client = new Client({
  database: process.env.POSTGRES_DB || "pongdb",
  user: process.env.POSTGRES_USER || "pong",
  password:  pw,
  host: 'postgres-db-lb',
  port: 5432,
})


client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  
    // create table pong if it does not exist
    const query_0 = `SELECT count(*) FROM information_schema.tables WHERE table_name = 'pong';`;
    client.query(query_0, (err, res) => {
  
      var rowCount = Number(res.rows[0].count)
      console.log(rowCount) 
  
      if (rowCount===0) {
        const query_1 = `CREATE TABLE pong (pongs int);`
        client.query(query_1, (err, res) => {
          if (err) {
              console.error(err + res + ' table creation error');
              return;
          }
          console.log('Table pong created !')
        })
      }
      }) 
})



app.set("view engine", "ejs");

//render css files
app.use(express.static("public"));
const pingPongUrl = ["/", "/pingpong"];

app.get(pingPongUrl, function(req, res) {
    
    const addPong = () => {

        const counterToAdd = 1;
 
        const query = `INSERT INTO pong (pongs) VALUES (${counterToAdd})`
        client.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('1 pong inserted successfully');
        });
  
    }

    const getAll = async () => {

        var numberOfPongs = 0

        const query = `SELECT * FROM pong`;
        client.query(query, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Number of rows: ' + result.rows.length)
            numberOfPongs = Number(result.rows.length); 

            //res.json(numberOfPongs)
            res.render("index", {pong: numberOfPongs}); 
        })
    }

    addPong()
    getAll()  
     
});

//set app to listen on port 8080
app.listen(8080, function() {
    console.log("Server started in port 8080");
});
