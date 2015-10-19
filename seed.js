var db = require("./models");

var blogs_list =[
	{blog: "When I die, I want to die peacefully, in my sleep, like my grandfather did.  Not like the passengers in his car.", author: "Jack Handy"},
	{blog: "If you really want to impress people with your computer literacy, add the words dot-com to everything you say, dot-com.", author: "Jack Handy"},

];

db.Blog.remove({}, function(err, blogs){

	db.Blog.create(blogs_list, function(err, blogs){
		if (err) { return console.log(err); }
		console.log("created", blogs.length, 'blogs');
		process.exit();
	});
});