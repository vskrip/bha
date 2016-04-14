'use strict';

angular.module('bhaApp.ddcalc')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ddcalc', {
        url: '/ddcalc',
        templateUrl: 'app/ddcalc/ddcalc.html',
        controller: 'DDcalcController',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
