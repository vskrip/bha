'use strict';

angular.module('bhaApp.auth', [
  'bhaApp.constants',
  'bhaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
