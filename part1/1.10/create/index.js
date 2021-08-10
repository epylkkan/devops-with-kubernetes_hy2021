var express = require("express");
const fs = require('fs')
var app = express();

const randomString = Math.random().toString(36).substr(2,10)

const getStringNow = () => {
    randomStringWithDate = new Date(Date.now()).toISOString() + ": " +randomString
    
    console.log(randomStringWithDate)
    fs.writeFile('/usr/src/app/files/random.txt', randomStringWithDate, { flag: 'w+' }, err => {
      if (err) {
         console.error(err)
         return
      }
    })
    setTimeout(getStringNow, 5000)
}

/*
app.get("/random", function(req, res) {
  getStringNow()
});
*/

app.listen(3001, function() {
  getStringNow()
  console.log("Server started in port 3001");
});