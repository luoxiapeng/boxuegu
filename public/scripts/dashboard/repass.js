define(function (require, exports, module) {

	var $ = require('jquery');
	
	require('form');

	$('#repassForm').on('submit', function () {
		var _this = $(this),
			newpass = _this.find('[name="tc_newpass"]').val(),
			repass = _this.find('[name="tc_repass"]').val();

		// 简单验证
		if(newpass != repass) {
			alert('两次密码不一致！');
			return false;
		}

		_this.ajaxSubmit({
			url: '/repass',
			type: 'post',
			success: function (data) {
				alert(data.msg);
				if(data.code == 10000) {
					location.href = '/login';
				}
			}
		});

		return false;
	});

});