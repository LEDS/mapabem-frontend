angular.module('starter').controller("ElementoDetalhesCtrl", function($scope, $ionicLoading, $window, elementosVar){
  $ionicLoading.show();
  $scope.elementos = elementosVar.data;

  //Quando ElementosCtrl for usado por elementoDetalhes.html só será retornado um elemento,
  //para não exibir campos nulos criamos essa abordagem para ser verificado por ng-show.
  var verificaCampo = $scope.elementos[0];
  $scope.descricao = verificaCampo.descricao;
  $scope.endOficial = verificaCampo.endereco_oficial;
  $scope.endUsual = verificaCampo.endereco_usual;
  $scope.nomeProprietario = verificaCampo.nome_do_proprietario;
  $scope.telefone = verificaCampo.telefone;
  $scope.artistas = verificaCampo.lista_de_artistas;
  $scope.obras = verificaCampo.lista_de_obras;
  $ionicLoading.hide();

  $scope.buscarMapa = function(elemento){
       var mapaConcatenado = "http://maps.google.com/maps?q=description+(name)+%40"+ elemento.latitude + "," + elemento.longitude;
       $window.open(mapaConcatenado, "_system");
  };

});
