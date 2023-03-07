 const express = require("express");

 const app = express();

 app.get("/", function(request, response){
    response.send("<h1>Hello there!</h1>");
 });

 app.get("/contact", function(req, res){
    res.send("Contact me at muhammadhaeckal11@gmail.com");
 });

 app.get("/about", function(req, res){
    res.send("This is my First Blog Created by Muhammad Haeckal");
 });

 app.get("hobbies", function(req,res){
    res.send("My hobby is watching a movie");
 });

 app.listen(3000, function(){
    console.log("Server started on port 3000");
 });

