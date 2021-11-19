//dependencies required for the app
var express = require("express");
const axios = require('axios')
var app = express();

app.set("view engine", "ejs");

//render css files
app.use(express.static("public"));

app.get("/pingpong", function(req, res) {

    
    const addPong = () => {

        //const url = 'http://localhost:3002/add' 
        url = 'http://pong-back-svc:2346/add'

        const counterToAdd = 1;
        const counterObject = {counterToAdd: counterToAdd}            
        const createCounter = counterObject => {
        const request = axios.post(url, counterObject)
        return request.then(response => response.data)
        }
        createCounter(counterObject)
    }

    const getAll = async () => {

        var numberOfPongs = 0
        const url = 'http://pong-back-svc:2346' 
        //const url = 'http://localhost:3002' 

        const request = await axios.get(url) 
          .then(response => {
          numberOfPongs = Number(response.data); 
        })

        //var counter = numberOfPongs.length       
        res.render("index", {pong: numberOfPongs}); 
    }
    
    addPong()
    getAll()  
     
});


app.get("/", function(req, res) {
   
        //var counter = numberOfPongs.length       
        res.render("info"); 
     
});

//set app to listen on port 3000
app.listen(3000, function() {
    console.log("Server started in port 3000");
});
