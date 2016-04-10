'use strict';

angular.module('bhaApp.project')
  .controller('ProjectController', function ($scope, $http) {
		var vm = this;
    vm.projectList = [];

    function loadProjects() {
    $http.get('/api/projects').success(function(projectList) {
        vm.projectList = projectList;
    });
    }

    function initController() {
        loadProjects();

        $scope.$on('projects-updated', loadProjects);
    }

    initController();
  });