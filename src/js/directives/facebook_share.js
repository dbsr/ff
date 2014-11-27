/*
 * name        : facebook_share.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = function() {
  var options = {
    popup: {
      url: 'https://www.facebook.com/dialog/feed?app_id=779091188775954&link={url}&redirect_uri=http://www.brighterinvestment.com/redirect/close&description={description}&name={title}&picture={image}',
      width: 600,
      height: 500
    },
    track: {
      'name': 'facebook',
      'action': 'send'
    }
  };
  return {
      scope: true,
      replace: true,
      require: '^?ngSocialButtons',
      transclude: true,
      template: '<li>' +
        '<a ng-href="{{ctrl.link(options)}}" target="_blank" ng-click="ctrl.clickShare($event, options)"' +
        ' class="ng-social-button">' +
        '<span class="ng-social-icon"></span>' +
        '<span class="ng-social-text" ng-transclude></span>' +
        '</a>',
      link: function(scope, element, attrs, ctrl) {
        element.addClass('ng-social-facebook');
        if (!ctrl) {
          return;
        }
        scope.options = options;
        scope.ctrl = ctrl;
        ctrl.init(scope, element, options);
      }
  };
};
