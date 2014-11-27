/*
 * name        : base.js
 * description : base controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

'use strict';



module.exports = [
  '$scope',
  '$window',
  '$rootScope',
  '$location',
  '$anchorScroll',
  '$routeParams',
  'httpDefer',
  'pageData',
  function($scope, $window, $rootScope, $location, $anchorScroll, $routeParams, httpDefer, pageData) {
    pageData
      .then(function(data) {
        // new custom page logic
        if($routeParams.custom_page) {
          var customName = $routeParams.custom_page,
              custom = data.custom,
              customPage = custom[customName];
          if(customPage) {
            $scope.isResolved = true;
            $rootScope.curPortal = customPage.name;
          } else {
            $location.url('/');
          }
        }

    });

    $rootScope.$on('$routeChangeSuccess', function() {
      $scope.$watch('pageData', function(newVal) {
        var hash = $location.hash();
        $location.hash(hash);
        $anchorScroll();
      });
    });

  }
];
