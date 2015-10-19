var mongoose = require("mongoose");
mongoose.connect("mongodb:/localhost/MicroBlogAPI_app");

module.exports.Blog = require("./blog");