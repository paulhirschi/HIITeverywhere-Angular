'use strict';

/**
 * @ngdoc overview
 * @name hiitAngularApp
 * @description
 * # hiitAngularApp
 *
 * Main module of the application.
 */
angular
  .module('hiitAngularApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/body', {
        templateUrl: 'views/body.html',
        controller: 'MainCtrl'
      })
      .when('/intensity', {
        templateUrl: 'views/intensity.html',
        controller: 'MainCtrl'
      })
      .when('/workout', {
        templateUrl: 'views/workout.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });