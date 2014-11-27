/*
 * name        : sce_form_url.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';


module.exports = [
  '$sce',
  'shared',
  function($sce, shared) {
      var styleParams = 'zc_Header=false&zc_LblFontClr=585858&zc_LblFont=verdana&zc_BdrClr=ffffff';
      return function(formUrl, height) {
        var appName = shared.getCurPortal() === 'investors' ? 
            '/investor-recruitment' : '/student-recruitment';
        if(formUrl.match(/newsletter_subscription/)) {
            appName = '';
        }
        var safeUrl = formUrl[0] !== '/' ? '/' + formUrl : formUrl;
        safeUrl = safeUrl + styleParams;
        return {
          url: $sce.trustAsResourceUrl('https://creator.zohopublic.com/contact154' + appName +  safeUrl),
          safeUrl: safeUrl,
          appName: appName
        };
      };
  }];




