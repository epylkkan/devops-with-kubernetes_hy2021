
var express = require("express");
const fs = require('fs')
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
let pongs = ''

const getRandomString = (res) => {
  fs.readFile('/usr/src/app/files/pong.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    pongs = data
    console.log(data)
    console.log(pongs)
  })

  console.log(pongs)

  fs.readFile('/usr/src/app/files/random.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    res.render("random", { randomString: data, pongs: pongs });
  })
}

app.get("/random", function(req, res) {
  getRandomString(res)
});

app.listen(3000, function() {
  console.log("Server started in port 3000");

});