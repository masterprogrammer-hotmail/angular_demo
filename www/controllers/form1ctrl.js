define(['angular'], function () {

    angular.module('app')
    .controller('form1ctrl', ['$scope', function ($scope) {
      
        console.log('form1ctrl');


        // Update 
        $scope.update = function() {
            $scope.wasvalidated = true;
        };

        // Reset 
        $scope.reset = function(form) {
            
            if (form) {
                console.log('GOT FORM!!!');
            } else {
                console.log('no form');
            }

            //$scope.form.$setPristine();
            //form.$setUntouched();

            // Reset model
            $scope.user = {};
        };

        // Reset user by default
        $scope.reset();
    }]);

});