var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there!");
});

app.get("/bye", function(req,res){
    res.send("Goodbye!!");
});

app.get("/dog", function(req,res){
    res.send("MEOW!");
});

app.get("*", function(req,res){
    res.send("You are a star!");
});

app.get("/r/:subredditName", function(req,res){
    res.send("Welcome to a Subreddit!");
});

app.listen(3000, function(){
    console.log("Serving dog demo on port 3000");
});