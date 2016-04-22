angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

  .state('app.sobre', {
    url: '/sobre',
    views: {
      'menuInfo': {
        templateUrl: 'templates/sobre.html'
      }
    }
  })

  .state('app.procurar', {
      url: '/procurar',
      views: {
        'menuContent': {
          templateUrl: 'templates/procurar.html',
          controller:'ProcurarCtrl'
        }
      },
      resolve:{
              comunidadesVar: function(comunidadesAPIService){
                return comunidadesAPIService.getComunidades();
              },
              categoriasVar: function(categoriasAPIService){
                return categoriasAPIService.getCategorias();
              }
      }
    })

    .state('app.comunidades', {
      url: '/comunidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/comunidades.html',
          controller: 'ComunidadesCtrl'
        }
      },
      resolve:{
              comunidadesVar: function(comunidadesAPIService){
                return comunidadesAPIService.getComunidades();
              }
      }
    })

    .state('app.comunidade', {
        url: '/comunidade/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/elementos.html',
            controller: "ElementosComunidadeCtrl"
          }
        },
        resolve:{
                elementosVar: function(elementosAPIService, $stateParams){
                        return elementosAPIService.getElementoInComunidade($stateParams.id);
                }
        }
      })

      .state('app.categorias', {
        url: '/categorias',
        views: {
          'menuContent': {
            templateUrl: 'templates/categorias.html',
            controller: 'CategoriasCtrl'
          }
        },
        resolve:{
                categoriasVar: function(categoriasAPIService){
                  return categoriasAPIService.getCategorias();
                }
        }
      })

      .state('app.categoria', {
          url: '/categoria/:id',
          views: {
            'menuContent': {
              templateUrl: 'templates/elementos.html',
              controller: "ElementosCategoriaCtrl"
            }
          },
          resolve:{
                  elementosVar: function(elementosAPIService, $stateParams){
                          return elementosAPIService.getElementoInCategoria($stateParams.id);
                  }
          }
        })

        .state('app.elementos', {
            url: '/elementos',
            views: {
              'menuContent': {
                templateUrl: 'templates/elementos.html',
                controller: "ElementosCtrl"
              }
            },
            resolve:{
                    elementosVar: function(elementosAPIService){
                            return elementosAPIService.getElementos();
                    }
            }
          })

        .state('app.elementosBusca/:idComunidade/:idCategoria', {
            url: '/elementoBusca/:idComunidade/:idCategoria',
            views: {
              'menuContent': {
                templateUrl: 'templates/elementos.html',
                controller: "ElementosBuscaCtrl"
              }
            },
            resolve:{
                    elementosVar: function(elementosAPIService, $stateParams){
                            return elementosAPIService.getElementoInComunidadeCategoria($stateParams.idComunidade, $stateParams.idCategoria );
                    }
            }
          })

          .state('app.elementoDetalhes', {
              url: '/elementoDetalhes/:id',
              views: {
                'menuContent': {
                  templateUrl: 'templates/elementoDetalhes.html',
                  controller: "ElementoDetalhesCtrl"
                }
              },
              resolve:{
                      elementosVar: function(elementosAPIService, $stateParams){
                              return elementosAPIService.getElementoDetalhes($stateParams.id );
                      }
              }
            });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/procurar');
});
