'use strict';

angular.module('bhaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        template: '<project></project>'
      });
  });
