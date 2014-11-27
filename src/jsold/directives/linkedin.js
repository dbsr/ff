/*
 * name        : linkedin.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';


app.directive('ngSocialLinkedin', function() {

    var options = {
        popup: {
            url: 'http://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}',
            width: 600,
            height: 500
        },
        track: {
            'name': 'linkedin',
            'action': 'send'
        }
    };
    return {
        restrict: 'C',
        require: '^?ngSocialButtons',
        scope: true,
        replace: true,
        transclude: true,
        template: '<li>' +
                    '<a ng-href="{{ctrl.link(options)}}" target="_blank" ng-click="ctrl.clickShare($event, options)"' +
                        ' class="ng-social-button">' +
                        '<span class="ng-social-icon"></span>' +
                        '<span class="ng-social-text" ng-transclude></span>' +
                    '</a>' +
                    '<span ng-show="count" class="ng-social-counter">{{ count }}</span>' +
                   '</li>',
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
});
