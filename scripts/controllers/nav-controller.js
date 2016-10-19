(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name portfolio.controller:NavCtrl
   * @description
   * # NavCtrl
   * Controller of the portfolio
   */
  angular.module('portfolio')
    .controller('NavCtrl', ['$mdMedia', function ($mdMedia) {

      var self = this;

      self.isOpen = false;
      self.$mdMedia = $mdMedia;


    }]);

}());
