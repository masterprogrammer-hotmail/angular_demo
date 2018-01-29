// The main app definition
define(['angular'], function () {

    'use strict';

    console.log('app.js');

    // the app with its plugins
    var app = angular.module('app', ['ng']);

    // return the app so you can require it in other components
    return app;
});