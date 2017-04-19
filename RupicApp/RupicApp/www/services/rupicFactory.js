angular.module('rupicapp').factory('rupicFactory', 
['$http','$q','$location', function($http,$q,$location) {
    var rupicFactory = {};
    var dataUrl = "https://retailbanking.mybluemix.net/banking/icicibank/";
    var objCustomer = {"accounttype":"Savings Account", "accountno":"4444777755551681", "balance":"50,000" };
    var authlogin = false;
    var userdetails;
    
 
//Get CustomerDetails
    rupicFactory.getcustomerinfo = function(){
        //console.log(objCustomer);

        if(objCustomer==null || objCustomer=="")
            return $location.path("/login")
           
        return objCustomer;
    }

    rupicFactory.login = function(login){
        var deferred = $q.defer();
        var result = { "login" : false, "data" : "No data found", "code" : 0, "desc":"Unknown Error!" }; 
        var obj = $http.get(dataUrl + 'balanceenquiry/',
        {
            params: {
                "client_id":"vijayrnairnow@gmail.com",
                "token":"6582adec77e4",
                "accountno": login.accno
            } 
        }).then(function(response){
                //$q.resolve(response);
                console.log("Promise fullfilled");
                for(var x in response.data){
                 if(x==1){
                   result.data = response.data[x]; 
                   result.code = response.status; 
                   result.desc =  response.statusText;
                   console.log(response);
                   if(response.statusText == "OK"){
                        result.login = true;
                        authlogin = result.login;
                        objCustomer = result.data;
                    }}
                 else  {
                    
                   objCustomer = null; 
                   result.data = response.data[x]; 
                   result.code = response.data[x].code; 
                   result.desc = response.data[x].description 
                   //console.log(objResponse); 
                    }
                }


                return result;
        },function(error){
                //$q.reject(error.data);
                console.log("An error occured");
                if(error.data == null){result.login = false; result.desc = "error unknown";}
                result.login
                console.log(error);
                return result;
        });

        return obj;
    } 
     

 //Login Functions Start
    rupicFactory.authenticate = function(login){
        var statuscode, status, result = false;
        userdetails = login;    
        var deferred = $q.defer();
        console.log("Get Start");
        var objCred = $http.get(dataUrl + 'balanceenquiry/',
        //$http.get(dataUrl + 'balanceenquiry/',
        {
            params: {
                "client_id":"vijayrnairnow@gmail.com",
                "token":"6582adec77e4",
                "accountno": login.accno
            } 
        })
        .then(function(response) {
            //console.log(response);
              deferred.resolve(response.data);
              console.log(response.data[0]);
              for(var x in response.data){
                 if(x==1){
                   objCustomer = response.data[x]; statuscode = objCustomer.code; status =  response.statusText;
                   //console.log(objCustomer);
               }
                 else  {
                   objCustomer = null; 
                   objResponse = response.data[x]; statuscode = objResponse.code; status = objResponse.description 
                   //console.log(objResponse); 
               }
              }
                if(status=="OK") { result = true ; } else {result = false;}
                result = { "result": result, "desc" : status, };
                console.log("Returning Fullfiled Promise");
                console.log(result);
                //if(result==true){ $location.path("/home"); }
                return result;
            },function(success){
                console.log("http Fullfiled Promise");
                console.log(success.data);
                return success.data;
            }
            ,function(error){
            console.log(error);
            deferred.reject(error);
        });
        
        console.log("Returning Initial Promise")
        return objCred 
    }
//Login Functions Start


    rupicFactory.getCustomerData = function(){
        console.log(userdetails);
        console.log(objCustomer);
        return objCustomer;
    }

    rupicFactory.getbalance = function () {
        //var objbalance = $http.get("/data/balance.js");
        //return objbalance;
        return "50000";
    };

    return rupicFactory;
}])
 