const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
//    res.send("Hellow World")
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    //    res.send("Hellow World")
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
    //res.send("Thanks for posting that");
});

app.get("/bmicalculator", function(req, res){
    //    res.send("Hellow World")
        res.sendFile(__dirname + "/bmiCalculator.html");
    });
    
app.post("/bmicalculator", function(req, res){
        //    res.send("Hellow World")
        var weight = parseFloat(req.body.weight);
        var height = parseFloat(req.body.height);
    
        var bmi = weight / (height * height);
    
        res.send("Your BMI is " + bmi);
        //res.send("Thanks for posting that");
    });

app.listen(3000, function(){
    console.log("Server started on port 3000");
});