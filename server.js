console.log("Server js is connected!!");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var mongoose = require("mongoose");
// var db = require("./model");
var path = require("path");
mongoose.connect("mongodb://localhost/test");
app.set("view engine", ".ejs");
app.use("/static", express.static('public'));
app.use(bodyParser.json());
console.log("variables loaded");

var Schema = mongoose.Schema;
var BlogSchema = new Schema({
	blogPost: String,
	author: String
});
var Blog = mongoose.model('Blog', BlogSchema);

app.get('/', function(request, response){
	response.render('index');
});

app.post('/posts/new', function(request, response){
		response.render('index');
});


function NewBlog (title){
	this.title = title;
}
function NewBlogView (blog){
	this.blog = blog;
}




var server = app.listen(3000, function (){
	var port = server.address().port;
	var host = server.address().address;
	console.log('app listening on port %s', port);
});