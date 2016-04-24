angular.module('starter').controller("CategoriasCtrl", function($scope, $ionicLoading, categoriasVar){
  $ionicLoading.show();
  $scope.categorias = categoriasVar.data;
  $ionicLoading.hide();
});
