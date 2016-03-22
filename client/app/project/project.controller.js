'use strict';
(function(){

class ProjectComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bhaApp')
  .component('project', {
    templateUrl: 'app/project/project.html',
    controller: ProjectComponent
  });

})();
