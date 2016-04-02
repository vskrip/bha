'use strict';

angular.module('bhaApp.project')
  .controller('ProjectController', function ($scope, $http) {
		var vm = this;
    vm.projectList = [];

		initController();

		function initController() {
			loadProjects();

			$scope.$on('projects-updated', loadProjects);
		};

		function loadProjects() {
	    $http.get('/api/projects').success(function(projectList) {
	      vm.projectList = projectList;
	    });
		};
  });