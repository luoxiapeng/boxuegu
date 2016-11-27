define(function (require, exports, module) {

	var CKEDITOR = require('ckeditor');

	var defaults = {
		toolbarGroups: [
			{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
			{ name: 'forms' },
			{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
			{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
			{ name: 'styles' },
			{ name: 'colors' }
		]
	}

	exports.create = function (id, options) {
		CKEDITOR.replace(id, options || defaults);
	}

});