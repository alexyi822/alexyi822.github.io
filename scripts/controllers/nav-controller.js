(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:NavCtrl
   * @description
   * # NavCtrl
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('NavCtrl', ['$mdMedia', function ($mdMedia) {

      var self = this;

      self.isOpen = false;
      self.$mdMedia = $mdMedia;


    }]);

}());
