define(['angular'], function(angular) {
  //Uses extras in here.


angular.module('Demo', [])
  .controller('demoCtrl', ['$scope', function ($scope) {
    var greetingEN = 'Hello';
    var greetingSP = 'Hola';    
    $scope.greeting = '';

    $scope.setEnglish = function() {
      $scope.greeting = greetingEN;
    };

    $scope.setSpanish = function() {
      $scope.greeting = greetingSP;
    };

}]);

});