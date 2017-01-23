'use strict';

// Declare app level module which depends on views, and components
angular.module('eshopCms', [
  'ui.router'
])
.config(function($stateProvider) {
  var productsListState = {
    name: 'productsList',
    url: '/products/list',
    controller: 'productsListController',
    template: 'product-list.html'
  }

  $stateProvider.state(productsListState);
})
.controller('applicationController', [function($scope) {
  console.log('applicationController');
}])
.controller('productsListController', [function($scope) {
  console.log('productsListController');
}]);
//.
//config(function($stateProvider) {
//
//});
//config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//  $locationProvider.hashPrefix('!');
//
//  $routeProvider.otherwise({redirectTo: '/product'});
//}]);
