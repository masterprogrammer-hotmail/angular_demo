define(['angular', '../services/greeting', '../services/swapi'], function () {


angular.module('app')
  .controller('demoCtrl', ['$scope','GreetingSVC', 'SWAPISVC', function ($scope, GreetingSVC, SWAPISVC) {
  //.controller('demoCtrl', ['$scope', function ($scope) {

    $scope.greeting = GreetingSVC.en;
    $scope.swapi = SWAPISVC;

    $scope.setEnglish = function() {
      $scope.greeting = GreetingSVC.en;
    };

    $scope.setSpanish = function() {
      $scope.greeting = GreetingSVC.sp;
    };
}]);

});