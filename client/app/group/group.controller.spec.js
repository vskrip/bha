'use strict';

describe('Component: GroupComponent', function () {

  // load the controller's module
  beforeEach(module('bhaApp'));

  var GroupComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    GroupComponent = $componentController('GroupComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
