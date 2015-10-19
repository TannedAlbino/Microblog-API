console.log("Sanity Check: JS  in APP is working!");



$(document).ready(function(){
  pageLoad();
  // var app = new Blog();
  // app.addEventListerner();
});

function pageLoad () {
  $('#new-blog-form').on("submit", function (e){
    e.preventDefault();
     $.post("/api/blogs", $(this).serialize(), function(response){
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

	$(document).on('submit', 'form.edit', function(e){
		e.preventDefault();
		updateBlog(this);
	});

function deleteBlog(context) {
  console.log('context in deleteBlog: ', context);

  var blogId = $(context).data().id;
  $.ajax({
    url: '/api/blogs/' + blogId,
    type: 'DELETE',
    success: function(response) {
      $(context).closest('li').remove();
    }

  });
}

function updateBlog(context){
	console.log("serialized: ", $(context).serialize());
	var blogId = $(context).data().id;
	$.ajax({
		url: '/api/blogs/' + blogId,
		type: 'PATCH',
		data: $(context).serialize(),
		success: function(response) {
			var newLi = makeHTMLString(response);
			$(context).closest('li').replaceWith(newLi);
		}
	});
}

function makeHTMLString(blog) {
  	return "<li class='list-group-item'>" + blog.name + 
    " <span class='label label-default'>"+blog.author+"</span>" +
    "<button data-id="+blog.id+" type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
    updateHTMLString(blog) +
      "</li>";
  // return '<li class="list-group-item"><h4 class= "list-group-item-heading">' + blog.name + '</h4><span class="list-group-item-text">' + blog.author + '</span>' + '<button data-id=' + blog.id + ' type="button" class="close" aria-label ="Close"><span aria-hidden="true">&times;</span></button></li>';
}

function updateHTMLString(blog){
	var htmlString = '<br><!--form to update blog -->\n' +
	'<div id="update-' + blog.id +'">' +
	'<form class="form-inline edit" data-id=' + blog.id +'>' + 
	'<input name="name" type="text" class="form-control" placeholder="Updated blog">\n' +
	'<input name="author" type="text" class="form-control" placeholder="Updated Author">\n'+
	'<input type="submit" class="btn btn-default" value="Update blog">' +
	'</form>' +
	'</div>';
	return htmlString;
}

// $(document).ready(function(){

//   var app = new Blog();
//   app.addEventListerner();
// });

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