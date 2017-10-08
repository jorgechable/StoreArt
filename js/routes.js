angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.instrucciones', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instrucciones.html',
        controller: 'instruccionesCtrl'
      }
    }
  })

  .state('menu.informaciN', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informaciN.html',
        controller: 'informaciNCtrl'
      }
    }
  })

  .state('menu.desarrolladores', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/desarrolladores.html',
        controller: 'desarrolladoresCtrl'
      }
    }
  })

  .state('menu.contactar', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactar.html',
        controller: 'contactarCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.inicio', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page5')


});