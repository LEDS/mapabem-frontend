angular.module('starter').controller("ElementosCtrl", function($scope, $ionicPopup, $ionicLoading, elementosVar){
  $ionicLoading.show();
  $scope.elementos = elementosVar.data;
  $ionicLoading.hide();

  if($scope.elementos.length == 0){
    $ionicPopup.alert({
     title: 'Alerta',
     cssClass: 'alertPopUp',
     template: 'Desculpe, mas ainda não existem dados para essa busca.'
   })
 };

});
