define(['angular'], function () {

    angular.module('app').factory('swapiService', function ($http, $q) {

        var _swapiurl = 'https://swapi.co/api/';

        // this is the public section of the service; we will use this to set up anything we need to make the call
        function getRoot() {
            return $http.get(_swapiurl);
        }

        return {
            getRoot: getRoot,
        }
    });

});