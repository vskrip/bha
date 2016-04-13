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
      })
      .state('projects.add', {
        url: '/add',
        parent: 'projects',        
        templateUrl: 'app/project/projectDetails.html',
        controller: 'ProjectDetailsController',
        controllerAs: 'vm',
        authenticate: 'user'
      })
      .state('projects.edit', {
        url: '/edit/:id',
        parent: 'projects',        
        templateUrl: 'app/project/projectDetails.html',
        controller: 'ProjectDetailsController',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
