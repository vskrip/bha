'use strict';

describe('Component: EquipmentComponent', function () {

  // load the controller's module
  beforeEach(module('bhaApp'));

  var EquipmentComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EquipmentComponent = $componentController('EquipmentComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
