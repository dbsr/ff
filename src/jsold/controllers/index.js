/*
 * name        : base.js
 * description : index controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

app.controller('IndexPortalsCtrl', function($scope, $timeout) {
  // portal initiation
  var mouseEnterActive = false;
  var Portal = function(name) {
    var self = this,
        noSpace = name.replace(' ', '');
    self.name = 'for ' + name;
    self.klass = noSpace;
    self.href = '/' + noSpace;
  };
  Portal.prototype.activate = function(force) {
    var self = this;
    if(force || !mouseEnterActive) {
      $scope.activePortal = self.name;
      self.force = force;
    }
  };
  Portal.prototype.onMouseEnter = function() {
    var self = this;
    mouseEnterActive = true;
    self.activate(true);
  };
  Portal.prototype.onMouseLeave = function() {
    mouseEnterActive = false;
    $scope.activePortal = null;
  };
  Portal.prototype.onLoopEvent = function() {
    var self = this;
    self.activate();
  };
  var loopPortals = function(portalIdx) {
    $timeout(
        function() {
          $scope.portals[portalIdx].onLoopEvent();
          var nextIdx = portalIdx + 1 === $scope.portals.length ? 0 : portalIdx + 1;
          loopPortals(nextIdx);
        }, 6000);
  };
  $scope.portals = [
    new Portal('students'),
    new Portal('investors'),
    new Portal('universities'),
    new Portal('high schools')
  ];
  $scope.portals[0].onLoopEvent();
  loopPortals(1);
});
