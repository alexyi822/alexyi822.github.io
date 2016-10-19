(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name portfolio.controller:ResCtrl
   * @description
   * # ResCtrl
   * Controller of the portfolio
   */
  angular.module('portfolio')
    .controller('ResCtrl', ['$scope', function ($scope) {

      // var self = this;

      $scope.jobs = [
        {
          'employer':'UCD IET',
          'date':'June 2016 - Present',
          'location':'Davis, CA',
          'url':'https://iet.ucdavis.edu/'
        },
        {
          'employer':'UCD DSS IT',
          'date':'February 2014 - June 2016',
          'location':'Davis, CA',
          'url':'http://it.dss.ucdavis.edu/'
        },
        {
          'employer':'Apple Inc.',
          'date':'August 2013 - January 2015',
          'location':'Pleasanton/Sacramento, CA',
          'url':'http://www.apple.com/retail/ardenfair/'
        }
    ];


    }]);

}());
