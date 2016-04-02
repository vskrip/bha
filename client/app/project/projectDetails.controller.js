'use strict';

angular.module('bhaApp.project')
  .controller('ProjectDetailsController', function ($scope, $state, $stateParams, $http) {

		var vm = this;

		vm.title = 'Add Project';
		vm.project = {};
		vm.saveProject = saveProject;

		initController();

		function initController() {
			if ($stateParams.id) {
				vm.title = 'Edit Project';
				vm.project = vm.$http.get('/api/projects/' + $stateParams.id);
			}
		}

		function saveProject() {
			
			vm.$http.put('/api/projects/' + vm.project._id, vm.project);

			$state.go('projects');

			$scope.$emit('projects-updated');
		}	
  });