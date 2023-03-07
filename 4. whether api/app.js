const express = require("express");

const https = require("https");
const { stringify } = require("querystring");


const app = express();


app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/3.0/onecall/wheather?q=London&appid=e00862b34d93f47fb8705f8703c64d4e"

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            //console.log(data);
            const wheatherData = JSON.parse(data)
            //console.log(wheatherData);
            const temp = wheatherData.main.temp
            const wheaterDescription = wheatherData.wheater[0].description

            res.write("<p>The weather is currently" + wheaterDescription + "<p>")
            res.write("<h1>The temperature in London is" + temp + "Degrees</h1>")
            res.send()
            //res.send("<h1>The temperature in London is" + temp + "Degrees</h1>")

            //const object = {
            //    name: "Haeckal",
            //    hobby: "Watching movie"
            //};
            //console.log(JSON.parse(stringify(object)))
        })

    });

    res.send("Server Up and Running");
});

app.listen(3000, function(){
    console.log("server running on port 3000");
});