'use strict';

angular.module('eshopCms.productsList', ['ui.router'])

.config(function($stateProvider) {
  var productsListState = {
    name: 'productsList',
    url: '/products/list',
    template: '/list.html'
  }

  var productsCreateState = {
    name: 'productsCreate',
    url: '/products/create',
    template: '<h3>Products create view!</h3>'
  }

  $stateProvider.state(productsListState);
  $stateProvider.state(productsCreateState);
})

//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/products/list', {
//    templateUrl: '/list.html',
//    controller: 'ProductsListController'
//  });
//}])

.controller('ProductsListController', [function() {

}]);