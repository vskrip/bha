'use strict';

angular.module('bhaApp.bha')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bha', {
        url: '/bha',
        templateUrl: 'app/bha/bha.html',
        controller: 'BhaController',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
