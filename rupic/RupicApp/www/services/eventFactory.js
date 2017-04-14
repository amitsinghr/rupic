angular.module('RUPIC')

.factory('rupicFactory','$http', '$q', 
function($http, $q) {
    
var rupicFactory = {};

rupicFactory.fetchData = function(event, eventlist){
    eventlist.push(event);
    return eventList
}

return rupicFactory;

})