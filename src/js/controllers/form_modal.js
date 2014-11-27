/*
 * name        : form_modal.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
'$scope',
  '$routeParams',
  '$rootScope',
  '$window',
  'sceFormUrl',
  function($scope, $routeParams, $rootScope, $window, sceFormUrl) {
    $rootScope.form = $rootScope.form || {};
    if(!$rootScope.form.length && $routeParams.form_url) {
      var formUrl = $routeParams.form_url,
        formHeight = $routeParams.form_height ? 
          ($routeParams.form_height * 1.25) + 'px' : '100%',
          sceForm = sceFormUrl(formUrl);
      $rootScope.form = {};
      $rootScope.form.pageUrl = '/form/' + $routeParams.form_height + sceForm.appName + sceForm.safeUrl;
      $rootScope.form.formHeight = formHeight;
      $rootScope.form.showModal = true;
      $rootScope.form.formUrl = sceForm.url;
    }
    $scope.toggleModal = function() {
      if($rootScope.form.showModal) {
        $rootScope.form.showModal = false;
        // only show undo if not for subscribtion
        var formUrl = $rootScope.form.length ? $rootScope.form.formUrl : '';
        console.log(formUrl);
        if(!/subscription/.test(formUrl)) {
          $rootScope.form.showUndo = true;
        }

      } else {
        $rootScope.form.showUndo = false;
        $rootScope.form.showModal = true;
        // scroll back to top
        $window.scrollTo(0, 0);

      }
    };
  }];
