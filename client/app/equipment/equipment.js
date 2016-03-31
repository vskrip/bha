'use strict';

angular.module('bhaApp.equipment')
  .config(function ($stateProvider) {
    $stateProvider
      .state('equipment', {
        url: '/equipment',
        templateUrl: 'app/equipment/equipment.html',
        controller: 'EquipmentController',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
