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
  '$routeParams',
  '$sce',
  function($scope, $routeParams, $sce) {
    var formHeight = $routeParams.form_height ? 
      $routeParams.form_height + 'px' : '100%',
        formUrl = 'https://creator.zohopublic.com/contact154/' + $routeParams.form_url;
    $scope.formUrl = $sce.trustAsResourceUrl(formUrl);
    $scope.formHeight = formHeight;
  }];
