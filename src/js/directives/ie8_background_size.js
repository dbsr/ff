/*
 * name        : dynamic_size.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  function() {
    return {
      restrict: 'C',
      link: function(scope, element, attrs) {
        if(navigator.userAgent.match(/MSIE 8.0/)) {
          var imgUrl = element.css('background-image').replace('url("', '').replace('")', ''),
              split  = imgUrl.split('/'),
              imgName = split[split.length - 1],
              url = '/images/' + imgName,
              img = angular.element('<img/>', {
                src: url,
                style: 'position: absolute; left: 0; top: 0; z-index: -1;'
              });
          console.log(url);
          img.width(element.width());
          img.height(element.innerHeight());
          element.css('background', 'none');
          element.append(img);

        }

      }
    };
  }];
