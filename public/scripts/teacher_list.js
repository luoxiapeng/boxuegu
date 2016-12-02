define(function (require, exports, module) {

	var $ = require('jquery');

	var template = require('template');

	$('#teacherList').on('click', '.view', function () {
		var _this = $(this),
			tc_id = _this.attr('data-id'),
			teacherModal = $('#teacherModal');

		$.ajax({
			url: '/teacher/view',
			type: 'post',
			data: {tc_id: tc_id},
			success: function (data) {
				// 成功获取
				if(data.code == 10000) {
					var html = template('teacherInfo', data.result);

					teacherModal.find('table').html(html);

					teacherModal.modal();
				}
			}
		});
	});

});