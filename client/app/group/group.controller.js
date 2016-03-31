'use strict';
(function(){

class GroupComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bhaApp')
  .component('group', {
    templateUrl: 'app/group/group.html',
    controller: GroupComponent
  });

})();
