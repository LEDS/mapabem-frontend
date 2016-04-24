angular.module('starter').service("elementosAPIService",function($http, Server){
   this.getElementos = function(){
        return $http.get(Server.url +"/todos/?format=json");
    };

    this.getElementoDetalhes = function(id){
         return $http.get(Server.url + "/elemento/"+id+"/?format=json");
     };

      this.getElementoInComunidade = function(id){
        return $http.get(Server.url + "/todos/comunidade/"+id+"/?format=json");
    };

    this.getElementoInCategoria = function(id){
      return $http.get(Server.url + "/todos/categoria/"+id+"/?format=json");
    };

    this.getElementoInComunidadeCategoria = function(idComunidade,idCategoria){
      return $http.get(Server.url + "/todos/comunidade/"+idComunidade+"/categoria/"+idCategoria+"/?format=json");
    };
});
