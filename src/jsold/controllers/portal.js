/*
 * name        : portal.js
 * description : portal pages controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

app.controller('portalCtrl', ['$scope', '$rootScope', '$element', function($scope, $rootScope, $element) {
  var curPortal = $element.data('cur-portal');
  $rootScope.curPortal = curPortal;
  $scope.createQuery = function(query) {
    var q = 'pageData' + '.' + curPortal + '_' + query;
    return q;
  };
}]);

app.controller('portalNavCtrl', ['$scope', '$timeout', '$rootScope', function($scope, $timeout, $rootScope) {
  var Portal = function(name, humanName) {
    var self = this;
    self.name = name;
    self.humanName = humanName || name;
    self.href = '/' + self.name;
    self.active = 0;
    self.isActive = false;
    self.targets = ['one', 'two', 'three', 'four'].map(
      function(t) {
        return {
          text: 'pageData.' + self.name +  '_' + 'button_' + t,
          id: 'content-' + t,
          hashHref: self.href + '#' + 'content-' + t
        };
      });
  };

  $scope.curPortal = $rootScope.curPortal;
  $scope.nav = {
    portals: [
      new Portal('students'),
      new Portal('investors'),
      new Portal('universities'),
      new Portal('highschools', 'high schools')
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
        portal.isActive = true;
        portal.isInactive = false;
      } else {
        portal.isActive = false;
        portal.isInactive = true;
      }
    });
  };
  $scope.onMouseLeave = function(portalIdx) {
    var portal = $scope.nav.portals[portalIdx];
    portal.active -= 1;
    $timeout(function() {
      setPortalState();
    }, 6000);
  };
  $scope.onMouseEnter = function(portalIdx, force) {
    var curPortal = $scope.nav.portals[portalIdx];
    if(force) {
      $scope.nav.portals.forEach(function(portal, idx) {
        if(idx !== portalIdx) {
          portal.active = 0;
        } else {
          portal.active = 1;
        }
      });
    } else {
      curPortal.active += 1;
    }
    setPortalState();
  };
  $scope.createHashHref = function(root, hash) {
    return '/' + root + '#' + hash;
  };
}]);

app.controller('PortalFormCtrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
  var timeOutFormLoading = function(status) {
    $timeout(function() {
      $scope.form.isActive = false;
      $scope.form.status = status;
    }, 1000);
  };
  $scope.form = {
    fields: {}
  };
  $scope.submit = function() {
    // @TODO validation
    var form = $scope.form;
    form.isActive = true;
    if(form.fields.name && form.fields.email) {
      form.fields.portal = $rootScope.curPortal;
      $http.post('/api/form', form.fields)
        .success(function() {
          timeOutFormLoading({success: true});
        })
        .error(function(err) {
          console.log(err);
          timeOutFormLoading({success: false});
        });
    }
  };
}]);
