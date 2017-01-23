/**
 * Created by Administrator on 2017/1/17.
 */

app = angular.module('eshopCms');

app.service('ProductService', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});