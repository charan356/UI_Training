(function(){
	'use strict';

	var serviceId = "todoService";

	angular.module('app.services').factory(serviceId, ['$http', todoService]);

	function todoService($http){
		var resource = "http://localhost:3000/users";
		var resource_posts = "http://localhost:3000/users/posts";

		return {
			get: function(id){
				var url = resource;

				if(typeof id !== 'undefined'){
					url += "/" + id;
				}

				return $http.get(url);
			},
			create: function(todo){
				return $http.post(resource_posts, todo);
			},
			update: function(todo){
				// var id = todo._id;

				var url = resource;

				return $http.put(url, todo);
			},
			delete: function(id){
				var url = resource_posts + "/" + id;

				return $http.delete(url);
			}
		}
	}
}());