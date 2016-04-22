angular.module('starter').controller("ElementosCategoriaCtrl", function($scope, $ionicPopup, $state, $ionicLoading, elementosVar){
  $ionicLoading.show();
  $scope.elementos = elementosVar.data;
  $ionicLoading.hide();

  if($scope.elementos.length == 0){
    $ionicPopup.alert({
     title: 'Alerta',
     cssClass: 'alertPopUp',
     template: 'Desculpe, mas ainda não existem dados para essa busca.'
   }).then(function(){
     $state.go('app.categorias');
   });
 };

});
