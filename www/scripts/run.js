
// define(['ionic'], function () {

    'use strict';
    console.log('--run');

    angular.module('app')
        .run(['$rootScope', '$state', function($rootScope, $state){

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                console.log('--stateChangeStart');
                console.log(toState);
                console.log(fromState);
            })
            
            // load us an initial route.  we could/should do this in routes
            $state.go('demo');
        }])
    ;

// });
