'use strict';

angular.module('jrutishausergithubio')
  .controller('BlogCtrl', function ($http) {
 	var self = this;


		$http.jsonp("http://api.tumblr.com/v2/blog/jrutishauser.tumblr.com/posts?api_key=cNr2mxUgne0vNkFP0EZ2rqc4Vs8yw7z850DcuaV68oHgD3rrov&filter=text&limit=3&callback=JSON_CALLBACK")
.success(function(data) {
	console.log(data);
	self.posts = data.response.posts; 
	console.log(self.posts);
});
  
  
  
  
  
  });
