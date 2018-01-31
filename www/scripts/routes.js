// define(['ionic'], function () {

    'use strict';
    console.log('--routes');

    angular.module('app')
        .config(
        function($stateProvider) {
            //debugger;
            $stateProvider
            // .state('root', {
            //     url: '/',
            //     //cache: true,
            //     template: "templates/demo.html",
            // })
            .state('demo', {
                url: '/demo',
                templateUrl: "../templates/demo.html",
                //prefetchTemplate: true,
                //cache: true,
                controller: 'demoCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: "../templates/about.html",
                //prefetchTemplate: true,
                //cache: true,
                controller: 'aboutCtrl'
            })

            // var demoState = {
            //     name: 'demo',
            //     url: '/demo',
            //     template: '<h3>hello world!</h3>'
            //   }
            
            //   var aboutState = {
            //     name: 'about',
            //     url: '/about',
            //     template: '<h3>Its the UI-Router hello world app!</h3>'
            //   }
            
            //   $stateProvider.state(demoState);
            //   $stateProvider.state(aboutState);
        }
    );

// });