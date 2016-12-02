define(function (require, exports, module) {

	var $ = require('jquery');

	require('form');

	$('#createCourse').on('submit', function () {
		$(this).ajaxSubmit({
			url: '/course/create',
			type: 'post',
			success: function (data) {
				if(data.code == 10000) {
					location.href = 'create/basic/' + data.result.id;
				}
			}
		});

		return false;
	});

});