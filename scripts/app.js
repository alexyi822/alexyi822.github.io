(function() {

  'use strict';

  /**
   * @ngdoc overview
   * @name portfolioApp
   * @description
   * # portfolioApp
   *
   * Main module of the application.
   */
  angular
    // .module('portfolioApp', [
    //   'ngAnimate',
    //   'ngCookies',
    //   'ngResource',
    //   'ngRoute',
    //   'ngSanitize',
    //   'ngMaterial'
    // ])
    .module('portfolioApp', [
      'ngRoute',
      'ngMaterial'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
        })
        .when('/about', {
          templateUrl: 'views/about.html',
        })
        .when('/resume', {
          templateUrl: 'views/resume.html',
          controller: 'ResCtrl'
        })
        .when('/blog', {
          templateUrl: '404.html'
        })
        .otherwise({
          redirectTo: '/'
        });

    });

}());
