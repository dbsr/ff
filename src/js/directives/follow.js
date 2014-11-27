/*
 * name        : follow.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';


module.exports = [
  '$window',
  'shared',
  'eventObservers',
  function($window, shared, eventObservers) {
    return {
      transclude: true,
      replace: true,
      template: '<div ng-class="show ? &quot;fadeIn&quot; : &quot;fadeOut&quot;" class="social-follow background {{klass}}"><div ng-click="activate()" ng-hide="isActive" ng-class="!isActive ? &quot;animated fadeInLeft&quot; : &quot;fadeOutRight&quot;" angulartics-on="click" angulartics-category="socialSharePortal" angulartics-label="trigger" class="trigger ic"><div class="desktop">FOLLOW US</div><div id="tablet">FOLLOW</div></i></div><div ng-show="isActive" ng-class="isActive ? &quot;fadeInLeft&quot; : &quot;&quot;" class="items animated"><a ng-click="close()" class="close ic"><i class="icon remove"></i></a><a href="https://www.facebook.com/BrighterInvestment" target="_blank" class="ic"><i alt="follow us on facebook" title="follow us on facebook!" class="icon facebook"></i></a><a href="https://plus.google.com/+BrighterinvestmentWebsite" target="_blank" class="ic"><i alt="follow us on google plus" title="follow us on google plus!" class="icon google plus"></i></a><a href="https://twitter.com/intent/user?screen_name=brighterinvest" target="_blank" class="ic"><i alt="follow us on twitter" title="follow us on twitter!" class="icon twitter"></i></a><a href="https://www.linkedin.com/company/brighter-investment" target="_blank" class="ic"><i alt="follow us on linkedin" title="follow us on linkedin!" class="icon linkedin"></i></a><a ng-href="/about/form/700/communication-manager/form-embed/newsletter_subscription/WR4XOmrTJ9ZV1HSCZDCCZRJRY1hXWvMdBw40pM68tttzqUefN7pBNnWSE4apRPNDGCNUC1C6YrkGw9gBMKeWUex5WdNn95ah2tkd/" class="ic"><i class="icon mail"></i></a></div></div>',
      link: function(scope, element, attrs) {
        scope.isActive = false;
        scope.activate = function() {
          scope.isActive = true;
        };
        scope.close = function () {
          scope.isActive = false;
        };
        scope.klass = shared.getCurPortal() || 'logocitrus';
        if(scope.klass === 'news') {
          scope.klass = 'logocitrus';
        }
        scope.doHide = true;
        angular.element(element).hide();
        if($window.innerWidth > 540) {
        eventObservers.scroll.subscribers.push(
            function(win) {
              angular.element(element).show();
            });
        }
      }
    };
  }];
