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
  '$routeParams',
  function($scope, $timeout, $rootScope, $element, $routeParams) {
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
    };
    var curPortal = $element.data('cur-portal');
    if(curPortal === 'custom') {
      curPortal = $routeParams.custom_name;
    }
    $scope.curPortal = curPortal;
    console.log($scope.curPortal);

    var portals = [
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
      ];
    $scope.sections = [[{
      name: 'Home',
      href: '/'
    }, {
      name: 'Brighter News',
      href: '/#content-two'
    }, {
      name: 'About',
      href: '/about'
    }, {
      name: 'Faq',
      href: '/about#content-two'
    }, {
      name: 'Contact',
      href: '/about#content-two'
    }]];
    angular.forEach(portals, function(portal) {
      var portalSection = [{
        name: portal.capName,
        href: portal.href
      }];
      angular.forEach(portal.targets, function(target) {
        portalSection.push({
          text: target.text,
          id: target.id,
          href: target.hashHref
        });
      });
      $scope.sections.push(portalSection);
    });
  }
];
