'use strict';

angular.module('bhaApp.project')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
