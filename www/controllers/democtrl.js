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

      $scope.getSWAPIData = function(){

        swapiService.getRoot()
          .then(function(data) {
            $scope.swapidata = data;
            console.log(data);
          },
          function(errorMessage) {
            // error
            console.log("Error: ", errorMessage)
          }
        );

        // swapiService.getRoot2()
        //   .then(function(data) {
        //     console.log(data);
        //     $scope.swapidata2 = data;
        //   },
        //   function(errorMessage) {
        //     // error
        //     console.log("Error: ", errorMessage)
        // });

      }

  }]);

});