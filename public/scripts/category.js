define(function (require, exports, module) {

	var $ = require('jquery');

	require('form');

	$('.category-add .btn').on('click', function () {
		var _this = $(this);

		$.ajax({
			url: '/course/category/update',
			type: 'post',
			data: _this.parents('form').serialize(),
			success: function (data) {
				location.reload();
			}
		});
	});

});