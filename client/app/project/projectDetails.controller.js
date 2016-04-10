'use strict';

angular.module('bhaApp.project')
  .controller('ProjectDetailsController', function ($scope, $state, $stateParams, $http) {

    var vm = this;

    vm.title = 'Add Project';
    vm.project = {};
    function saveProject() {
        
        $http.put('/api/projects/' + vm.project._id, vm.project);

        $state.go('/api/projects');

        $scope.$emit('projects-updated');
    }
    
    vm.saveProject = saveProject;
    function initController() {
        if ($stateParams.id) {
            vm.title = 'Edit Project';
            $http.get('/api/projects/' + $stateParams.id)
                .success(function(project) {
            vm.project = project;
            });
        }
    }
    initController();    	
  });