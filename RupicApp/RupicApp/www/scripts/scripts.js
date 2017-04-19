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
$scope.showmsg = false;
	
 $scope.submit=function(login){
 	 //console.log(e.accno);
 	 console.log("Request Started");

 	 var promise = rupicfactory.login(login);
 	 console.log("Request Completed");
 	 //console.log(promise);
 	 promise.then(function(result){ 
 	 	console.log(result);
 	 	if(result.login==true){
 	 		//$scope.showmsg = true;
 	 		//$scope.customer = result.data;
 	 		return $location.path("/pickuptype"),!1
 	 	}
 	 	else{
 	 		$scope.message = result.desc;
 	 	}
 	 },function(error){
 	 	$scope.message = "An error occurred";
 	 	console.log(error);
 	 });
 	}
}])

,angular.module("rupicapp").controller("pickupcashCtrl",["$scope","$location",function($scope,t){

 $scope.denom100 = 0;  $scope.denom500 = 0;  $scope.denom1000 = 0;  $scope.denom2000 = 0; $scope.total = 0;
 	
 $scope.submit=function(){
	 return t.path("/pickupdetails"),!1
	}

$scope.add=function(e){
	  if(e==100){
	  	$scope.denom100 = $scope.denom100+1;
	  	$scope.total = $scope.total + e * $scope.denom100;
	  	return $scope.denom100;
	  }
	  	
	  if(e==500){
	  	$scope.denom500 = $scope.denom500+1;
	  	$scope.total = $scope.total + e * $scope.denom500;
	  	return $scope.denom500;
	  }
	  if(e=1000){
	  	$scope.denom1000 = $scope.denom1000+1;
	  	$scope.total = $scope.total + e * $scope.denom1000;
	  	return $scope.denom1000;
	  }
	  if(e=2000){
	  	$scope.denom2000 = $scope.denom2000+1;
	  	$scope.total = $scope.total + e * $scope.denom2000;
	  	return $scope.denom2000;
	  }
}

$scope.subtract=function(e){
	  if(e==100){
	  	if($scope.denom100 > 0){
		  	$scope.denom100 = $scope.denom100-1;
		  	$scope.total = $scope.total - (e * $scope.denom100);}
	  	return $scope.denom100;
	  }
	  if(e==500)	{
	  	if($scope.denom500 > 0){
		  	$scope.denom500 = $scope.denom500-1;
		  	$scope.total = $scope.total - (e * $scope.denom500);}
	  	return $scope.denom500;
	  	}
	  if(e=1000)	{
	  	if($scope.denom1000 > 0){
		  	$scope.denom1000 = $scope.denom1000-1;
		  	$scope.total = $scope.total - (e * $scope.denom1000);}
	  	return $scope.denom1000;
	  	}
	  if(e=2000){
	  	if($scope.denom2000 > 0){
		  	$scope.denom2000 = $scope.denom2000-1;
		  	$scope.total = $scope.total - (e * $scope.denom2000);}
	  	return $scope.denom2000;
	  }
}	


}])

,angular.module("rupicapp").controller("DashboardCtrl",["$scope","$state",function(r,t){

r.$state=t
//console.log(r.$state);
}]);