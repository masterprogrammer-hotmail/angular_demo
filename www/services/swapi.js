define(['angular'], function() {

    angular.module('app')
      .factory('SWAPISVC', function($http, $q) {
        var deferred = $q.defer();

        return $q(function(resolve, reject) {

            $http.get('https://swapi.co/api/')
                .then(function(response) {

                    console.log("SWAPI SUCCESS: ", response);
    
                    resolve(response.data);
            
                }, function(response) {
                    // On Error
                    console.log('Error: ', response);

                    reject('There was an error with the service call.');
                });

        }); // /$q

    }); // /module
  
  });