/*
 * name        : form_modal.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$location',
  '$rootScope',
  '$route',
  'screenInfo',
  'urlparse',
  'sceFormUrl',
  function($location, $rootScope, $route, screenInfo, urlparse, sceFormUrl) {
    return {
      link: function(scope, element, attrs) {
        var url = urlparse.form_url,
            formUrl = sceFormUrl.get(url),
            formHeight = urlparse.form_height ?
              urlparse.form_height + 'px' :
              '100%';
        if(!$rootScope.form && formUrl) {
          $rootScope.form = {
            formUrl: formUrl,
            formHeight: formHeight,
            showModal: true,
            pageUrl: '/form?form_url={{formUrl}}&form_height=' + formHeight
          };
          if(!screenInfo.getDevice().match(/desktops/)) {
            $location.url(scope.form.pageUrl);
          } else {
            scope.form = $rootScope.form;
            $route.reload();
          }
        }
        scope.toggleModal = function() {
          // don't show back to form for newsletter subscribtion
          console.log($rootScope.form.formUrl);
          if($rootScope.form.formUrl.match(/newsletter_subscription/)) {
            return;
          }
          if($rootScope.form.showModal) {
            $rootScope.form.showModal = false;
            $rootScope.form.showUndo = true;
          } else {
            $rootScope.form.showUndo = false;
            $rootScope.form.showModal = true;
          }
        };
      }
    };
  }];
