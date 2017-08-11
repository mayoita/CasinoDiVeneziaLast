/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/sites/all/modules/video/js/video.js. */
(function(e){Drupal.behaviors.video={attach:function(t,i){if(e.fn.media){e('.jmedia').media()};if(i.video){e.fn.media.defaults.flvPlayer=i.video.flvplayer};e('.video-box').each(function(){var i=e(this).attr('href')})}};Drupal.behaviors.videoEdit={attach:function(i,a){function t(e,a){var i=e.find('.video-thumbnails input'),d=e.find('.video-use-default-video-thumb'),n=e.find('.video-preview img'),f=i.filter(':checked');if(f.length>0&&a!='default'){var c=f.next('label.option').find('img');n.attr('src',c.attr('src'));d.attr('checked',!1)}
else if(d.is(':checked')){i.attr('checked',!1);n.attr('src',d.data('defaultimage'))}
else{if(i.length>0){i.first().attr('checked','checked');t(e,'thumb')}}};e('.video-thumbnails input',i).change(function(){t(e(this).parents('.video-widget'),'thumb')});e('.video-use-default-video-thumb',i).change(function(){t(e(this).parents('.video-widget'),'default')});e('.video-widget',i).each(function(){t(e(this),'both')})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/sites/all/modules/video/js/video.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/sites/all/modules/nikadevs_cms/js/nikadevs-cms-background.js. */
(function(i){var e=0;Drupal.behaviors.nikadevs_background={attach:function(e,r){i('.upload_bg_image',e).click(function(){if(i('body > .ui-dialog.media-wrapper').length){return};$this=i(this);globalOptions={};Drupal.media.popups.mediaBrowser(function(i){if(i.length<0){return};var e=i[0];$this.parent().prev().find('input').val(e.fid);$this.parent().prev().find('.bg-image-preview').html(e.preview)},globalOptions);return!1})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/sites/all/modules/nikadevs_cms/js/nikadevs-cms-background.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/textarea.js. */
(function(e){Drupal.behaviors.textarea={attach:function(t,a){e('.form-textarea-wrapper.resizable',t).once('textarea',function(){var a=null,t=e(this).addClass('resizable-textarea').find('textarea'),u=e('<div class="grippie"></div>').mousedown(o);u.insertAfter(t);function o(u){a=t.height()-u.pageY;t.css('opacity',0.25);e(document).mousemove(n).mouseup(i);return!1};function n(e){t.height(Math.max(32,a+e.pageY)+'px');return!1};function i(a){e(document).unbind('mousemove',n).unbind('mouseup',i);t.css('opacity',1)}})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/textarea.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/tableheader.js. */
(function(e){Drupal.behaviors.tableHeader={attach:function(i,t){if(!e.support.positionFixed){return};e('table.sticky-enabled',i).once('tableheader',function(){e(this).data('drupal-tableheader',new Drupal.tableHeader(this))})}};Drupal.tableHeader=function(t){var i=this;this.originalTable=e(t);this.originalHeader=e(t).children('thead');this.originalHeaderCells=this.originalHeader.find('> tr > th');this.displayWeight=null;this.originalTable.bind('columnschange',function(e,t){i.widthCalculated=(i.displayWeight!==null&&i.displayWeight===t);i.displayWeight=t});this.stickyTable=e('<table class="sticky-header"/>').insertBefore(this.originalTable).css({position:'fixed',top:'0px'});this.stickyHeader=this.originalHeader.clone(!0).hide().appendTo(this.stickyTable);this.stickyHeaderCells=this.stickyHeader.find('> tr > th');this.originalTable.addClass('sticky-table');e(window).bind('scroll.drupal-tableheader',e.proxy(this,'eventhandlerRecalculateStickyHeader')).bind('resize.drupal-tableheader',{calculateWidth:!0},e.proxy(this,'eventhandlerRecalculateStickyHeader')).bind('drupalDisplaceAnchor.drupal-tableheader',function(){window.scrollBy(0,-i.stickyTable.outerHeight())}).bind('drupalDisplaceFocus.drupal-tableheader',function(e){if(i.stickyVisible&&e.clientY<(i.stickyOffsetTop+i.stickyTable.outerHeight())&&e.$target.closest('sticky-header').length===0){window.scrollBy(0,-i.stickyTable.outerHeight())}}).triggerHandler('resize.drupal-tableheader');this.stickyHeader.show()};Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader=function(i){var u=this,d=i.data&&i.data.calculateWidth;this.stickyOffsetTop=Drupal.settings.tableHeaderOffset?eval(Drupal.settings.tableHeaderOffset+'()'):0;this.stickyTable.css('top',this.stickyOffsetTop+'px');var n=document.documentElement.scrollHeight||document.body.scrollHeight;if(d||this.viewHeight!==n){this.viewHeight=n;this.vPosition=this.originalTable.offset().top-4-this.stickyOffsetTop;this.hPosition=this.originalTable.offset().left;this.vLength=this.originalTable[0].clientHeight-100;d=!0};var c=document.documentElement.scrollLeft||document.body.scrollLeft,h=(document.documentElement.scrollTop||document.body.scrollTop)-this.vPosition;this.stickyVisible=h>0&&h<this.vLength;this.stickyTable.css({left:(-c+this.hPosition)+'px',visibility:this.stickyVisible?'visible':'hidden'});if(this.stickyVisible&&(d||!this.widthCalculated)){this.widthCalculated=!0;var t=null,a=null,r=null,l=null;for(var s=0,o=this.originalHeaderCells.length;s<o;s+=1){t=e(this.originalHeaderCells[s]);a=this.stickyHeaderCells.eq(t.index());r=t.css('display');if(r!=='none'){l=t.css('width');if(l==='auto'){l=t[0].clientWidth+'px'};a.css({'width':l,'display':r})}
else{a.css('display','none')}};this.stickyTable.css('width',this.originalTable.outerWidth())}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/tableheader.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/progress.js. */
(function(t){Drupal.progressBar=function(r,i,e,s){var a=this;this.id=r;this.method=e||'GET';this.updateCallback=i;this.errorCallback=s;this.element=t('<div class="progress" aria-live="polite"></div>').attr('id',r);this.element.html('<div class="bar"><div class="filled"></div></div><div class="percentage"></div><div class="message">&nbsp;</div>')};Drupal.progressBar.prototype.setProgress=function(r,i){if(r>=0&&r<=100){t('div.filled',this.element).css('width',r+'%');t('div.percentage',this.element).html(r+'%')};t('div.message',this.element).html(i);if(this.updateCallback){this.updateCallback(r,i,this)}};Drupal.progressBar.prototype.startMonitoring=function(t,r){this.delay=r;this.uri=t;this.sendPing()};Drupal.progressBar.prototype.stopMonitoring=function(){clearTimeout(this.timer);this.uri=null};Drupal.progressBar.prototype.sendPing=function(){if(this.timer){clearTimeout(this.timer)};if(this.uri){var r=this;t.ajax({type:this.method,url:this.uri,data:'',dataType:'json',success:function(t){if(t.status==0){r.displayError(t.data);return};r.setProgress(t.percentage,t.message);r.timer=setTimeout(function(){r.sendPing()},r.delay)},error:function(t){r.displayError(Drupal.ajaxError(t,r.uri))}})}};Drupal.progressBar.prototype.displayError=function(r){var i=t('<div class="messages error"></div>').html(r);t(this.element).before(i).hide();if(this.errorCallback){this.errorCallback(this)}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/progress.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/sites/all/modules/media/js/media.popups.js. */
(function(e){namespace('Drupal.media.popups');Drupal.media.popups.mediaBrowser=function(i,r,t,n){var a=Drupal.media.popups.mediaBrowser.getDefaults();a.global=e.extend({},a.global,r);a.plugins=t;a.widget=e.extend({},a.widget,n);var o=a.widget.src;if(e.isArray(o)&&o.length){o=o[o.length-1]};var d={};e.extend(d,a.global);d.plugins=a.plugins;o+='&'+e.param(d);var l=Drupal.media.popups.getPopupIframe(o,'mediaBrowser');l.bind('load',a,a.widget.onLoad);var s=a.dialog,u=Drupal.t('OK'),m=Drupal.t('You have not selected anything!');s.buttons[u]=function(){var a=this.contentWindow.Drupal.media.browser.selectedMedia;if(a.length<1){alert(m);return};i(a);e(this).dialog('close')};var p=l.dialog(s);Drupal.media.popups.sizeDialog(p);Drupal.media.popups.resizeDialog(p);Drupal.media.popups.scrollDialog(p);Drupal.media.popups.overlayDisplace(p.parents('.ui-dialog'));return l};Drupal.media.popups.mediaBrowser.getDefaults=function(){return{global:{types:[],enabledPlugins:[]},widget:{src:Drupal.settings.media.browserUrl,onLoad:Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad},dialog:Drupal.media.popups.getDialogOptions()}};Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad=function(i){var r=i.data;if(this.contentWindow.Drupal.media.browser==undefined){return};if(this.contentWindow.Drupal.media.browser.selectedMedia.length>0){var a=Drupal.t('OK'),o=e(this).dialog('option','buttons')[a];o.call(this);return}};Drupal.media.popups.mediaBrowser.finalizeSelection=function(){var i=this.contentWindow.Drupal.media.browser.selectedMedia;if(i.length<1){alert(notSelected);return};onSelect(i);e(this).dialog('close')};Drupal.media.popups.mediaStyleSelector=function(i,r,a){var o=Drupal.media.popups.mediaStyleSelector.getDefaults();if(typeof o.src==='string'){o.src=o.src.replace('-media_id-',i.fid)+'&fields='+encodeURIComponent(JSON.stringify(i.fields))}
else{var d=o.src.shift();o.src.unshift(d);o.src=d.replace('-media_id-',i.fid)+'&fields='+encodeURIComponent(JSON.stringify(i.fields))};a=e.extend({},o,a);var p=Drupal.media.popups.getPopupIframe(a.src,'mediaStyleSelector');p.bind('load',a,a.onLoad);var l=Drupal.media.popups.getDialogOptions(),s=Drupal.t('OK'),n=Drupal.t('Very sorry, there was an unknown error embedding media.');l.buttons[s]=function(){var a=this.contentWindow.Drupal.media.formatForm.getFormattedMedia();a.options=e.extend({},i.attributes,a.options);if(!a){alert(n);return};r(a);e(this).dialog('close')};var t=p.dialog(l);Drupal.media.popups.sizeDialog(t);Drupal.media.popups.resizeDialog(t);Drupal.media.popups.scrollDialog(t);Drupal.media.popups.overlayDisplace(t.parents('.ui-dialog'));return p};Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad=function(e){};Drupal.media.popups.mediaStyleSelector.getDefaults=function(){return{src:Drupal.settings.media.styleSelectorUrl,onLoad:Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad}};Drupal.media.popups.mediaFieldEditor=function(i,o,a){var p=Drupal.media.popups.mediaFieldEditor.getDefaults();p.src=p.src.replace('-media_id-',i);a=e.extend({},p,a);var t=Drupal.media.popups.getPopupIframe(a.src,'mediaFieldEditor');t.bind('load',a,a.onLoad);var l=Drupal.media.popups.getDialogOptions(),d=Drupal.t('OK'),s=Drupal.t('Very sorry, there was an unknown error embedding media.');l.buttons[d]=function(){var i=this.contentWindow.Drupal.media.formatForm.getFormattedMedia();if(!i){alert(s);return};o(i);e(this).dialog('close')};var r=t.dialog(l);Drupal.media.popups.sizeDialog(r);Drupal.media.popups.resizeDialog(r);Drupal.media.popups.scrollDialog(r);Drupal.media.popups.overlayDisplace(r);return t};Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad=function(e){};Drupal.media.popups.mediaFieldEditor.getDefaults=function(){return{src:'/media/-media_id-/edit?render=media-popup',onLoad:Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad}};Drupal.media.popups.getDialogOptions=function(){return{title:Drupal.t('Media browser'),buttons:{},dialogClass:Drupal.settings.media.dialogOptions.dialogclass,modal:Drupal.settings.media.dialogOptions.modal,draggable:Drupal.settings.media.dialogOptions.draggable,resizable:Drupal.settings.media.dialogOptions.resizable,minWidth:Drupal.settings.media.dialogOptions.minwidth,width:Drupal.settings.media.dialogOptions.width,height:Drupal.settings.media.dialogOptions.height,position:Drupal.settings.media.dialogOptions.position,overlay:{backgroundColor:Drupal.settings.media.dialogOptions.overlay.backgroundcolor,opacity:Drupal.settings.media.dialogOptions.overlay.opacity},zIndex:Drupal.settings.media.dialogOptions.zindex,close:function(i,a){var o=e(i.target),r=o.attr('id');if(r=='mediaStyleSelector'){e(this).dialog('destroy');e('#mediaStyleSelector').remove()}
else{e(this).dialog('destroy');e('#mediaBrowser').remove()}}}};Drupal.media.popups.getPopupIframe=function(i,o,a){var r={width:'100%',scrolling:'auto'};var a=e.extend({},r,a);return e('<iframe class="media-modal-frame"/>').attr('src',i).attr('width',a.width).attr('id',o).attr('scrolling',a.scrolling)};Drupal.media.popups.overlayDisplace=function(e){if(parent.window.Drupal.overlay&&jQuery.isFunction(parent.window.Drupal.overlay.getDisplacement)){var i=parent.window.Drupal.overlay.getDisplacement('top');if(e.offset().top<i){e.css('top',i)}}};Drupal.media.popups.sizeDialog=function(i){if(!i.is(':visible')){return};var a=e(window).width(),o=a*0.8,r=e(window).height(),t=r*0.8;i.dialog('option','width',o);i.dialog('option','height',t);i.dialog('option','position','center');e('.media-modal-frame').width('100%')};Drupal.media.popups.resizeDialog=function(i){e(window).resize(function(){Drupal.media.popups.sizeDialog(i)})};Drupal.media.popups.scrollDialog=function(i){e(window).scroll(function(){if(!i.is(':visible')){return};i.dialog('option','position','center')})}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/sites/all/modules/media/js/media.popups.js. */
