'use strict';
//
// (function(){
//
// class ProjectComponent {
//
//   constructor($http) {
// 		this.$http = $http;
//     this.projectList = [];
//   }
//
//   $onInit() {
//     this.$http.get('/api/projects').then(response => {
//       this.projectList = response.data;
//     });
//   }
//
// }
//
// angular.module('bhaApp')
//   .component('project', {
//     templateUrl: 'app/project/project.html',
//     controller: ProjectComponent
//   });
//
// })();

angular.module('bhaApp.project')
  .controller('ProjectController', function ($scope, $http) {
    $scope.projectList = [];

    $http.get('/api/projects').success(function(projectList) {
      $scope.projectList = projectList;
    });

  });