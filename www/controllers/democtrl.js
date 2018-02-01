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

    // Star Wars API
    SWAPISVC.
      then(function(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("SWAPI SUCCESS: ", response);

        $scope.swapidata = response.data;

      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('Error: ', response);
      });

      $scope.showNextURL = function(url) {
        console.log("NextURL: ", url);
      };
}]);

});