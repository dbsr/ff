/*
 * name        : bgImgAdjust.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

app.directive('bgImageAdjust', [
  '$timeout',
  function($timeout) {
    return {
      link: function(scope, attrs, element) {
        // resolve image url for element
        var setHeight = function() {
          var screenWidth = screen.width,
              imgWidth = 1024;
          [1900, 1600, 1483, 1366].forEach(
            function(width) {
              if(width > screenWidth) {
                imgWidth = width;
              }
            });
          var imgUrl = '/images/top-portal-' + imgWidth + '.jpg',
              img = new Image();
          img.src = imgUrl;
          var _do = function() {
            if(img.width) {
              var targetHeight = (screenWidth / img.width) * img.height;
              attrs[0].style.height = targetHeight + 'px';
            } else {
              $timeout(_do, 500);
            }
          };
          _do();
        };
        window.onresize = setHeight;
        setHeight();
      }
    };
  }
]);
