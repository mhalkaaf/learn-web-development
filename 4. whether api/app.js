const express = require("express");

const https = require("https");


const app = express();


app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={e00862b34d93f47fb8705f8703c64d4e}"

    https.get(url, function(response){
        console.log(response);
    });

    res.send("Server Up and Running");
});

app.listen(3000, function(){
    console.log("server running on port 3000");
});