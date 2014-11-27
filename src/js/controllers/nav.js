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
  '$timeout',
  '$rootScope',
  '$element',
  function($scope, $timeout, $rootScope, $element) {
    var Portal = function(portalData) {
      var self = this;
      self.name = portalData.name;
      self.humanName = portalData.humanName || portalData.name;
      self.capName = self.humanName[0].toUpperCase() + self.humanName.slice(1, self.humanName.length);
      self.href = '/' + self.name;
      self.active = 0;
      self.isActive = false;
      self.targets = ['one', 'two', 'three', 'four']
        .slice(0, portalData.numTargets)
        .map(
          function(t) {
            return {
              text: 'pageData.' + self.name +  '_' + 'button_' + t,
              id: 'content-' + t,
              hashHref: self.href + '#' + 'content-' + t
            };
          });
      if(self.targets.length === 4) {
        self.targets[3].hashHref = self.href + '#content-four-nav';
      }
    };
    $scope.curPortal = $rootScope.curPortal;
    $scope.nav = {
      portals: [
        new Portal({
          name: 'students',
          numTargets: 4
        }),
        new Portal({
          name: 'investors',
          numTargets: 4
        }),
        new Portal({
          name: 'universities',
          numTargets: 4
        }),
        new Portal({
          name: 'highschools',
          humanName: 'high schools',
          numTargets: 4
        }),
        new Portal({
          name: 'about',
          numTargets: 3
        })
      ]
    };
    var setPortalState = function() {
      var activePortal = {};
      $scope.nav.portals.forEach(function(portal) {
        if(portal.active > 0) {
          if(!activePortal.length || portal.active > activePortal.active) {
            activePortal = portal;
          }
        }
      });
      $scope.nav.portals.forEach(function(portal) {
        if(portal.href === activePortal.href) {
          $timeout(function() {
            portal.isActive = true;
          }, 500);
          portal.isInactive = false;
        } else {
          portal.isActive = false;
          portal.isInactive = false;
          if(portal.isActive) {
            portal.isInactive = true;
        }
        }
      });
    };
    $scope.createHashHref = function(root, hash) {
      return '/' + root + '#' + hash;
    };
    $scope.nav.portals.forEach(function(portal) {
      if(portal.name === $scope.curPortal) {
        portal.isCurrent = true;
        portal.isActive = true;
        $timeout(
          function() {
            portal.isActive = false;
            portal.isInactive = true;
          }, 5000);
      }
    });
    $scope.mobileMenuActive = false;
    $scope.toggleMobileMenu = function() {
      $scope.mobileMenuActive = $scope.mobileMenuActive ? false : true;
    };
    $scope.onMouseClick = function($index) {
      var portal = $scope.nav.portals[$index];
      $scope.nav.portals.forEach(function(p) {
        p.isActive = false;
      });
      portal.isActive = true;
      $timeout(
          function() {
            portal.isActive = false;
            portal.isInactive = true;
          }, 5000);
    };
  }
];
