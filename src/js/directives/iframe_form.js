/*
 * name        : form_modal.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$sce',
  function($sce, urlparse) {
    return {
      replace: true,
      scope: {
        iframeForm: '@iframeForm',
        iframeHeight: '@'
      },
      template: '<iframe height="{{height}}" width="100%"' +
        ' src="{{getIframeSrc()}}" frameBorder="none">',
      link: function(scope, element, attrs) {
        scope.src = $sce.trustAsResourceUrl(scope.iframeForm);
        scope.iframeHeight = scope.iframeHeight || '100%';
      }
    };
  }];
