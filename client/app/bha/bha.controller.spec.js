'use strict';

describe('Component: BhaComponent', function () {

  // load the controller's module
  beforeEach(module('bhaApp'));

  var BhaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BhaComponent = $componentController('BhaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
