define(['angular', '../services/greeting', '../js/key'], function () {

  'use strict';

  angular.module('app')
    .controller('demoCtrl', ['$scope','GreetingSVC', function ($scope, GreetingSVC) {
    //.controller('demoCtrl', ['$scope', function ($scope) {

      $scope.greeting = GreetingSVC.en;
      $scope.appkey = key;

      $scope.setEnglish = function() {
        $scope.greeting = GreetingSVC.en;
      };

      $scope.setSpanish = function() {
        $scope.greeting = GreetingSVC.sp;
      };
  }]);

});