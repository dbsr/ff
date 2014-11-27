/*
 * name        : apply_style.js
 * description : reload css after content load
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

'use strict';

app.directive('applyLink', function() {
  var updateLinkHref = function(element, href) {
    if(!href) {
      var oldHref = element.attr('href').replace(/\?[0-9]+$/, ''),
          timestamp = +new Date();
      href = oldHref + '?' + timestamp;
    }
    element.attr('href', href);
  };
  return {
    restrict: 'E',
    template: '<link/>',
    replace: true,
    scope: {
      doApply: '='
    },
    link: function(scope, element, attrs) {
      scope.$watch('doApply', function() {
        console.log(1);
        updateLinkHref(element);
      });
    }
  };
});



