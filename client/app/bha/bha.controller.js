'use strict';
(function(){

class BhaComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bhaApp')
  .component('bha', {
    templateUrl: 'app/bha/bha.html',
    controller: BhaComponent
  });

})();
