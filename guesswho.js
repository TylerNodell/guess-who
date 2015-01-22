var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.json({ "Hints": {
  "profession": "movie star",
  "known_for": ["bus", "Idiot teenager", "black suit wearing ninja"],
  "gender": "male",
  "first letter of first name": "k",
  "extra hint": "Woah!"
	}
	});
});
app.get("/Keanu_Reeves", function(req,res){
	res.send({correct:"Woah! You got it!"});
});

app.get("/:id", function(req,res){
		res.send({incorrect: "hmm, try again"});
});

app.listen(3000);