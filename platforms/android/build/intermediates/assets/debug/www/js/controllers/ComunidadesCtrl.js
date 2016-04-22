angular.module('starter').controller("ComunidadesCtrl", function($scope, $ionicLoading, comunidadesVar){
  $ionicLoading.show();
  $scope.comunidades = comunidadesVar.data;
  $ionicLoading.hide();
});
