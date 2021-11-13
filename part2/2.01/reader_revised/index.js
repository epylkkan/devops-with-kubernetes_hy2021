var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const url = 'http://pingpong-svc:2345/pingpong' 
const rp = require('request-promise');

const randomString = Math.random().toString(36).substr(2,10)

var pongStart = 0
var pongEnd = 0 
var pongs = ""
var pongsInt = 0 

const getStringNow = () => {
  setTimeout(getStringNow, 5000)
}

app.get("/random", function(req, res) {
  getStringNow()
 
  rp(url)
  .then((html) => {
   console.log(html)
   pongStart = html.search('<h2') + 10 
   pongEnd = html.search('</h2') - 1  
   pongs = html.substr(pongStart,pongEnd-pongStart)
   pongsInt = Number(pongs)
   res.render("random", { randomString: new Date(Date.now()).toISOString() + ": " + randomString, pongs: pongsInt }); 
  })
  .catch((err) => {
    console.log ("Ping / Pong web page is not available" )
    res.render("error", {randomString: new Date(Date.now()).toISOString() + ": " + randomString})
  })
});

app.listen(3002, function() {
  console.log("Server started in port 3002");
})
