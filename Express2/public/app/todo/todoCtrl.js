(function(){
	'use strict';

	var controllerId = "todoCtrl";

	angular.module('app.controllers').controller(controllerId, ['todoService', todoCtrl]);

	function todoCtrl(todoService){
		var vm = this;

		vm.todos = [];

		var _init = function(){
			vm.refreshTodos();
		}

		vm.createCat = function(cat){

			var x={name:cat};

			todoService.create(x).then(
				function(success){
					vm.refreshTodos();
					//vm.newTodo = {title: "", description: ""};
				},
				function(error){
					var x=10;

				});
		}

		vm.delete=function(cat){
			todoService.delete(cat._id).then(
				function(success){
					vm.refreshTodos();
					//vm.newTodo = {title: "", description: ""};
				},
				function(error){
					var x=10;

				});
		}

		vm.refreshTodos = function(){
			todoService.get().then(
				function(success){
					vm.cats = success.data;
				},
				function(error){

				});
		}

		_init();
	}

}());