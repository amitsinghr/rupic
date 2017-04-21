
app.module('rupicapp')
.factory('geoLocationFactory', ['$q', '$http', function myCoordinates($q, $http) {

  var deferred = $q.defer();

  $http.get('http://ip-api.com/json')
    .success(function(coordinates) {
      console.log(coordinates)
      var myCoordinates = {};
      myCoordinates.lat = coordinates.lat;
      myCoordinates.lng = coordinates.lon;
      myCoordinates.city = coordinates.city;
      deferred.resolve(myCoordinates);
  })

  return deferred.promise;

}])