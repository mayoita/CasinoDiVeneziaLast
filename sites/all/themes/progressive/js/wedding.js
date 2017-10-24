/**
 * Created by massimomoro on 04/10/17.
 */
jQuery(document).ready(function() {
    'use strict';
    var $ = jQuery;
    $('.flipbook').turn({
        // Width

        width: 1100,

        // Height

        height: 550,
        //	display:"single",

        // Elevation

        elevation: 50,

        // Enable gradients

        gradients: true,

        // Auto center this flipbook

        autoCenter: true

    });
});