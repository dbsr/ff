/*
 * name        : portal.js
 * description : portal pages controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

var app = angular.module('biApp');

app.controller('formCtrl', ['$scope', 'modalBind', function($scope, modalBind) {
  $scope.form = {};
  $scope.warnings = [];
  var validateForm = function() {
    $scope.form.forEach(function(k, v) {
      var humanName = k.split(/[A-Z]/).join(' ');
      humanName[0] = humanName[0].toUpper();
      if(!v) {
        // empty
        $scope.warnings.push('Please enter your ' + humanName + '. This field cannot be empty.');
      }
    });
  };
  $scope.submit = function() {
    validateForm();
  };
}]);
