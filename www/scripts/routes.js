define(['angular','angular-route'], function (angular) {

    'use strict';
    
    angular.module('app')
    .config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        //$locationProvider.hashPrefix('!');
  
        $routeProvider
          .when('/', {
            template: '../templates/demo.html'
          })
          .when('/landing', {
            template: '../templates/landing.html'
          })
          .otherwise('/');
      }
    ]);
});