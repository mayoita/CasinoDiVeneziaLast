/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/sites/all/modules/views_slideshow/js/views_slideshow.js. */
(function(e){Drupal.viewsSlideshow=Drupal.viewsSlideshow||{};Drupal.viewsSlideshowControls=Drupal.viewsSlideshowControls||{};Drupal.viewsSlideshowControls.play=function(e){try{if(typeof Drupal.settings.viewsSlideshowControls[e.slideshowID].top.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].top.type].play=='function'){Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].top.type].play(e)}}catch(s){};try{if(typeof Drupal.settings.viewsSlideshowControls[e.slideshowID].bottom.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].bottom.type].play=='function'){Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].bottom.type].play(e)}}catch(s){}};Drupal.viewsSlideshowControls.pause=function(e){try{if(typeof Drupal.settings.viewsSlideshowControls[e.slideshowID].top.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].top.type].pause=='function'){Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].top.type].pause(e)}}catch(s){};try{if(typeof Drupal.settings.viewsSlideshowControls[e.slideshowID].bottom.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].bottom.type].pause=='function'){Drupal[Drupal.settings.viewsSlideshowControls[e.slideshowID].bottom.type].pause(e)}}catch(s){}};Drupal.behaviors.viewsSlideshowControlsText={attach:function(s){e('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)',s).addClass('views-slideshow-controls-text-previous-processed').each(function(){var s=e(this).attr('id').replace('views_slideshow_controls_text_previous_','');e(this).click(function(){Drupal.viewsSlideshow.action({'action':'previousSlide','slideshowID':s});return!1})});e('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)',s).addClass('views-slideshow-controls-text-next-processed').each(function(){var s=e(this).attr('id').replace('views_slideshow_controls_text_next_','');e(this).click(function(){Drupal.viewsSlideshow.action({'action':'nextSlide','slideshowID':s});return!1})});e('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)',s).addClass('views-slideshow-controls-text-pause-processed').each(function(){var s=e(this).attr('id').replace('views_slideshow_controls_text_pause_','');e(this).click(function(){if(Drupal.settings.viewsSlideshow[s].paused){Drupal.viewsSlideshow.action({'action':'play','slideshowID':s,'force':!0})}
else{Drupal.viewsSlideshow.action({'action':'pause','slideshowID':s,'force':!0})};return!1})})}};Drupal.viewsSlideshowControlsText=Drupal.viewsSlideshowControlsText||{};Drupal.viewsSlideshowControlsText.pause=function(s){var i=Drupal.theme.prototype['viewsSlideshowControlsPause']?Drupal.theme('viewsSlideshowControlsPause'):'';e('#views_slideshow_controls_text_pause_'+s.slideshowID+' a').text(i);e('#views_slideshow_controls_text_pause_'+s.slideshowID).removeClass('views-slideshow-controls-text-status-play');e('#views_slideshow_controls_text_pause_'+s.slideshowID).addClass('views-slideshow-controls-text-status-pause')};Drupal.viewsSlideshowControlsText.play=function(s){var i=Drupal.theme.prototype['viewsSlideshowControlsPlay']?Drupal.theme('viewsSlideshowControlsPlay'):'';e('#views_slideshow_controls_text_pause_'+s.slideshowID+' a').text(i);e('#views_slideshow_controls_text_pause_'+s.slideshowID).removeClass('views-slideshow-controls-text-status-pause');e('#views_slideshow_controls_text_pause_'+s.slideshowID).addClass('views-slideshow-controls-text-status-play')};Drupal.theme.prototype.viewsSlideshowControlsPause=function(){return Drupal.t('Resume')};Drupal.theme.prototype.viewsSlideshowControlsPlay=function(){return Drupal.t('Pause')};Drupal.viewsSlideshowPager=Drupal.viewsSlideshowPager||{};Drupal.viewsSlideshowPager.transitionBegin=function(s){try{if(typeof Drupal.settings.viewsSlideshowPager!='undefined'&&typeof Drupal.settings.viewsSlideshowPager[s.slideshowID].top.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[s.slideshowID].top.type].transitionBegin=='function'){Drupal[Drupal.settings.viewsSlideshowPager[s.slideshowID].top.type].transitionBegin(s);if(Drupal.settings.viewsSlideshowPager[s.slideshowID].top.master_pager===1){e.each(Drupal.settings.viewsSlideshow,function(e,i){if(e!=s.slideshowID){s.slideshowID=e;s.action='goToSlide';Drupal[Drupal.settings.viewsSlideshowPager[s.slideshowID].top.type].goToSlide(s)}})}}}catch(i){};try{if(typeof Drupal.settings.viewsSlideshowPager!='undefined'&&typeof Drupal.settings.viewsSlideshowPager[s.slideshowID].bottom.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[s.slideshowID].bottom.type].transitionBegin=='function'){Drupal[Drupal.settings.viewsSlideshowPager[s.slideshowID].bottom.type].transitionBegin(s);if(Drupal.settings.viewsSlideshowPager[s.slideshowID].bottom.master_pager===1){e.each(Drupal.settings.viewsSlideshow,function(e,i){if(e!=s.slideshowID){s.slideshowID=e;s.action='goToSlide';Drupal[Drupal.settings.viewsSlideshowPager[s.slideshowID].bottom.type].goToSlide(s)}})}}}catch(i){}};Drupal.viewsSlideshowPager.goToSlide=function(e){try{if(typeof Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type].goToSlide=='function'){Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type].goToSlide(e)}}catch(s){};try{if(typeof Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type].goToSlide=='function'){Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type].goToSlide(e)}}catch(s){}};Drupal.viewsSlideshowPager.previousSlide=function(e){try{if(typeof Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type].previousSlide=='function'){Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type].previousSlide(e)}}catch(s){};try{if(typeof Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type].previousSlide=='function'){Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type].previousSlide(e)}}catch(s){}};Drupal.viewsSlideshowPager.nextSlide=function(e){try{if(typeof Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type].nextSlide=='function'){Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].top.type].nextSlide(e)}}catch(s){};try{if(typeof Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type!='undefined'&&typeof Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type].nextSlide=='function'){Drupal[Drupal.settings.viewsSlideshowPager[e.slideshowID].bottom.type].nextSlide(e)}}catch(s){}};Drupal.behaviors.viewsSlideshowPagerFields={attach:function(s){e('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)',s).addClass('views-slideshow-pager-field-processed').each(function(){var i=e(this).attr('id').split('_'),o=i[2];i.splice(0,3);var s=i.join('_');if(Drupal.settings.viewsSlideshowPagerFields[s][o].activatePauseOnHover){e(this).children().each(function(i,o){var t=function(){Drupal.viewsSlideshow.action({'action':'goToSlide','slideshowID':s,'slideNum':i});Drupal.viewsSlideshow.action({'action':'pause','slideshowID':s})},l=function(){Drupal.viewsSlideshow.action({'action':'play','slideshowID':s})};if(jQuery.fn.hoverIntent){e(o).hoverIntent(t,l)}
else{e(o).hover(t,l)}})}
else{e(this).children().each(function(i,o){e(o).click(function(){Drupal.viewsSlideshow.action({'action':'goToSlide','slideshowID':s,'slideNum':i})})})}})}};Drupal.viewsSlideshowPagerFields=Drupal.viewsSlideshowPagerFields||{};Drupal.viewsSlideshowPagerFields.transitionBegin=function(s){for(pagerLocation in Drupal.settings.viewsSlideshowPager[s.slideshowID]){e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"]').removeClass('active');e('#views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'_'+s.slideNum).addClass('active')}};Drupal.viewsSlideshowPagerFields.goToSlide=function(s){for(pagerLocation in Drupal.settings.viewsSlideshowPager[s.slideshowID]){e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"]').removeClass('active');e('#views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'_'+s.slideNum).addClass('active')}};Drupal.viewsSlideshowPagerFields.previousSlide=function(s){for(pagerLocation in Drupal.settings.viewsSlideshowPager[s.slideshowID]){var i=e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"].active').attr('id').replace('views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'_','');if(i==0){i=e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"]').length()-1}
else{i--};e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"]').removeClass('active');e('#views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'_'+i).addClass('active')}};Drupal.viewsSlideshowPagerFields.nextSlide=function(s){for(pagerLocation in Drupal.settings.viewsSlideshowPager[s.slideshowID]){var i=e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"].active').attr('id').replace('views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'_',''),o=e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"]').length();i++;if(i==o){i=0};e('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'"]').removeClass('active');e('#views_slideshow_pager_field_item_'+pagerLocation+'_'+s.slideshowID+'_'+slideNum).addClass('active')}};Drupal.viewsSlideshowSlideCounter=Drupal.viewsSlideshowSlideCounter||{};Drupal.viewsSlideshowSlideCounter.transitionBegin=function(s){e('#views_slideshow_slide_counter_'+s.slideshowID+' .num').text(s.slideNum+1)};Drupal.viewsSlideshow.action=function(e){var i={'value':!0,'text':''};if(typeof e.action=='undefined'||e.action==''){i.value=!1;i.text=Drupal.t('There was no action specified.');return error};if(e.action=='pause'){Drupal.settings.viewsSlideshow[e.slideshowID].paused=1;if(e.force){Drupal.settings.viewsSlideshow[e.slideshowID].pausedForce=1}}
else if(e.action=='play'){if(!Drupal.settings.viewsSlideshow[e.slideshowID].pausedForce||e.force){Drupal.settings.viewsSlideshow[e.slideshowID].paused=0;Drupal.settings.viewsSlideshow[e.slideshowID].pausedForce=0}
else{i.value=!1;i.text+=' '+Drupal.t('This slideshow is forced paused.');return i}};switch(e.action){case'goToSlide':case'transitionBegin':case'transitionEnd':if(typeof e.slideNum=='undefined'||typeof e.slideNum!=='number'||parseInt(e.slideNum)!=(e.slideNum-0)){i.value=!1;i.text=Drupal.t('An invalid integer was specified for slideNum.')};case'pause':case'play':case'nextSlide':case'previousSlide':var o=Drupal.settings.viewsSlideshow[e.slideshowID]['methods'];var t={};if(typeof e.excludeMethods!=='undefined'){for(var s=0;s<excludeMethods.length;s++){t[excludeMethods[s]]=''}};for(s=0;s<o[e.action].length;s++){if(Drupal[o[e.action][s]]!=undefined&&typeof Drupal[o[e.action][s]][e.action]=='function'&&!(o[e.action][s]in t)){Drupal[o[e.action][s]][e.action](e)}};break;default:i.value=!1;i.text=Drupal.t('An invalid action "!action" was specified.',{'!action':e.action})};return i}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/sites/all/modules/views_slideshow/js/views_slideshow.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/modules/contextual/contextual.js. */
(function(t){Drupal.contextualLinks=Drupal.contextualLinks||{};Drupal.behaviors.contextualLinks={attach:function(n){t('div.contextual-links-wrapper',n).once('contextual-links',function(){var n=t(this),e=n.closest('.contextual-links-region'),i=n.find('ul.contextual-links'),l=t('<a class="contextual-links-trigger" href="#" />').text(Drupal.t('Configure')).click(function(){i.stop(!0,!0).slideToggle(100);n.toggleClass('contextual-links-active');return!1});l.add(i).hover(function(){e.addClass('contextual-links-region-active')},function(){e.removeClass('contextual-links-region-active')});e.bind('mouseleave click',Drupal.contextualLinks.mouseleave);e.hover(function(){l.addClass('contextual-links-trigger-active')},function(){l.removeClass('contextual-links-trigger-active')});n.prepend(l)})}};Drupal.contextualLinks.mouseleave=function(){t(this).find('.contextual-links-active').removeClass('contextual-links-active').find('ul.contextual-links').hide()}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/modules/contextual/contextual.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/sites/all/modules/jquery_update/replace/ui/external/jquery.cookie.js. */
;jQuery.cookie=function(o,n,e){if(arguments.length>1&&(n===null||typeof n!=='object')){e=jQuery.extend({},e);if(n===null){e.expires=-1};if(typeof e.expires==='number'){var p=e.expires,r=e.expires=new Date();r.setDate(r.getDate()+p)};return(document.cookie=[encodeURIComponent(o),'=',e.raw?String(n):encodeURIComponent(String(n)),e.expires?'; expires='+e.expires.toUTCString():'',e.path?'; path='+e.path:'',e.domain?'; domain='+e.domain:'',e.secure?'; secure':''].join(''))};e=n||{};var t,i=e.raw?function(e){return e}:decodeURIComponent;return(t=new RegExp('(?:^|; )'+encodeURIComponent(o)+'=([^;]*)').exec(document.cookie))?i(t[1]):null};;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/sites/all/modules/jquery_update/replace/ui/external/jquery.cookie.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/form.js. */
(function(r){r.fn.drupalGetSummary=function(){var a=this.data('summaryCallback');return(this[0]&&a)?r.trim(a(this[0])):''};r.fn.drupalSetSummary=function(r){var t=this;if(typeof r!='function'){var a=r;r=function(){return a}};return this.data('summaryCallback',r).unbind('formUpdated.summary').bind('formUpdated.summary',function(){t.trigger('summaryUpdated')}).trigger('summaryUpdated')};Drupal.behaviors.formUpdated={attach:function(a){var t='change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated';r(a).find(':input').andSelf().filter(':input').unbind(t).bind(t,function(){r(this).trigger('formUpdated')})}};Drupal.behaviors.fillUserInfoFromCookie={attach:function(a,t){r('form.user-info-from-cookie').once('user-info-from-cookie',function(){var a=this;r.each(['name','mail','homepage'],function(){var t=r('[name='+this+']',a),i=r.cookie('Drupal.visitor.'+this);if(t.length&&i){t.val(i)}})})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/form.js. */
