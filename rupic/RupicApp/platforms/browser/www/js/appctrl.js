'use strict';
 
var app = angular.module("RUPIC", ["ngRoute"]);

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "modules/customer/login/login.view.html",
        controller : "loginCtrl"
    })
    .when("/home", {
        templateUrl : "modules/customer/home/home.view.html",
		controller : "homeCtrl"
    })
    .when("/logout", {
        template : "<h4>{{message}}</h4>",
        controller : "logoutCtrl"
    })

    .when("/signup", {
        templateUrl : "modules/customer/signup/signup.view.html",
        controller : "signupCtrl"
    })

    .when("/login", {
        templateUrl : "modules/customer/login/login.view.html",
        controller : "loginCtrl"
    })
    .when("/register", {
        templateUrl : "modules/customer/register/register.view.html",
        controller : "registerCtrl"
    })
    .when("/pickupcash", {
        templateUrl : "modules/customer/pickup/cashdenom.view.html",
        controller : "pickupcashCtrl"
    })
    .when("/pickupcheque", {
        templateUrl : "modules/customer/pickup/cheque.view.html",
        controller : "pickupchequeCtrl"
    })
	.otherwise({ redirectTo : "/"});

    $locationProvider.html5Mode(true);

}]);
 
