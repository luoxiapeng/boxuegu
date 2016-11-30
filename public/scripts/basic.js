define(function (require, exports, module) {

	var $ = require('jquery');

	var template = require('template');

	require('form');

	require('uploadify');

	var ck = require('./utils/ck');

	ck.create('basicEditor');

	// 提交表单
	$('#basicForm').on('submit', function () {

		// 提交ckeditor数据
		for(instance in CKEDITOR.instances) {
			CKEDITOR.instances[instance].updateElement();
		}

		$(this).ajaxSubmit({
			url: '/course/create/basic',
			type: 'post',
			success: function (data) {
				if(data.code == 10000) {
					location.href = '/course/create/picture/' + data.result.cs_id;
				}
			}
		});

		return false;
	});

	// 切换分类
	$('#getChilds').on('change', function () {
		var _this = $(this),
			cg_id = _this.val();

		if(!cg_id) return;

		$.ajax({
			url: '/course/create/getChild',
			type: 'post',
			data: {cg_id: cg_id},
			success: function (data) {
				if(data.code == 10000) {
					var html = template('tpl', {categorys: data.result});
					_this.next().html(html);
				}
			}
		});

	});

});