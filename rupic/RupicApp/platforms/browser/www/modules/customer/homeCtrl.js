'use strict';
 
var app = angular.module("RUPIC");

app.controller('homeCtrl', ['$scope', 'rupicFactory', 
        function ($scope, rupicFactory) {
      
      $scope.message = "This is Customer Dashboard";

      $scope.getbalance = function(loginform){
        console.log(loginform);
        rupicfactory.getbalance()
        .then(function (response) {
              $scope.message = 'Updated Customer! Refreshing customer list.';
          }, function (error) {
              $scope.message = 'Unable to update customer: ' + error.message;
          });
      }
    }]);    

 
/*
app.controller('homeCtrl',['$scope',
    function ($scope) {
      $scope.message = "Please enter Denominations";
    }]);


 */
 
 
 