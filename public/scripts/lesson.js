define(function (require, exports, module) {

	var $ = require('jquery');

	var template = require('template');

	require('form');

	var lessonModal = $('#lessonModal'),
		body = lessonModal.find('.modal-body'),
		lessons = $('.lessons ul'),
		total = $('.total');

	// 视频管理
	$('#Lessons').on('click', '.btn', function () {
		var _this = $(this),
			html = '';

		if(_this.is('.delete')) {
			alert('delete');
			return;
		}

		// 添加
		if(_this.is('.add')) {

			html = template('form', {});

			body.html(html);

			lessonModal.modal();

			return;
		}

		// 编辑
		if(_this.is('.edit')) {
			// 获取课时信息
			$.ajax({
				url: '/course/create/lesson/edit',
				type: 'post',
				data: {ls_id: _this.closest('li').attr('data-id')},
				success: function (data) {
					var result = data.result;

					if(data.code == 10000) {
						var temp = result.ls_video_duration.split(':');
						result.ls_minute = temp[0];
						result.ls_seconds = temp[1];

						html = template('form', result);

						// 修改表单标识为编辑状态
						body.html(html).find('form').attr('data-flag', 'edit');

						lessonModal.modal();
					}
				}
			});
		}
	});

	// 创建课程
	lessonModal.on('click', '.btn', function () {
		var _this = $(this);

		// 获取视频
		if(_this.is('.getvideo')) {
			alert('根据地址抓取');

			return;
		}

		// 保存
		if(_this.is('.save')) {

			// 缺少一些验证

			var form = lessonModal.find('form'),
				flag = form.attr('data-flag');

			form.ajaxSubmit({
				url: '/course/create/lesson/add',
				type: 'post',
				success: function (data) {

					lessonModal.modal('hide');

					if(flag == 'edit') return location.reload();

					// 计算索引值
					data.result.index = lessons.children().length - 0 + 1;
					// 更新总课时
					total.text('课时：' + data.result.index);

					html = template('lesson', data.result);

					lessons.append(html);
				}
			});
		}
	});
		

});