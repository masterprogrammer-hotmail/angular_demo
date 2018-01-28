define(['angular'], function(angular) {
  //Uses extras in here.


angular.module('Demo', [])
  .controller('demoCtrl', ['$scope', function ($scope) {
    $scope.greetingEN = 'Hello';
    $scope.greetingSP = 'Hola';
    $scope.greeting = '';
    console.log('app.js');

    $scope.setEnglish = function() {
      $scope.greeting = $scope.greetingEN;
    };

    $scope.setSpanish = function() {
      $scope.greeting = $scope.greetingSP;
    };

}]);

});