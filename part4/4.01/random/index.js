var express = require("express");
var app = express();
var fetch = require('node-fetch');

app.set("view engine", "ejs");
app.use(express.static("public"));

let connected = false;

//const url = 'http://34.95.119.47/pingpong' 
const url = 'http://pong-front-svc:2345/pingpong' 
const rp = require('request-promise');

const randomString = Math.random().toString(36).substr(2,10)

var pongStart = 0
var pongEnd = 0 
var pongs = ""
var pongsInt = 0 

// require('custom-env').env('','./dotenv')

require('dotenv').config()
const message = process.env.MESSAGE
console.log(message)

const getStringNow = () => {
  setTimeout(getStringNow, 5000)
}

app.get("/random", function(req, res) {
  getStringNow()
 
  rp(url)
  .then((html) => {
   console.log(html)
   connected=true;
   pongStart = html.search('<h2') + 10 
   pongEnd = html.search('</h2') - 1  
   pongs = html.substr(pongStart,pongEnd-pongStart)
   pongsInt = Number(pongs)
   res.render("random", { message: message, randomString: new Date(Date.now()).toISOString() + ": " + randomString, pongs: pongsInt }); 
  })
  .catch((err) => {
    console.log ("Ping / Pong web page is not available" )
    res.render("error", {message: message, randomString: new Date(Date.now()).toISOString() + ": " + randomString})
  })  
});

app.get("/", function(req, res) {
   
  //var counter = numberOfPongs.length       
  res.render("info"); 

});

const isConnected = () => {
  if (fetch(url)) {connected = true}
  console.log(connected)
  return connected;
}

 
app.get('/healthz', function(req, res) {
  
  if(isConnected()) {
    return res.status(200).send('OK');
  }

  res.status(500).send('Not connected');
});


app.listen(3003, function() {
  console.log("Server started in port 3003");
})
