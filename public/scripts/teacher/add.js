define(function (require, exports, module) {

	var $ = require('jquery');

	require('form');

	require('datepicker');

	require('language');

	require('validate');

	// 添加讲师

	$('#teacherForm').validate({
		onKeyup : true,
		sendForm : false,
		eachValidField : function() {
			
			$(this).closest('.form-group')
			.removeClass('has-error')
			.addClass('has-success');

			$(this).next()
			.addClass('glyphicon-ok')
			.removeClass('glyphicon-remove');
		},
		eachInvalidField : function() {

			$(this).closest('.form-group')
			.removeClass('has-success')
			.addClass('has-error');

			$(this).next()
			.addClass('glyphicon-remove')
			.removeClass('glyphicon-ok');

		},
		valid: function () {

			$(this).ajaxSubmit({
				url: '/teacher/add',
				type: 'post',
				success: function (data) {
					alert(data.msg);
					if(data.code == 10000) {
						location.reload();
					}
				}
			});
		}
	});

});