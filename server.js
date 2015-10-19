console.log("Server js is connected!!");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var mongoose = require("mongoose");
// var db = require("./models");
var where = require("./utils/where.js");
var path = require("path");
mongoose.connect("mongodb://localhost/test");
app.set("view engine", "ejs");
app.use("/static", express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
console.log("variables loaded");

// var Schema = mongoose.Schema;
// var BlogSchema = new Schema({
// 	blogPost: String,
// 	author: String
// });
// var Blog = mongoose.model('Blog', BlogSchema);

var blogs =[
	{blog: "When I die, I want to die peacefully, in my sleep, like my grandfather did.  Not like the passengers in his car.", author: "Jack Handy"},
	{blog: "If you really want to impress people with your computer literacy, add the words dot-com to everything you say, dot-com.", author: "Jack Handy"},

];


app.get('/', function (request, response){
	response.render('index', {blogs: blogs});
});

app.get("/api/blogs", function (request, response){
	response.json(blogs);
});

app.post("/api/foods", function (request, response){
		var newBlog = request.body;
		if (blogs.length !== 0){
			newBlog.id = blogs[blogs.length - 1].id +1;
		} else {
			newBlog.id = 0;

		}
		blogs.push(newBlog);
		response.json(newBlog);
	});

app.delete("/api/blogs/:id", function (request, response) {
	var targetId = parseInt(request.params.id);
	var targetItem = where(blogs, {id: targetId});
	blogs.splice(index, 1);
	response.json(targetItem);
	});

app.patch("/api/blogs/:id", function (request, response) {
	var targetId = parseInt(req.params.id);
	var targetItem = where(blogs, {id: targetId});

	targetItem.name = req.body.name || targetItem.name;
	targetItem.author = req.body.author || targetItem.author;
	res.json(targetItem);
});

// app.post('/posts/new', function (request, response){
// 		response.render('index');
// });


// function NewBlog (title){
// 	this.title = title;
// }
// function NewBlogView (blog){
// 	this.blog = blog;
// }




var server = app.listen(3000, function (){
	var port = server.address().port;
	var host = server.address().address;
	console.log('app listening on port %s', port);
});