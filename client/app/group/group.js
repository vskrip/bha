'use strict';

angular.module('bhaApp.group')
  .config(function ($stateProvider) {
    $stateProvider
      .state('groups', {
        url: '/groups',
        templateUrl: 'app/group/group.html',
        controller: 'GroupController',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
