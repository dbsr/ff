/*
 * name        : social_share.js
 * description : social share controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
    '$scope',
    '$timeout',
    '$location',
    function($scope, $timeout, $location) {
      var INACTIVE = 0,
          DEACTIVATING = 1,
          ACTIVE = 2;
      $scope.queue = 0;
      $scope.state = INACTIVE;
      $scope.$location = $location;

      function doDeactivate() {
        $scope.queue -= 1;
        if($scope.queue) {
          return;
        }
        if($scope.state === DEACTIVATING) {
          $scope.state = INACTIVE;
        }
      }
      $scope.deactivate = function(force) {
        if(force) {
          $scope.state = INACTIVE;
          return;
        }
        $scope.queue += 1;
        $scope.state = DEACTIVATING;
        $timeout(doDeactivate, 3000);
      };
      $scope.activate = function() {
        $scope.state = ACTIVE;
      };
      $scope.items = [{
        anchorClass: 'ng-social-facebook',
        iconClass: 'facebook'
      }];
    }
  ];

