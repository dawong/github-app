'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('shiptchallengeApp'));

  var MainCtrl,
    UserService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    UserService = $injector.get('UserService');
  }));

  it('should be defined', function() {
    expect(MainCtrl).toBeDefined();
    expect(UserService).toBeDefined();
  });

  //MainCtrl tests
  it('validates username', function() {});
  it('loads user data', function() {});
  it('loads followers data', function() {});

  //UserService tests
  it('returns success', function() {});
  it('returns error', function() {});
});
