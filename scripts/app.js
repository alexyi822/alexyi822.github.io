(function() {

  'use strict';

  /**
   * @ngdoc overview
   * @name portfolio
   * @description
   * # portfolio
   *
   * Main module of the application.
   */
  angular
    .module('portfolio', [
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
          templateUrl: 'views/blog.html'
        })
        .otherwise({
          redirectTo: '/'
        });

    });

}());
