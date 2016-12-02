define(function (require, exports, module) {

	var $ = require('jquery');

	var ck = require('../utils/ck');

	require('uploadify');

	require('region');

	require('form');

	require('datepicker');

	require('language')

	ck.create('teacherEditor');

	// 日期
	$('#datepicker').datepicker({
		format: 'yyyy-mm-dd'
	});

	// 获取省市县
	$('.hometown').region({
		url: '/region',
		type: 'get'
	});

	// 表单提交
	$('#profile').on('submit', function () {
		var _this = $(this),
			province = $('#province option:selected').text(),
			city = $('#city option:selected').text(),
			district = $('#district option:selected').text();

        // 提交ckeditor数据
        for(instance in CKEDITOR.instances) {
            CKEDITOR.instances[instance].updateElement();
        }

		_this.ajaxSubmit({
			url: '/profile/update',
			type: 'post',
			data: {tc_hometown: province + '|' + city + '|' + district},
			success: function (data) {
				alert('修改成功！');
			}
		});

		return false;
	});

    // 上传预览
    $('#upfile').uploadify({
        auto: 'true',
        width: '120',
        height: '120',
        buttonText: '',
        fileObjName: 'tc_avatar_original',
        formData: {tc_id: $('#tcID').val()},
        fileSizeLimit: '1MB',
        fileTypeExts: '*.jpg; *.gif; *.png',
        swf: '/assets/uploadify/uploadify.swf',
        uploader: '/profile/avatar',
        itemTemplate: '<span></span>',
        onUploadSuccess: function (file, data, response) {
            // 数据处理
            var data = JSON.parse(data);

            // 预览图片
            $('.preview img').attr('src', '/avatars/' + data.result.tc_avatar);
        }
    });	


});