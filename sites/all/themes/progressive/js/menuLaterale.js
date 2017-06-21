/**
 * Created by massimomoro on 20/06/17.
 */

jQuery(document).ready(function ($) {


    //stick in the fixed 100% height behind the navbar but don't wrap it
   // $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));
   // $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));

    $('#slide-nav').after($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '.nd-region';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            right: selected ? menuneg : '0px'
        },{
            duration: 500,
            specialEasing: {
                width: "linear",
                height: "easeOutBounce"
            }});

        $('#navbar-height-col').stop().animate({
            right: selected ? slideneg : '0px'
        },{
            duration: 500,
            specialEasing: {
                width: "linear",
                height: "easeOutBounce"
            }});

        $(pagewrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        },{
            duration: 500,
            specialEasing: {
                width: "linear",
                height: "easeOutBounce"
            }});

        $(navigationwrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        },{
            duration: 500,
            specialEasing: {
                width: "linear",
                height: "easeOutBounce"
            }});


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });




});