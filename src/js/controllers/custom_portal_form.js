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
  '$sce',
  'pageData',
  function($scope, $sce, pageData) {
    var key = 'investors_signup_form_url';
    console.log('hi');
    pageData
      .then(function(data) {
        $scope.formUrl = $sce.trustAsResourceUrl(data.pageData[key]);
      });
  }
];
