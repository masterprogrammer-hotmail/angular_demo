define(['angular'], function () {

    angular.module('app').factory('swapiService', function ($http, $q) {

        var _swapiurl = 'https://swapi.co/api/';

        function getRoot() {

            var deferred = $q.defer();

            $http.get(_swapiurl)
                .then(function (response) {
                    // Success
                    deferred.resolve(response.data);

                }, function (response) {
                    // On Error
                    deferred.reject('There was an error with the service call.');
                });

            return deferred.promise;
        }

        return {
            getRoot: getRoot
        }
    });

});