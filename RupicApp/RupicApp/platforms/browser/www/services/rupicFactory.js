angular.module('rupicapp').factory('rupicFactory', ['$http', function($http) {
    var authFactory = {};
 
    rupicFactory.authenticate = function(e){
	alert("authenticate");
    console.log(e);
	}

	rupicFactory.getbalance = function () {
        var objbalance = $http.get("/data/balance.js");
        return objbalance;
    };


    return authFactory;
}])


/*angular.module('eventApp').factory('authFactory', ['FBMSG', function(FBMSG) {
    var authFactory = {};
    var ref = new Firebase(FBMSG);
    authFactory.createUser = function(email, password) {
        ref.createUser({
            email: email,
            password: password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user: ", error);
            } else {
                console.log("Successfully created user account with uid: ", userData.uid);
            }
        });
    }
    return authFactory;
}])*/

/*

angular.module('RUPIC')

.factory('rupicFactory', ['$http', function($http) {
    
var rupicFactory = {};
var urlBase = '/data/';

rupicFactory.authenticate = function(e){
	alert("authenticate");
    console.log(e);
}

rupicFactory.getbalance = function () {
        var objbalance = $http.get("/data/balance.js");
        return objbalance;
    };

return rupicFactory;

}]);*/