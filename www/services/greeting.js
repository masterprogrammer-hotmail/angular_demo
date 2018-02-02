define(['angular'], function() {

  angular.module('app')
    .factory('GreetingSVC', function() {
      // factory function body that constructs shinyNewServiceInstance
      return {
        en: {'lang':'EN','greeting':'Hello'},
        sp: {'lang':'SP','greeting':'Hola'}
      };
  });

});