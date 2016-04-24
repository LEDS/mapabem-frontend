angular.module('starter').controller("ProcurarCtrl", function($scope, $location, $ionicLoading, comunidadesVar, categoriasVar){
  $ionicLoading.show();
  $scope.comunidades = comunidadesVar.data;
  $scope.categorias = categoriasVar.data;
  $ionicLoading.hide();

  $scope.goToRoute = function(comunidadeId, categoriaId){
    $ionicLoading.show();
    var link = '/app/elementoBusca/' + comunidadeId.id + '/' + categoriaId.id;
    $ionicLoading.hide();
    $location.path(link);
  }
});
