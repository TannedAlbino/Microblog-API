var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var BlogSchema = new Schema({
	blogPost: String,
	author: String
});
var Blog = mongoose.model('Blog', BlogSchema);
module.export = Blog;
