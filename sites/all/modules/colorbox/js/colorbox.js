!function(o){Drupal.behaviors.initColorbox={attach:function(t,c){o.isFunction(o.colorbox)&&void 0!==c.colorbox&&(c.colorbox.mobiledetect&&window.matchMedia&&window.matchMedia("(max-device-width: "+c.colorbox.mobiledevicewidth+")").matches||(c.colorbox.rel=function(){return o(this).data("colorbox-gallery")?o(this).data("colorbox-gallery"):o(this).attr("rel")},o(".colorbox",t).once("init-colorbox").colorbox(c.colorbox),o(t).bind("cbox_complete",function(){Drupal.attachBehaviors("#cboxLoadedContent")})))}}}(jQuery);
