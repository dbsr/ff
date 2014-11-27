/*
 * name        : page_data.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

function createItems(pageData, portal) {
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
}

function handleCustomPage(page) {
  var SETTING_KEYS = [
    'route',
    'parent_template'
  ];

  var name = page.page.replace(/custom_/, ''),
      newKeys = [];

  page.page = name;

  page.settings = {
    name: name
  };

  angular.forEach(
      page.keys,
      function(keyVal) {
        var key = keyVal.key,
            val = keyVal.val;
        if(SETTING_KEYS.indexOf(key) !== -1) {
          // this is a custom page setting
          page.settings[key] = val;
        } else {
          newKeys.push(keyVal);
        }
      });
  page.keys = newKeys;

  return page;

}


module.exports = [
  '$http',
  '$q',
  function($http, $q) {
    var defer = $q.defer();
    $http.get('/api/page_data/retrieve')
      .success(function(pages) {
        var data = {
          pageData: {},
          faqItems: {},
          custom: {}
        };

        pages.forEach(function(page) {
          if(/custom/.test(page.page)) {
            page = handleCustomPage(page);
            data.custom[page.settings.route] = page.settings;
          }

          page.keys.forEach(function(k) {
            var val ='';

            if('content_two_b' === k.key) {
              val = createItems(k.val, page.page);
            } else if(k.key.match(/[0-9]+_/)) {
              var m = k.key.match(/([0-9]+)_(.*)/),
                  idx = parseInt(m[1]),
                  qa = m[2];

              if(!data.faqItems[idx]) {
                data.faqItems[idx] = {};
              }

              data.faqItems[idx][qa] = k.val;
            } else {
              val = k.val;
            }

            data.pageData[page.page + '_' + k.key] = val;
          });
        });

        defer.resolve(data);
      });

    return defer.promise;
  }];
