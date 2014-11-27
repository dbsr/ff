/*
 * name        : portal.js
 * description : portal pages controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
'$scope',
  '$rootScope',
  '$sce',
  '$routeParams',
  function($scope, $rootScope, $sce, $routeParams) {
    var key = $rootScope.curPortal + '_signup_form_url';
    if($routeParams.custom_name) {
      key = $routeParams.custom_name + '_signup_form_url';
    }
    $scope.formUrl = $sce.trustAsResourceUrl($rootScope.pageData[key]);
  }
];
