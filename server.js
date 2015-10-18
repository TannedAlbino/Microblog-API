var express = require ("express");
var bodyparser = require('body-parser');
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
app.set("view engine", "ejs");
app.use(express.static('public'));

var Schema = mongoose.Schema;
var BlogSchema = new Schema({
	blogpost: String,
	author: String
});
var Blog = mongoose.model('Blog', BlogSchema);





var server = app.listen(3000, function (){
	var port = server.address().port;

	console.log('app listening on port %s', port);
});