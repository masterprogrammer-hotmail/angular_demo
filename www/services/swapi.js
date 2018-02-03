define(['angular'], function () {

    angular.module('app').factory('swapiService', function ($http, $q) {

        var _swapiurl = 'https://swapi.co/api/';

        // this is the public section of the service; we will use this to set up anything we need to make the call
        function getRoot() {

            var deferred = $q.defer();

            // make the private call for data
            $http.get(_swapiurl).then(function(response){
                // Success
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject('The force is weak with the SWAPI');
            });

            return  deferred.promise;
        }

        return {
            getRoot: getRoot
        }
    });

});