// EXPRESS
const express = require("express");
const app = express();

// PATH
const path = require("path");

// PORT
const port = process.env["PORT"] || 5000;

// SESSION
var session = require('express-session');
app.use(session({
	secret: 'secretword',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}));

//EJS
app.set(express.static(path.join(__dirname, "views")));
app.set('view engine', 'ejs');

// STATIC
app.use(express.static(path.join(__dirname, "static", "stylesheets")));
app.use(express.static(path.join(__dirname, "static", "images")));

// BODY PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// GLOBAL VARIABLES
var counter = 0;

// ROUTES
app
.get("/", function(req, res){
	counter++;
	res.render("counter", {count: counter});
})
.post("/add2", function(req, res){
	counter++;
	res.redirect("/");
})
.post("/reset", function(req, res){
	counter = 0;
	res.redirect("/");
});




app.listen(port, function(){
	console.log("Listening on port 5000");
});