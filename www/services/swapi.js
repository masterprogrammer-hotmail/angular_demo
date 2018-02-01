define(['angular'], function() {

    angular.module('app')
      .factory('SWAPISVC', function($http) {
          
        var promise = $http.get('https://swapi.co/api/');

        return promise;
    });
  
  });