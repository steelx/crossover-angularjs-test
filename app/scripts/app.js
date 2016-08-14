'use strict';

/**
 * @ngdoc overview
 * @name crossoverTestAjinkyaApp
 * @description
 * # crossoverTestAjinkyaApp
 *
 * Main module of the application.
 */
angular
  .module('crossoverTestAjinkyaApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'scripts/mainTable/table.html',
        controller: 'MainTableController',
        controllerAs: 'MainTableCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
