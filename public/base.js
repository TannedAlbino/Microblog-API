console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var app = new Blog();
  app.addEventListerner();
});

function Blog(){
  this.$button = $('#button');
  this.$form = $('#form');
}

Blog.prototype.addEventListerner = function(){
  console.log(this.$button);
  blog = this;
  this.$button.on('click', function(event){
    event.preventDefault();
    blog.submitPost(blog.$form);
  });
};

Blog.prototype.submitPost = function(form){
  var url = "/posts/new";
  $.ajax({
        url: url,
        type: 'POST',
        data: form.serialize()
  });
};
// var blogInput =$("#blog-input");


// blogInput.on('click', function (event) {
//   console.log(event);
//   var blog = new NewBlog( $(this).val());
//   var blogView = new BlogView(blog);
//   $(this).val("");
//   console.log(blogView);
// });