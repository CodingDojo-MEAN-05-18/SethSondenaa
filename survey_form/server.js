// EXPRESS
const express = require("express");
const app = express();

// PATH
const path = require("path");

// PORT
const port = process.env["PORT"] || 8000;

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

// ROUTES
app
.get("/", function(req, res){
	res.render("index");
})
.post("/", function(req, res){
	res.render("index");
})
.post("/result", function(req, res){
	req.session.name = req.body.name;
	req.session.dojo = req.body.dojo;
	req.session.language = req.body.language;
	req.session.comment = req.body.comment;
	res.redirect('/result')
})
.get("/result", function(req, res){
	res.render("results", {name:req.session.name, dojo:req.session.dojo, language:req.session.language, comment:req.session.comment});
});


app.listen(port, function(){
	console.log("Listening on port 8000");
});