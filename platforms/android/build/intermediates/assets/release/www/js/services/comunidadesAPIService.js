angular.module('starter').service("comunidadesAPIService",function($http, Server){

 this.getComunidades = function(){
   return $http.get(Server.url + "/comunidades/?format=json");
 };

});
