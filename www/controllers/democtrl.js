define(['angular', '../services/greeting', '../services/swapi'], function () {


angular.module('app')
  .controller('demoCtrl', ['$scope','GreetingSVC', 'swapiService', function ($scope, GreetingSVC, swapiService) {

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

    swapiService.getRoot()
      .then(function(data) {
        $scope.swapidata = data;
      },
      function(errorMessage) {
        // error
        console.log("Error: ", errorMessage)
    });

    swapiService.getRoot2()
      .then(function(data) {
        $scope.swapidata2 = data;
      },
      function(errorMessage) {
        // error
        console.log("Error: ", errorMessage)
    });

}]);

});