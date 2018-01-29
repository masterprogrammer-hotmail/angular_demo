define(['angular'], function (angular) {

    'use strict';

angular.module('app')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
         .when('/', {
          templateUrl: '../templates/demo.html',
          controller: 'demoCtrl',
          })
        .otherwise('/');

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(false);
      });
});