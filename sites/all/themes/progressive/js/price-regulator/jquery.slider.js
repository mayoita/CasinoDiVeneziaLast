!function(t){function e(t){return void 0!==t&&(t instanceof Array||!(t instanceof Object)&&"[object Array]"==Object.prototype.toString.call(t)||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))}function s(){return this.init.apply(this,arguments)}function i(){Draggable.apply(this,arguments)}t.slider=function(e,i){var n=t(e);return n.data("jslider")||n.data("jslider",new s(e,i)),n.data("jslider")},t.fn.slider=function(s,i){function n(t){return void 0!==t}function o(t){return null!=t}var r,a=arguments;return this.each(function(){var l=t.slider(this,s);if("string"==typeof s)switch(s){case"value":n(a[1])&&n(a[2])?(o((h=l.getPointers())[0])&&o(a[1])&&(h[0].set(a[1]),h[0].setIndexOver()),o(h[1])&&o(a[2])&&(h[1].set(a[2]),h[1].setIndexOver())):n(a[1])?o((h=l.getPointers())[0])&&o(a[1])&&(h[0].set(a[1]),h[0].setIndexOver()):r=l.getValue();break;case"prc":if(n(a[1])&&n(a[2]))o((h=l.getPointers())[0])&&o(a[1])&&(h[0]._set(a[1]),h[0].setIndexOver()),o(h[1])&&o(a[2])&&(h[1]._set(a[2]),h[1].setIndexOver());else if(n(a[1])){var h=l.getPointers();o(h[0])&&o(a[1])&&(h[0]._set(a[1]),h[0].setIndexOver())}else r=l.getPrcValue();break;case"calculatedValue":var d=l.getValue().split(";");r="";for(var c=0;c<d.length;c++)r+=(c>0?";":"")+l.nice(d[c]);break;case"skin":l.setSkin(a[1])}else s||i||(e(r)||(r=[]),r.push(l))}),e(r)&&1==r.length&&(r=r[0]),r||this};var n={settings:{from:1,to:10,step:1,smooth:!0,limits:!0,round:0,format:{format:"#,##0.##"},value:"5;7",dimension:""},className:"jslider",selector:".jslider-",template:tmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"></i><i class="f"></i><i class="r"></i><i class="v"></i></div><div class="<%=className%>-pointer"></div><div class="<%=className%>-pointer <%=className%>-pointer-to"></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><%=settings.dimension%><span><%=settings.to%></span></div><div class="<%=className%>-value"><%=settings.dimension%><span></span></div><div class="<%=className%>-value <%=className%>-value-to"><%=settings.dimension%><span></span></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};s.prototype.init=function(e,s){this.settings=t.extend(!0,{},n.settings,s||{}),this.inputNode=t(e).hide(),this.settings.interval=this.settings.to-this.settings.from,this.settings.value=this.inputNode.attr("value"),this.settings.calculate&&t.isFunction(this.settings.calculate)&&(this.nice=this.settings.calculate),this.settings.onstatechange&&t.isFunction(this.settings.onstatechange)&&(this.onstatechange=this.settings.onstatechange),this.is={init:!1},this.o={},this.create()},s.prototype.onstatechange=function(){},s.prototype.create=function(){var e=this;this.domNode=t(n.template({className:n.className,settings:{from:this.nice(this.settings.from),to:this.nice(this.settings.to),dimension:this.settings.dimension},scale:this.generateScale()})),this.inputNode.after(this.domNode),this.drawScale(),this.settings.skin&&this.settings.skin.length>0&&this.setSkin(this.settings.skin),this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.extend(this.o,{pointers:{},labels:{0:{o:this.domNode.find(n.selector+"value").not(n.selector+"value-to")},1:{o:this.domNode.find(n.selector+"value").filter(n.selector+"value-to")}},limits:{0:this.domNode.find(n.selector+"label").not(n.selector+"label-to"),1:this.domNode.find(n.selector+"label").filter(n.selector+"label-to")}}),t.extend(this.o.labels[0],{value:this.o.labels[0].o.find("span")}),t.extend(this.o.labels[1],{value:this.o.labels[1].o.find("span")}),e.settings.value.split(";")[1]||(this.settings.single=!0,this.domNode.addDependClass("single")),e.settings.limits||this.domNode.addDependClass("limitless"),this.domNode.find(n.selector+"pointer").each(function(t){var s=e.settings.value.split(";")[t];if(s){e.o.pointers[t]=new i(this,t,e);var n=e.settings.value.split(";")[t-1];n&&new Number(s)<new Number(n)&&(s=n),s=(s=s<e.settings.from?e.settings.from:s)>e.settings.to?e.settings.to:s,e.o.pointers[t].set(s,!0)}}),this.o.value=this.domNode.find(".v"),this.is.init=!0,t.each(this.o.pointers,function(t){e.redraw(this)}),function(e){t(window).resize(function(){e.onresize()})}(this)},s.prototype.setSkin=function(t){this.skin_&&this.domNode.removeDependClass(this.skin_,"_"),this.domNode.addDependClass(this.skin_=t,"_")},s.prototype.setPointersIndex=function(e){t.each(this.getPointers(),function(t){this.index(t)})},s.prototype.getPointers=function(){return this.o.pointers},s.prototype.generateScale=function(){if(this.settings.scale&&this.settings.scale.length>0){for(var t="",e=this.settings.scale,s=Math.round(100/(e.length-1)*10)/10,i=0;i<e.length;i++)t+='<span style="left: '+i*s+'%">'+("|"!=e[i]?"<ins>"+e[i]+"</ins>":"")+"</span>";return t}return""},s.prototype.drawScale=function(){this.domNode.find(n.selector+"scale span ins").each(function(){t(this).css({marginLeft:-t(this).outerWidth()/2})})},s.prototype.onresize=function(){var e=this;this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.each(this.o.pointers,function(t){e.redraw(this)})},s.prototype.update=function(){this.onresize(),this.drawScale()},s.prototype.limits=function(t,e){if(!this.settings.smooth){var s=100*this.settings.step/this.settings.interval;t=Math.round(t/s)*s}var i=this.o.pointers[1-e.uid];return i&&e.uid&&t<i.value.prc&&(t=i.value.prc),i&&!e.uid&&t>i.value.prc&&(t=i.value.prc),t<0&&(t=0),t>100&&(t=100),Math.round(10*t)/10},s.prototype.redraw=function(t){if(!this.is.init)return!1;this.setValue(),this.o.pointers[0]&&this.o.pointers[1]&&this.o.value.css({left:this.o.pointers[0].value.prc+"%",width:this.o.pointers[1].value.prc-this.o.pointers[0].value.prc+"%"}),this.o.labels[t.uid].value.html(this.nice(t.value.origin)),this.redrawLabels(t)},s.prototype.redrawLabels=function(t){function e(t,e,i){return e.margin=-e.label/2,label_left=e.border+e.margin,label_left<0&&(e.margin-=label_left),e.border+e.label/2>s.sizes.domWidth?(e.margin=0,e.right=!0):e.right=!1,t.o.css({left:i+"%",marginLeft:e.margin,right:"auto"}),e.right&&t.o.css({left:"auto",right:0}),e}var s=this,i=this.o.labels[t.uid],n=t.value.prc,o={label:i.o.outerWidth(),right:!1,border:n*this.sizes.domWidth/100};if(!this.settings.single){var r=this.o.pointers[1-t.uid],a=this.o.labels[r.uid];switch(t.uid){case 0:o.border+o.label/2>a.o.offset().left-this.sizes.domOffset.left?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),i.o.css({visibility:"visible"}),n=(r.value.prc-n)/2+n,r.value.prc!=t.value.prc&&(i.value.html(this.nice(t.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(r.value.origin)),o.label=i.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"});break;case 1:o.border-o.label/2<a.o.offset().left-this.sizes.domOffset.left+a.o.outerWidth()?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),i.o.css({visibility:"visible"}),n=(n-r.value.prc)/2+r.value.prc,r.value.prc!=t.value.prc&&(i.value.html(this.nice(r.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(t.value.origin)),o.label=i.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"})}}o=e(i,o,n),a&&(o=e(a,o={label:a.o.outerWidth(),right:!1,border:r.value.prc*this.sizes.domWidth/100},r.value.prc)),this.redrawLimits()},s.prototype.redrawLimits=function(){if(this.settings.limits){var t=[!0,!0];for(key in this.o.pointers)if(!this.settings.single||0==key){var e=this.o.pointers[key],s=this.o.labels[e.uid],i=s.o.offset().left-this.sizes.domOffset.left;i<(n=this.o.limits[0]).outerWidth()&&(t[0]=!1);var n=this.o.limits[1];i+s.o.outerWidth()>this.sizes.domWidth-n.outerWidth()&&(t[1]=!1)}for(var o=0;o<t.length;o++)t[o]?this.o.limits[o].fadeIn("fast"):this.o.limits[o].fadeOut("fast")}},s.prototype.setValue=function(){var t=this.getValue();this.inputNode.attr("value",t),this.onstatechange.call(this,t)},s.prototype.getValue=function(){if(!this.is.init)return!1;var e=this,s="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(s+=(t>0?";":"")+e.prcToValue(this.value.prc))}),s},s.prototype.getPrcValue=function(){if(!this.is.init)return!1;var e="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(e+=(t>0?";":"")+this.value.prc)}),e},s.prototype.prcToValue=function(t){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var e=this.settings.heterogeneity,s=0,i=this.settings.from,n=0;n<=e.length;n++){if(e[n])o=e[n].split("/");else var o=[100,this.settings.to];if(o[0]=new Number(o[0]),o[1]=new Number(o[1]),t>=s&&t<=o[0])r=i+(t-s)*(o[1]-i)/(o[0]-s);s=o[0],i=o[1]}else var r=this.settings.from+t*this.settings.interval/100;return this.round(r)},s.prototype.valueToPrc=function(t,e){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var s=this.settings.heterogeneity,i=0,n=this.settings.from,o=0;o<=s.length;o++){if(s[o])r=s[o].split("/");else var r=[100,this.settings.to];if(r[0]=new Number(r[0]),r[1]=new Number(r[1]),t>=n&&t<=r[1])a=e.limits(i+(t-n)*(r[0]-i)/(r[1]-n));i=r[0],n=r[1]}else var a=e.limits(100*(t-this.settings.from)/this.settings.interval);return a},s.prototype.round=function(t){return t=Math.round(t/this.settings.step)*this.settings.step,t=this.settings.round?Math.round(t*Math.pow(10,this.settings.round))/Math.pow(10,this.settings.round):Math.round(t)},s.prototype.nice=function(e){return e=e.toString().replace(/,/gi,".").replace(/ /gi,""),t.formatNumber?t.formatNumber(new Number(e),this.settings.format||{}).replace(/-/gi,"&minus;"):new Number(e)},(i.prototype=new Draggable).oninit=function(t,e,s){this.uid=e,this.parent=s,this.value={},this.settings=this.parent.settings},i.prototype.onmousedown=function(t){this._parent={offset:this.parent.domNode.offset(),width:this.parent.domNode.width()},this.ptr.addDependClass("hover"),this.setIndexOver()},i.prototype.onmousemove=function(t,e){var s=this._getPageCoords(t);this._set(this.calc(s.x))},i.prototype.onmouseup=function(e){this.parent.settings.callback&&t.isFunction(this.parent.settings.callback)&&this.parent.settings.callback.call(this.parent,this.parent.getValue()),this.ptr.removeDependClass("hover")},i.prototype.setIndexOver=function(){this.parent.setPointersIndex(1),this.index(2)},i.prototype.index=function(t){this.ptr.css({zIndex:t})},i.prototype.limits=function(t){return this.parent.limits(t,this)},i.prototype.calc=function(t){return this.limits(100*(t-this._parent.offset.left)/this._parent.width)},i.prototype.set=function(t,e){this.value.origin=this.parent.round(t),this._set(this.parent.valueToPrc(t,this),e)},i.prototype._set=function(t,e){e||(this.value.origin=this.parent.prcToValue(t)),this.value.prc=t,this.ptr.css({left:t+"%"}),this.parent.redraw(this)}}(jQuery);