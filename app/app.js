'use strict';

// Declare app level module which depends on views, and components
angular.module('eshopCms', [
  'ui.router',
  'eshopCms.productsList'
]).
config(function($stateProvider) {

});
//config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//  $locationProvider.hashPrefix('!');
//
//  $routeProvider.otherwise({redirectTo: '/products'});
//}]);
