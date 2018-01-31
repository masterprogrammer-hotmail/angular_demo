// define(['../services/greeting', '../js/key'], function () {

  'use strict';

  console.log('--democtrl');

  angular.module('app')
    .controller('demoCtrl', ['$scope','GreetingSVC', 'IMPORTED_KEY', function ($scope, GreetingSVC, IMPORTED_KEY) {
    //.controller('demoCtrl', ['$scope', function ($scope) {

      console.log('--in democtrl');

      //$scope.appkey = key;
      $scope.appkey = IMPORTED_KEY;

      $scope.greeting = GreetingSVC.en;
      
      $scope.setEnglish = function() {
        $scope.greeting = GreetingSVC.en;
      };

      $scope.setSpanish = function() {
        $scope.greeting = GreetingSVC.sp;
      };
  }]);

// });