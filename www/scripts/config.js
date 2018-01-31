// define(['app'], function (app) {

    'use strict';

    //var app = angular.module('app');
    angular.module('app')
        .constant("Constants", {
            platform: {
                web: "PLATFORM_WEB",
                mobile: "PLATFORM_MOBILE",
            },
            error: {
                DEFAULT_ERROR_MESSAGE: "An error has occurred.",
            },
        })
        .constant('appConfig', {
            version: '1.0.0.0',
        });

    // angular.module('app')
    //     .config(['$urlRouterProvider',
    //         function ($urlRouterProvider) {
    //             // You can also use regex for the match parameter
    //             //$urlRouterProvider.when(/aspx/i, '/index');

    //             // when there is an empty route, redirect to /demo   
    //             $urlRouterProvider.when('', '/demo');
    //             $urlRouterProvider.otherwise('/demo');
    //         }]);

    angular.module('app')
        .config(['$locationProvider',
            function ($locationProvider) {
                $locationProvider.html5Mode(true);
                //$locationProvider.hashPrefix('!');
            }]);
// });
