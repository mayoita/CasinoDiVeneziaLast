/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/collapse.js. */
(function(e){Drupal.toggleFieldset=function(l){var a=e(l);if(a.is('.collapsed')){var t=e('> .fieldset-wrapper',l).hide();a.removeClass('collapsed').trigger({type:'collapsed',value:!1}).find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));t.slideDown({duration:'fast',easing:'linear',complete:function(){Drupal.collapseScrollIntoView(l);l.animating=!1},step:function(){Drupal.collapseScrollIntoView(l)}})}
else{a.trigger({type:'collapsed',value:!0});e('> .fieldset-wrapper',l).slideUp('fast',function(){a.addClass('collapsed').find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));l.animating=!1})}};Drupal.collapseScrollIntoView=function(l){var a=document.documentElement.clientHeight||document.body.clientHeight||0,i=document.documentElement.scrollTop||document.body.scrollTop||0,t=e(l).offset().top,n=55;if(t+l.offsetHeight+n>a+i){if(l.offsetHeight>a){window.scrollTo(0,t)}
else{window.scrollTo(0,t+l.offsetHeight-a+n)}}};Drupal.behaviors.collapse={attach:function(l,a){e('fieldset.collapsible',l).once('collapse',function(){var l=e(this),n=location.hash&&location.hash!='#'?', '+location.hash:'';if(l.find('.error'+n).length){l.removeClass('collapsed')};var t=e('<span class="summary"></span>');l.bind('summaryUpdated',function(){var a=e.trim(l.drupalGetSummary());t.html(a?' ('+a+')':'')}).trigger('summaryUpdated');var a=e('> legend .fieldset-legend',this);e('<span class="fieldset-legend-prefix element-invisible"></span>').append(l.hasClass('collapsed')?Drupal.t('Show'):Drupal.t('Hide')).prependTo(a).after(' ');var i=e('<a class="fieldset-title" href="#"></a>').prepend(a.contents()).appendTo(a).click(function(){var e=l.get(0);if(!e.animating){e.animating=!0;Drupal.toggleFieldset(e)};return!1});a.append(t)})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/collapse.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/textarea.js. */
(function(e){Drupal.behaviors.textarea={attach:function(t,a){e('.form-textarea-wrapper.resizable',t).once('textarea',function(){var a=null,t=e(this).addClass('resizable-textarea').find('textarea'),u=e('<div class="grippie"></div>').mousedown(o);u.insertAfter(t);function o(u){a=t.height()-u.pageY;t.css('opacity',0.25);e(document).mousemove(n).mouseup(i);return!1};function n(e){t.height(Math.max(32,a+e.pageY)+'px');return!1};function i(a){e(document).unbind('mousemove',n).unbind('mouseup',i);t.css('opacity',1)}})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/textarea.js. */
