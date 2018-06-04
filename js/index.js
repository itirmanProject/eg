angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('AppCtrl', function($scope) {
  $scope.clearValue = function() {
    $scope.vin = undefined;
    $scope.iccid = undefined;
    $scope.acan = undefined;
    $scope.acan = undefined;
    $scope.category = undefined;
    $scope.parameters = undefined;
    $scope.bodyNumber = undefined;
    $scope.brand = undefined;
    $scope.color = undefined;
    $scope.code = undefined;
    $scope.myForm.$setPristine();
  };

  $scope.user = {
   		ascan: '123456789',
      
    };

});