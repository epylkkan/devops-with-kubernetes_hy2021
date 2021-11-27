const express = require("express");
const cors = require('cors')
let connected = false;

//require('custom-env').env('','./dbpw')
const pw = process.env.POSTGRES_PASSWORD.toString()

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors())

const { Client } = require('pg')
const client = new Client({
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password:  pw,
  host: 'postgres-db-lb',
  port: 5432,
})

checkDb = () => {
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
  }

client.connect(function(err) {
//  if (err) throw err;
 if (!(err)) {
  console.log("Connected!");
  connected=true;

  // create table pong if it does not exist
  checkDb()

  }
})

app.get("/", (req, res, next) => {
   
  const query = `SELECT * FROM pong`;
  client.query(query, (err, result) => {
     if (err) {
        console.error(err);
        return;
     }
    console.log('Number of rows: ' + result.rows.length)
    res.json(result.rows.length)
    //client.end();
  });  
    
})
    

// add pong
app.post('/add', (req, res, next) => {

  const counterToAdd = req.body.counterToAdd

  const query = `INSERT INTO pong (pongs) VALUES (${counterToAdd})`
  client.query(query, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('1 pong inserted successfully');
  });
  
});

const isConnected = () => { 
  
  const client_healthCheck = new Client({
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password:  pw,
    host: 'postgres-db-lb',
    port: 5432,
  })

  client_healthCheck.connect()
  client_healthCheck.query(`SELECT * FROM pong`, (err, res) => {

    //if (err) throw err
    //console.log(res)
    if (res) {
      console.log("Connected!");
      if (!(connected)) {
         checkDb()
      }
      connected=true;
    }      
    client_healthCheck.end()
    
  })

  return connected;
}

 
app.get('/healthz', (req, res) => {

  if(isConnected()) {
    return res.status(200).send('OK');
  }
  res.status(500).send('Not connected');

});


app.listen(3002, () => console.log("app is running on port 3002"));