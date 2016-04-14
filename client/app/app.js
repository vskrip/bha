'use strict';

angular.module('bhaApp', [
  'bhaApp.auth',
  'bhaApp.admin',
  'bhaApp.project',
  'bhaApp.bha',
  'bhaApp.equipment',
  'bhaApp.group',
  'bhaApp.ddcalc',
  'bhaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
