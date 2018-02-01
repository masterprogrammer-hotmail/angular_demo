define(['angular', '../services/greeting', '../services/swapi'], function () {


angular.module('app')
  .controller('demoCtrl', ['$scope','GreetingSVC', 'SWAPISVC', function ($scope, GreetingSVC, SWAPISVC) {

    $scope.greeting = GreetingSVC.en;

    $scope.setEnglish = function() {
      $scope.greeting = GreetingSVC.en;
    };

    $scope.setSpanish = function() {
      $scope.greeting = GreetingSVC.sp;
    };

    $scope.showNextURL = function(nextURL) {
      console.log('nextURL:' , nextURL)
    };

    SWAPISVC.fetch()
      .then(function(data) {
        $scope.swapidata = data;
      },
      function(errorMessage) {
        // error
    });

}]);

});