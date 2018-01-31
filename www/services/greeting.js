// define([], function() {

  'use strict';

  console.log('--greeting');

  angular.module('app')
    .factory('GreetingSVC', function() {

    var obj = {
        en: 'Hello',
        sp: 'Hola'
    };
    // factory function body that constructs shinyNewServiceInstance
    return obj;
  });

// });