/*
 * name        : form_modal.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$location',
  '$sce',
  '$window',
  function($location, $sce, $window) {
    return {
      link: function(scope, element, attrs) {
        var curUrl = $location.url(),
            m = curUrl.match(/.*form_url=(.*)/);
        if(m) {
          var url = decodeURIComponent(m[1]);
          scope.formUrl = $sce.trustAsResourceUrl(url);
          scope.showModal = true;
          scope.iframeHeight = element.height() * 0.8;
        }
      }
    };
  }];
