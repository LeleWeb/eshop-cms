'use strict';

angular.module('eshopCms.product', ['ui.router', 'ProductService'])

.config(function($stateProvider) {
  var productsShowState = {
    name: 'productsShow',
    url: '/products/{productId}',
    controller: 'productsShowController',
    template: 'product-show.html'
  }

  $stateProvider.state(productsShowState);
})

//.component('productComponent', {
//  bindings: { products: '<' },
//
//  template: '<h3>Some people:</h3>' +
//  '<ul>' +
//  '  <li ng-repeat="person in $ctrl.people">' +
//  '    <a ui-sref="person({ personId: person.id })">' +
//  '      {{person.name}}' +
//  '    </a>' +
//  '  </li>' +
//  '</ul>'
//})

//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/product/list', {
//    templateUrl: '/product-list.html',
//    controller: 'ProductsListController'
//  });
//}])

//.controller('productsListController', [function($scope) {
//  console.log('productsListController');
//}])
//
.controller('productsShowController', [function($scope) {
      console.log('productsShowController');
}]);