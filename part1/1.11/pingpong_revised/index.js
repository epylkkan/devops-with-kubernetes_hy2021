//dependencies required for the app
var express = require("express");
const fs = require('fs')
var app = express();

app.set("view engine", "ejs");

//render css files
app.use(express.static("public"));

pong = []
var pongLengthStr = ""

app.get("/pingpong", function(req, res) {
    pong.push(1)
    
    console.log("juhuu")

    pongLengthStr =  " " + pong.length
    res.render("index", { pong: pong.length });
    
    console.log(pongLengthStr)
    fs.writeFile('/usr/src/app/files/pong.txt', pongLengthStr, { flag: 'w+' }, err => {
        if (err) {
           console.error(err)
           return
        }
    })
    
});


//set app to listen on port 3000
app.listen(3000, function() {
    console.log("Server started in port 3000");
});
