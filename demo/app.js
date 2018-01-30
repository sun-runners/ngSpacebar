'use strict';

angular.module('app', [
    'ui.router',
    'ngAria',
    'ngResource',
    'ngSpacebar'
  ]).run(function($rootScope, $timeout, $state){

  $rootScope.window = window;
  $rootScope.$state = $state;
});
