/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/sites/all/modules/video/js/video.js. */
(function(e){Drupal.behaviors.video={attach:function(t,i){if(e.fn.media){e('.jmedia').media()};if(i.video){e.fn.media.defaults.flvPlayer=i.video.flvplayer};e('.video-box').each(function(){var i=e(this).attr('href')})}};Drupal.behaviors.videoEdit={attach:function(i,a){function t(e,a){var i=e.find('.video-thumbnails input'),d=e.find('.video-use-default-video-thumb'),n=e.find('.video-preview img'),f=i.filter(':checked');if(f.length>0&&a!='default'){var c=f.next('label.option').find('img');n.attr('src',c.attr('src'));d.attr('checked',!1)}
else if(d.is(':checked')){i.attr('checked',!1);n.attr('src',d.data('defaultimage'))}
else{if(i.length>0){i.first().attr('checked','checked');t(e,'thumb')}}};e('.video-thumbnails input',i).change(function(){t(e(this).parents('.video-widget'),'thumb')});e('.video-use-default-video-thumb',i).change(function(){t(e(this).parents('.video-widget'),'default')});e('.video-widget',i).each(function(){t(e(this),'both')})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/sites/all/modules/video/js/video.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/tableheader.js. */
(function(e){Drupal.behaviors.tableHeader={attach:function(i,t){if(!e.support.positionFixed){return};e('table.sticky-enabled',i).once('tableheader',function(){e(this).data('drupal-tableheader',new Drupal.tableHeader(this))})}};Drupal.tableHeader=function(t){var i=this;this.originalTable=e(t);this.originalHeader=e(t).children('thead');this.originalHeaderCells=this.originalHeader.find('> tr > th');this.displayWeight=null;this.originalTable.bind('columnschange',function(e,t){i.widthCalculated=(i.displayWeight!==null&&i.displayWeight===t);i.displayWeight=t});this.stickyTable=e('<table class="sticky-header"/>').insertBefore(this.originalTable).css({position:'fixed',top:'0px'});this.stickyHeader=this.originalHeader.clone(!0).hide().appendTo(this.stickyTable);this.stickyHeaderCells=this.stickyHeader.find('> tr > th');this.originalTable.addClass('sticky-table');e(window).bind('scroll.drupal-tableheader',e.proxy(this,'eventhandlerRecalculateStickyHeader')).bind('resize.drupal-tableheader',{calculateWidth:!0},e.proxy(this,'eventhandlerRecalculateStickyHeader')).bind('drupalDisplaceAnchor.drupal-tableheader',function(){window.scrollBy(0,-i.stickyTable.outerHeight())}).bind('drupalDisplaceFocus.drupal-tableheader',function(e){if(i.stickyVisible&&e.clientY<(i.stickyOffsetTop+i.stickyTable.outerHeight())&&e.$target.closest('sticky-header').length===0){window.scrollBy(0,-i.stickyTable.outerHeight())}}).triggerHandler('resize.drupal-tableheader');this.stickyHeader.show()};Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader=function(i){var u=this,d=i.data&&i.data.calculateWidth;this.stickyOffsetTop=Drupal.settings.tableHeaderOffset?eval(Drupal.settings.tableHeaderOffset+'()'):0;this.stickyTable.css('top',this.stickyOffsetTop+'px');var n=document.documentElement.scrollHeight||document.body.scrollHeight;if(d||this.viewHeight!==n){this.viewHeight=n;this.vPosition=this.originalTable.offset().top-4-this.stickyOffsetTop;this.hPosition=this.originalTable.offset().left;this.vLength=this.originalTable[0].clientHeight-100;d=!0};var c=document.documentElement.scrollLeft||document.body.scrollLeft,h=(document.documentElement.scrollTop||document.body.scrollTop)-this.vPosition;this.stickyVisible=h>0&&h<this.vLength;this.stickyTable.css({left:(-c+this.hPosition)+'px',visibility:this.stickyVisible?'visible':'hidden'});if(this.stickyVisible&&(d||!this.widthCalculated)){this.widthCalculated=!0;var t=null,a=null,r=null,l=null;for(var s=0,o=this.originalHeaderCells.length;s<o;s+=1){t=e(this.originalHeaderCells[s]);a=this.stickyHeaderCells.eq(t.index());r=t.css('display');if(r!=='none'){l=t.css('width');if(l==='auto'){l=t[0].clientWidth+'px'};a.css({'width':l,'display':r})}
else{a.css('display','none')}};this.stickyTable.css('width',this.originalTable.outerWidth())}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/tableheader.js. */
