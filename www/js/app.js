define(['angular'], function(angular) {
  //Uses extras in here.


angular.module('Demo', [])
  .controller('demoCtrl', ['$scope', function ($scope) {
    $scope.greetingEN = 'Hello';
    $scope.greetingSP = 'Hola';
    console.log('app.js');
}]);

});