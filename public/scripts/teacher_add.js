define(function (require, exports, module) {

	var $ = require('jquery');

	require('form');

	require('datepicker');

	require('language');

	// 添加讲师
	$('#teacherForm').on('submit', function () {
		var _this = $(this);

		_this.ajaxSubmit({
			url: '/teacher/add',
			type: 'post',
			success: function (data) {
				alert(data.msg);
				if(data.code == 10000) {
					location.reload();
				}
			}
		});

		return false;
	});

});