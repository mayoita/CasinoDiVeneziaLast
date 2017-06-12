/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.protectedSource.push(/<i[^>]*><\/i>/g);

    // [#1762328] Uncomment the line below to protect <code> tags in CKEditor (hide them in wysiwyg mode).
    // config.protectedSource.push(/<code>[\s\S]*?<\/code>/gi);

};
CKEDITOR.dtd.$removeEmpty['i'] = false
