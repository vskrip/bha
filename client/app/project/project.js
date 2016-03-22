'use strict';

angular.module('bhaApp.project')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectComponent',
        controllerAs: 'project',
        authenticate: 'user'
      });
  });
