'use strict';

angular.module('eshopCms.product', ['ui.router', 'ProductService'])

.config(function($stateProvider) {
  var productsListState = {
    name: 'productsList',
    url: '/products/list',
    component: 'productComponent',
    resolve: {
      products: function(ProductService) {
        return ProductService.getProducts();
      }
    }
  }

  var productsShowState = {
    name: 'productsShow',
    url: '/products/{productId}',
    component: 'productComponent',
    resolve: {
      product: function(ProductService, $transition$) {
        return ProductService.getProduct($transition$.params().personId);
      }
    }
  }

  $stateProvider.state(productsListState);
  $stateProvider.state(productsShowState);
})

.component('productComponent', {
  bindings: { products: '<' },

  template: '<h3>Some people:</h3>' +
  '<ul>' +
  '  <li ng-repeat="person in $ctrl.people">' +
  '    <a ui-sref="person({ personId: person.id })">' +
  '      {{person.name}}' +
  '    </a>' +
  '  </li>' +
  '</ul>'
})

//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/product/list', {
//    templateUrl: '/product.html',
//    controller: 'ProductsListController'
//  });
//}])

//.controller('ProductController', [function() {
//
//}]);