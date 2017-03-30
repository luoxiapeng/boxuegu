define(function (require, exports, module) {

	var $ = require('jquery');
	
	var form = require('form');

	// 登陆
	$('#login').on('submit', function () {
		var _this = $(this);

		_this.ajaxSubmit({
			url: '/login',
			type: 'post',
			success: function (data) {
				if(data.code == 10000) {
					location.href = '/';
				} else {
					alert(data.msg);
				}
			}
		});
		
		return false;
	});
});