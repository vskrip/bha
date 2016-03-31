'use strict';
(function(){

class EquipmentComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bhaApp')
  .component('equipment', {
    templateUrl: 'app/equipment/equipment.html',
    controller: EquipmentComponent
  });

})();
