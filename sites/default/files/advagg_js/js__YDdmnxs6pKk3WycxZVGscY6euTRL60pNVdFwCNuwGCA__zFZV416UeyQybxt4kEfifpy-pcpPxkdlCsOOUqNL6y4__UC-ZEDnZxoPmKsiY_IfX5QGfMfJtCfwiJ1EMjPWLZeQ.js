/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/sites/all/modules/jquery_update/replace/ui/external/jquery.cookie.js. */
;jQuery.cookie=function(o,n,e){if(arguments.length>1&&(n===null||typeof n!=='object')){e=jQuery.extend({},e);if(n===null){e.expires=-1};if(typeof e.expires==='number'){var p=e.expires,r=e.expires=new Date();r.setDate(r.getDate()+p)};return(document.cookie=[encodeURIComponent(o),'=',e.raw?String(n):encodeURIComponent(String(n)),e.expires?'; expires='+e.expires.toUTCString():'',e.path?'; path='+e.path:'',e.domain?'; domain='+e.domain:'',e.secure?'; secure':''].join(''))};e=n||{};var t,i=e.raw?function(e){return e}:decodeURIComponent;return(t=new RegExp('(?:^|; )'+encodeURIComponent(o)+'=([^;]*)').exec(document.cookie))?i(t[1]):null};;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/sites/all/modules/jquery_update/replace/ui/external/jquery.cookie.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/states.js. */
(function(e){var t=Drupal.states={postponed:[]};Drupal.behaviors.states={attach:function(i,n){var a=e(i);for(var r in n.states){for(var s in n.states[r]){new t.Dependent({element:a.find(r),state:t.State.sanitize(s),constraints:n.states[r][s]})}}
while(t.postponed.length){(t.postponed.shift())()}}};t.Dependent=function(t){e.extend(this,{values:{},oldValue:null},t);this.dependees=this.getDependees();for(var i in this.dependees){this.initializeDependee(i,this.dependees[i])}};t.Dependent.comparisons={'RegExp':function(e,t){return e.test(t)},'Function':function(e,t){return e(t)},'Number':function(e,t){return(typeof t==='string')?i(e.toString(),t):i(e,t)}};t.Dependent.prototype={initializeDependee:function(i,n){var r;this.values[i]={};for(var s in n){if(n.hasOwnProperty(s)){r=n[s];if(e.inArray(r,n)===-1){continue};r=t.State.sanitize(r);this.values[i][r.name]=null;e(i).bind('state:'+r,e.proxy(function(e){this.update(i,r,e.value)},this));new t.Trigger({selector:i,state:r})}}},compare:function(e,n,r){var s=this.values[n][r.name];if(e.constructor.name in t.Dependent.comparisons){return t.Dependent.comparisons[e.constructor.name](e,s)}
else{return i(e,s)}},update:function(e,t,i){if(i!==this.values[e][t.name]){this.values[e][t.name]=i;this.reevaluate()}},reevaluate:function(){var e=this.verifyConstraints(this.constraints);if(e!==this.oldValue){this.oldValue=e;e=n(e,this.state.invert);this.element.trigger({type:'state:'+this.state,value:e,trigger:!0})}},verifyConstraints:function(t,i){var n;if(e.isArray(t)){var l=e.inArray('xor',t)===-1;for(var s=0,u=t.length;s<u;s++){if(t[s]!='xor'){var o=this.checkConstraints(t[s],i,s);if(o&&(l||n)){return l};n=n||o}}}
else if(e.isPlainObject(t)){for(var a in t){if(t.hasOwnProperty(a)){n=r(n,this.checkConstraints(t[a],i,a));if(n===!1){return!1}}}};return n},checkConstraints:function(e,i,r){if(typeof r!=='string'||(/[0-9]/).test(r[0])){r=null}
else if(typeof i==='undefined'){i=r;r=null};if(r!==null){r=t.State.sanitize(r);return n(this.compare(e,i,r),r.invert)}
else{return this.verifyConstraints(e,i)}},getDependees:function(){var e={};var t=this.compare;this.compare=function(t,i,n){(e[i]||(e[i]=[])).push(n.name)};this.verifyConstraints(this.constraints);this.compare=t;return e}};t.Trigger=function(i){e.extend(this,i);if(this.state in t.Trigger.states){this.element=e(this.selector);if(!this.element.data('trigger:'+this.state)){this.initialize()}}};t.Trigger.prototype={initialize:function(){var e=t.Trigger.states[this.state];if(typeof e=='function'){e.call(window,this.element)}
else{for(var i in e){if(e.hasOwnProperty(i)){this.defaultTrigger(i,e[i])}}};this.element.data('trigger:'+this.state,!0)},defaultTrigger:function(i,n){var r=n.call(this.element);this.element.bind(i,e.proxy(function(e){var t=n.call(this.element,e);if(r!==t){this.element.trigger({type:'state:'+this.state,value:t,oldValue:r});r=t}},this));t.postponed.push(e.proxy(function(){this.element.trigger({type:'state:'+this.state,value:r,oldValue:null})},this))}};t.Trigger.states={empty:{'keyup':function(){return this.val()==''}},checked:{'change':function(){return this.is(':checked')}},value:{'keyup':function(){if(this.length>1){return this.filter(':checked').val()||!1};return this.val()},'change':function(){if(this.length>1){return this.filter(':checked').val()||!1};return this.val()}},collapsed:{'collapsed':function(e){return(typeof e!=='undefined'&&'value' in e)?e.value:this.is('.collapsed')}}};t.State=function(e){this.pristine=this.name=e;while(!0){while(this.name.charAt(0)=='!'){this.name=this.name.substring(1);this.invert=!this.invert};if(this.name in t.State.aliases){this.name=t.State.aliases[this.name]}
else{break}}};t.State.sanitize=function(e){if(e instanceof t.State){return e}
else{return new t.State(e)}};t.State.aliases={'enabled':'!disabled','invisible':'!visible','invalid':'!valid','untouched':'!touched','optional':'!required','filled':'!empty','unchecked':'!checked','irrelevant':'!relevant','expanded':'!collapsed','readwrite':'!readonly'};t.State.prototype={invert:!1,toString:function(){return this.name}};e(document).bind('state:disabled',function(t){if(t.trigger){e(t.target).attr('disabled',t.value).closest('.form-item, .form-submit, .form-wrapper').toggleClass('form-disabled',t.value).find('select, input, textarea').attr('disabled',t.value)}});e(document).bind('state:required',function(t){if(t.trigger){if(t.value){var i=e(t.target).closest('.form-item, .form-wrapper').find('label');if(!i.find('.form-required').length){i.append('<span class="form-required">*</span>')}}
else{e(t.target).closest('.form-item, .form-wrapper').find('label .form-required').remove()}}});e(document).bind('state:visible',function(t){if(t.trigger){e(t.target).closest('.form-item, .form-submit, .form-wrapper').toggle(t.value)}});e(document).bind('state:checked',function(t){if(t.trigger){e(t.target).attr('checked',t.value)}});e(document).bind('state:collapsed',function(t){if(t.trigger){if(e(t.target).is('.collapsed')!==t.value){e('> legend a',t.target).click()}}});function r(e,t){return typeof e==='undefined'?t:(typeof t==='undefined'?e:e&&t)};function n(e,t){return(t&&typeof e!=='undefined')?!e:e};function i(e,t){return(e===t)?(typeof e==='undefined'?e:!0):(typeof e==='undefined'||typeof t==='undefined')}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/states.js. */
/* Source and licensing information for the line(s) below can be found at http://casinodivenezialast.dd:8083/misc/form.js. */
(function(r){r.fn.drupalGetSummary=function(){var a=this.data('summaryCallback');return(this[0]&&a)?r.trim(a(this[0])):''};r.fn.drupalSetSummary=function(r){var t=this;if(typeof r!='function'){var a=r;r=function(){return a}};return this.data('summaryCallback',r).unbind('formUpdated.summary').bind('formUpdated.summary',function(){t.trigger('summaryUpdated')}).trigger('summaryUpdated')};Drupal.behaviors.formUpdated={attach:function(a){var t='change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated';r(a).find(':input').andSelf().filter(':input').unbind(t).bind(t,function(){r(this).trigger('formUpdated')})}};Drupal.behaviors.fillUserInfoFromCookie={attach:function(a,t){r('form.user-info-from-cookie').once('user-info-from-cookie',function(){var a=this;r.each(['name','mail','homepage'],function(){var t=r('[name='+this+']',a),i=r.cookie('Drupal.visitor.'+this);if(t.length&&i){t.val(i)}})})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://casinodivenezialast.dd:8083/misc/form.js. */
