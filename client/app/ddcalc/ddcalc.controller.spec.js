'use strict';

describe('Component: DdcalcComponent', function () {

  // load the controller's module
  beforeEach(module('bhaApp'));

  var DdcalcComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DdcalcComponent = $componentController('DdcalcComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
