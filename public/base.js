console.log("Sanity Check: JS in Base is working!");

$(document).ready(function(){
  pageLoad();
  // var app = new Blog();
  // app.addEventListerner();
});

function pageLoad () {
  $('#new-blog-form').on("submit", function (e){
    e.preventDefault();
    $post("/api/blogs", $this.serialize(), function(response){
      var newBlog = response;
      var blogString = makeHTMLString(newBlog);
      $("#blog-ul").prepend(blogString);
      $("#new-blog-form")[0].reset();
      $("#blog-name-input").focus();
    });
  });

  $(document).on('click', 'button.close', function(e) {
    deleteBlog(this);
  });
}

function deleteBlog(context) {
  console.log('context in deleteBlog: ', context);

  var blogId = $(context).data().id;
  $ajax({
    url: '/api/blogs/' + blogId,
    type: 'DELETE',
    success: function(response) {
      $(context).closest('li').remove();
    }

  });
}
function makeHTMLString(blog) {
  return '<li class="list-group-item"><h4 class= "list-group-item-heading">' + blog.name + '</h4><span class="list-group-item-text">' + blog.author + '</span>' + '<button data-id=' + blog.id + ' type="button" class="close" aria-label ="Close"><span aria-hidden="true">&times;</span></button></li>';
}
// function Blog(){
//   this.$button = $('#button');
//   this.$form = $('#form');
// }

// Blog.prototype.addEventListerner = function(){
//   console.log(this.$button);
//   blog = this;
//   this.$button.on('click', function(event){
//     event.preventDefault();
//     blog.submitPost(blog.$form);
//   });
// };

// Blog.prototype.submitPost = function(form){
//   var url = "/posts/new";
//   $.ajax({
//         url: url,
//         type: 'POST',
//         data: form.serialize()
//   });
// };
// var blogInput =$("#blog-input");


// blogInput.on('click', function (event) {
//   console.log(event);
//   var blog = new NewBlog( $(this).val());
//   var blogView = new BlogView(blog);
//   $(this).val("");
//   console.log(blogView);
// });