/*
 * name        : btf_markdown.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';



module.exports = function($sanitize) {
    var converter = new Showdown.converter();
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (attrs.btfMarkdown) {
          scope.$watch(attrs.btfMarkdown, function (newVal) {
            var html = newVal ? $sanitize(converter.makeHtml(newVal)) : '';
            element.html(html);
          });
        } else {
          var html = $sanitize(converter.makeHtml(element.text()));
          element.html(html);
        }
      }
    };
  };
