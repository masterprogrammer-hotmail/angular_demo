define(['angular'], function() {

    angular.module('app')
      .factory('SWAPISVC', function($http, $q) {
        
        var swapiurl = 'https://swapi.co/api/';
        
        return { 
            fetch: function() {
                
                var deferred = $q.defer();

                $http.get('https://swapi.co/api/')
                    .then(function(response) {

                        console.log("SWAPI SUCCESS: ", response);

                        deferred.resolve(response.data);
                
                    }, function(response) {
                        // On Error
                        console.log('Error: ', response);

                        deferred.reject('There was an error with the service call.');
                    });

                return deferred.promise;
            }
        }
    }); // /module
  
  });