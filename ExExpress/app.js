var express = require("express");

var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res){
    var animalName = req.params.animal;
    var sound = "";
    if(animalName == "pig"){
        sound = "Oink";
    } else if(animalName == "cow"){
        sound = "Moo";
    } else if(animalName == "dog"){
        sound = "Woof Woof!";
    }
    res.send("The " + animalName + " says '" + sound + "'");
});

app.get("/repeat/:keyword/:number", function(req,res){
    var word = req.params.keyword;
    var num = req.params.number;
    console.log("num :" + num);
    var repeats = parseInt(num);
    console.log("repeats :" + repeats);
    var makeUp = word + " ";
    var output = "";
    for(var i=1; i<=repeats; i++){
        output += makeUp;
    }
    res.send(output);
});

app.get("*", function(req,res){
    res.send("Soory, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("Serving Express exercise for port 3000");
});