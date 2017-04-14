'use strict';
 
var app = angular.module("RUPIC");

app.controller('logoutCtrl',
    ['$scope',
    function ($scope) {
      $scope.message = "You have logged out!"
    }]);    

app.controller('pickupcashCtrl',
    ['$scope',
    function ($scope) {
      $scope.message = "Please enter Denominations"
    }]);    

app.controller('pickupchequeCtrl',
    ['$scope',
    function ($scope) {
      $scope.message = "Please enter Cheque details"
    }]);    

