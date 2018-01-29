define(['angular', '../services/greeting'], function () {


angular.module('app')
  .controller('demoCtrl', ['$scope','GreetingSVC', function ($scope, GreetingSVC) {
  //.controller('demoCtrl', ['$scope', function ($scope) {

    $scope.greeting = GreetingSVC.en;
    //$scope.greeting = "";

    $scope.setEnglish = function() {
      $scope.greeting = GreetingSVC.en;
    };

    $scope.setSpanish = function() {
      $scope.greeting = GreetingSVC.sp;
    };
}]);

});