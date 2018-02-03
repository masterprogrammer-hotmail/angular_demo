// The main app definition
/*define(['angular'], function () {

    'use strict';

    console.log('app.js');

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });
    
    // the app with its plugins
    //var app = angular.module('app', []);

    // return the app so you can require it in other components
    //return app;
});*/

define(['angular'], function() {
    var app = angular.module('app', []);

    return app;
});