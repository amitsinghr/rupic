"use strict";
angular.module("rupicapp",["ui.router","snap","ngAnimate"])

.config(["$stateProvider","$urlRouterProvider",function(r,t){

t.when("/dashboard","/dashboard/overview"),
t.when("/pickuptype","/dashboard/pickuptype"),
t.when("/pickupcheque","/dashboard/pickupcheque") 
,t.otherwise("/login"),

r.state("base",{
	"abstract":!0,
	url:"",
	templateUrl:"views/base.html"
})

.state("login",{
	url:"/login",
	parent:"base",
	templateUrl:"views/login.html",
	controller:"LoginCtrl"
})

.state("dashboard",{
	url:"/dashboard",
	parent:"base",
	templateUrl:"views/dashboard.html",
	controller:"DashboardCtrl"
})

.state("pickupcash",{
	url:"/pickupcash",
	parent:"dashboard",
	templateUrl:"views/dashboard/pickup-cash.html",
	controller:"pickupcashCtrl"
})

.state("pickuptype",{
	url:"/pickuptype",
	parent:"dashboard",
	templateUrl:"views/dashboard/pickuptype.html"
})

.state("pickupcheque",{
	url:"/pickupcheque",
	parent:"dashboard",
	templateUrl:"views/dashboard/pickup-cheque.html"
})

.state("pickupdetails",{
	url:"/pickupdetails",
	parent:"dashboard",
	templateUrl:"views/dashboard/pickupdetails.html"
})}])

,angular.module("rupicapp").controller("LoginCtrl",["$scope","$location","rupicFactory",function($scope,$location,rupicfactory){

$scope.customer = rupicfactory.getcustomerinfo();//{"acctype":"Savings Account", "accno":"4444777755551681", "balance":"50,000" }

$scope.submit=function(login){
   	 console.log("Request Started");
 	 $scope.loading = true;
     var promise = rupicfactory.login(login);
 	  	  
 	 promise.then(function(result){ 
 	 	console.log(result);
 	 	$scope.loading = false;
 	 	if(result.login==true){
 	 		return $location.path("/pickuptype"),!1
 	 	}
 	 	else{
 	 		$scope.loading=true;
 	 		$scope.message = result.desc;
 	 		login.accno="";
 	 	}
 	 },function(error){
 	 	$scope.loading = true;
        $scope.message = "An error occurred";
 	 	console.log(error);
 	 },function(){
 	 	$scope.loading = false;
        console.log("finally");
 	 });
 	}
}])

,angular.module("rupicapp").controller("pickupcashCtrl",["$scope",
														"$location",
														"rupicFactory",
														"geoLocationFactory",
														function($scope,t,rupicfactory,gl){

$scope.myform = {"denom100": 0, "denom500": 0, "denom1000": 0, "denom2000": 0, "total": 0}; 
 	
 $scope.submit=function(e){
 		console.log(e)
 		var obj = gl.myCoordinates(); 	
 		//rupicfactory.requestpickup(e);  
	}

$scope.add=function(e,n){
		console.log(n);
		if(n==100){e.denom100 = Number(e.denom100||0) + 1};
		if(n==500){e.denom500 = Number(e.denom500||0) + 1};
		if(n==1000){e.denom1000 = Number(e.denom1000||0) + 1};
		if(n==2000){e.denom2000 = Number(e.denom2000||0) + 1};
		e.total = (100* e.denom100) + (500*e.denom500) + (1000*e.denom1000) + (2000*e.denom2000);
		//$scope.myform.total = (100* e.denom100) + (500*e.denom500) + (1000*e.denom1000) + (2000*e.denom2000)
	  	console.log(e);
	  }

$scope.subtract=function(e,n){
		if(n==100){e.denom100 = Number(e.denom100||0) - 1};
		if(n==500){e.denom500 = Number(e.denom500||0) - 1};
		if(n==1000){e.denom1000 = Number(e.denom1000||0) - 1};
		if(n==2000){e.denom2000 = Number(e.denom2000||0) - 1};
		e.total = (100* e.denom100) + (500*e.denom500) + (1000*e.denom1000) + (2000*e.denom2000);
	}
}])
	
,angular.module("rupicapp").controller("DashboardCtrl",["$scope","$state",function(r,t){

r.$state=t
//console.log(r.$state);
}]);