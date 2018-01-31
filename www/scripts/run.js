
// define(['ionic'], function () {

    'use strict';
    console.log('--run');

    angular.module('app')
        .run(['$rootScope', function($rootScope){

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                console.log('--stateChangeStart');
                console.log(toState);
                console.log(fromState);
            })
        }])
    ;

// });
