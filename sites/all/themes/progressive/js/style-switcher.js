jQuery(function(e){e("#style-switcher h3 a").click(function(s){s.preventDefault(),e(this).hasClass("show")?(e("#style-switcher").animate({left:"-=200"},300,function(){}),e(this).removeClass("show").addClass("hidden1")):(e("#style-switcher").animate({left:"+=200"},300,function(){}),e(this).removeClass("hidden1").addClass("show"))}),e("#style-switcher h3 a").hover(function(){e(this).find(".fa").addClass("fa-spin")},function(){e(this).find(".fa").removeClass("fa-spin")}),e(".styles-switcher-colors a").click(function(){return e(".style-switcher").prev("link[href^='/sites/all/themes/progressive/css/customizer/']").attr("href","/sites/all/themes/progressive/css/customizer/"+e(this).attr("data-color")+"-pages-customizer.css"),!1}),e(".layout-boxed").click(function(s){return s.preventDefault(),e(".style-switcher-layout li a").removeClass("active"),e(this).addClass("active"),e("body").addClass("boxed"),!1}),e(".layout-wide").click(function(s){return s.preventDefault(),e(".style-switcher-layout li a").removeClass("active"),e(this).addClass("active"),e("body").removeClass("boxed"),!1}),e(".layout-rtl").click(function(s){return s.preventDefault(),e(".style-switcher-rtl li a").removeClass("active"),e(this).addClass("active"),e("html").attr("dir","rtl"),e("body").append('<link rel="stylesheet" href="/sites/all/themes/progressive/css/drupal-rtl.css">'),!1}),e(".layout-ltr").click(function(s){return s.preventDefault(),e(".style-switcher-rtl li a").removeClass("active"),e(this).addClass("active"),e("html").attr("dir","ltr"),e('link[href="/sites/all/themes/progressive/css/drupal-rtl.css"]').remove(),!1})});