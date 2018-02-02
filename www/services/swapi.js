define(['angular'], function () {

    angular.module('app').factory('swapiService', function ($http, $q) {

        var _swapiurl = 'https://swapi.co/api/';

        // this is the public section of the service; we will use this to set up anything we need to make the call
        function getRoot() {

            var deferred = $q.defer();

            // DO PRE-CALL WORK

            // make the private call for data
            this.root_api.then(function(response){
                // Success
                deferred.resolve(response.data);
            }, function(error){
                console.log(error);
                deferred.reject('There was an error with the service call.');
            });

            return deferred.promise;
        }

        // this is the private section of the service; we will use this to do anything we need after making the call
        function root_api(uri) {
            $http.get(_swapiurl)
                .then(function (response) {
                    // Success
                    // DO POST-CALL WORK
                    return response;
                }, function (error) {
                    // On Error
                    console.log(error);
                }
            );
        }

        return {
            getRoot: getRoot,
        }
    });

});