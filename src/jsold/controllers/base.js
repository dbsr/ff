/*
 * name        : base.js
 * description : base controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

'use strict';

app.controller('baseCtrl', ['$scope', 'httpDefer', '$window', '$rootScope', '$location', '$anchorScroll', 'faqService', function($scope, httpDefer, $window, $rootScope, $location, $anchorScroll, faqService) {
  $rootScope.faqItems = {};
  $rootScope.$watch('pageData', function(pages) {
    if(!pages.length) {
      return;
    }
    pages.forEach(function(page) {
      var faqItems = {};
      page.keys.forEach(function(k) {
        var val ='';
        if('content_two_b' === k.key) {
          val = createItems(k.val, page.page);
        } else if(k.key.match(/[0-9]+_/)) {
          var m = k.key.match(/([0-9]+)_(.*)/),
              idx = parseInt(m[1]),
              qa = m[2];
          if(!$rootScope.faqItems[idx]) {
            $rootScope.faqItems[idx] = {};
          }
          $rootScope.faqItems[idx][qa] = k.val;
        } else {
          val = k.val;
        }
        $scope.pageData[page.page + '_' + k.key] = val;
        $rootScope.pageData[page.page + '_' + k.key] = val;
      });
    });
    $rootScope.applyStyle = 1;
  });
  var createItems = function(pageData, portal) {
    // split in three items
    var items = [],
        sections = pageData.split(/\n\n/);
    sections.forEach(function(section, sectionIdx) {
      items.push([]);
      section.split(/\n/).forEach(function(item, itemIdx) {
        var iconNum = (sectionIdx * 2) + itemIdx + 1;
        items[sectionIdx].push({
          markdown: item,
          icon: portal + '-icon-' + iconNum
        });
      });
    });
    return items;
  };
  $rootScope.$on('$routeChangeSuccess', function() {
    $rootScope.applyStyle *= -1;
    $scope.$watch('pageData', function(newVal) {
      var hash = $location.hash();
      $location.hash(hash);
      $anchorScroll();
    });
  });
}]);
