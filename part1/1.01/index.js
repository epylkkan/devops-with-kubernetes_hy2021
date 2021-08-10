// Added for 1.09
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Original exercise 1.01
const randomString = Math.random().toString(36).substr(2,10)

const getStringNow = () => {

  console.log(new Date(Date.now()).toISOString() + ": " +randomString)

  setTimeout(getStringNow, 5000)
}

// Original exercise 1.01
//getStringNow()

// Added for 1.09
app.get("/random", function(req, res) {
  getStringNow()
  res.render("random", { randomString: randomString });
});

app.listen(3001, function() {
  console.log("Server started in port 3001");

});