define(['angular'], function() {

    angular.module('app')
      .factory('SWAPISVC', function($http) {
          
        $http.get('https://swapi.co/api/').success(function(data) {
            return data;
        });

    });
  
  });