'use strict';

angular.module('bhaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        template: '<about></about>'
      });
  });
