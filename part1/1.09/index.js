//dependencies required for the app
var express = require("express");
var app = express();

app.set("view engine", "ejs");

//render css files
app.use(express.static("public"));

var pong = []

app.get("/pingpong", function(req, res) {
    pong.push(1)
    res.render("index", { pong: pong.length });
});

//set app to listen on port 3000
app.listen(3000, function() {
    console.log("Server started in port 3000");
});
