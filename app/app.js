'use strict';

// Declare app level module which depends on views, and components
angular.module('eshopCms', [
  'ui.router'
])
.config(function($stateProvider) {
  //设置首页
  var indexState = {
    name: 'index',
    url: '',
    controller: 'statisticsController',
    templateUrl: 'statistics/statistics.html'
  }

  var productsListState = {
    name: 'productsList',
    url: '/products/list',
    controller: 'productsListController',
    templateUrl: '/product/product-list.html'
  }

  var ProductsCreateState = {
    name: 'productsCreate',
    url: '/products/create',
    controller: 'createProductController',
    templateUrl: '/product/product-create.html'
  }

  $stateProvider.state(indexState);
  $stateProvider.state(productsListState);
  $stateProvider.state(ProductsCreateState);
})
.controller('statisticsController', [function($scope) {
  console.log('statisticsController');
}])
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
