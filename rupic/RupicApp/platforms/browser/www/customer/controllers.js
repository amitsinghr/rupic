'use strict';
 
var app = angular.module("RUPIC", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "customer/login/view.html",
		controller : "loginCtrl"
    })
    .when("/login", {
        templateUrl : "customer/login/view.html",
        controller : "loginCtrl"
    })
    .when("/register", {
        templateUrl : "customer/register/view.html",
        controller : "registerCtrl"
    })
	.otherwise({
        template : "customer/login/view.html",
		controller : "loginCtrl"
    });
});
 
 

 
app.controller('homeCtrl',
    ['$scope',
    function ($scope) {
      $scope.message = "This is customer Controller"
    }]);
	
 
 
app.controller('loginCtrl',
    ['$scope',
    function ($scope) {
      $scope.message = "This is Login Controller"
    }]);
	
 
 
app.controller('registerCtrl',
    ['$scope',
    function ($scope) {
      $scope.message = "This is Register Controller"
    }]);