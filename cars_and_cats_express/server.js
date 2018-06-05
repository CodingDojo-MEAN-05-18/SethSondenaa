// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
var app = express();
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1><img src='/static/images/first.jpeg'>");
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})