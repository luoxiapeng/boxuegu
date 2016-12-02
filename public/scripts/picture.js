define(function (require, exports, module) {

	var $ = require('jquery');

	require('uploadify');

	require('form');

	require('jcrop');

    var preview = $('.preview img'),
        jcrop_api;

    // 图片裁切
    function imageCrop() {

        if(jcrop_api) jcrop_api.destroy();

        preview.Jcrop({
            boxWidth: 400,
            aspectRatio: 2,
            onSelect: function () {
                console.log('done');
            }
        }, function () {
            jcrop_api = this;

            // 计算初始位置
            var width = this.ui.stage.width,
                height = this.ui.stage.height;

            var x1 = 0,
                y1 = (height - width / 2) / 2,
                x2 = width,
                y2 = width / 2;

            this.newSelection();
            this.setSelect([x1, y1, x2, y2]);
            this.refresh();

            // 缩略图
            thumbnail = this.initComponent('Thumbnailer', {width: 240, height: 120, thumb: '.thumb' });

            $('.jcrop-thumb').css({
                left: 0,
                top: 0
            });
        });
    }

    // 获取裁切尺寸
    preview.parent().on('cropmove cropend',function(e, s, c) {
        $('[name="x"]').val(c.x);
        $('[name="y"]').val(c.y);
        $('[name="w"]').val(c.w);
        $('[name="h"]').val(c.h);
    });

    // 
    $('#crop').on('click', function () {
        var _this = $(this),
            status = _this.attr('data-status');

        if(status == 'crop') {
            imageCrop();
            _this.val('保存图片').attr('data-status', 'save');
            return;
        }

        // 保存
        $('#coords').ajaxSubmit({
            url: '/course/create/crop',
            type: 'post',
            success: function (data) {
                if(data.code == 10000) {
                    location.href = '/course/create/lesson/' + data.result.cs_id;
                }
            }
        });

    });

    // 上传预览
    $('#file_upload').uploadify({
        auto: 'true',
        buttonClass: 'btn btn-success btn-sm',
        width: '82',
        height: 'auto',
        buttonText: '上传图片',
        fileObjName: 'cs_cover_original',
        formData: {cs_id: $('#csID').val()},
        fileSizeLimit: '2MB',
        fileTypeExts: '*.jpg; *.gif; *.png',
        swf: '/uploadify/uploadify.swf',
        uploader: '/course/create/upload',
        itemTemplate: '<span></span>',
        onUploadSuccess: function (file, data, response) {
            // 数据处理
            var data = JSON.parse(data);

            // 预览图片
            $('.preview img').attr('src', '/original/' + data.filename);
            $('input[name="cs_cover_original"]').val(data.filename);

            // 更改按钮状态
            $('#crop').prop('disabled', false)
            .val('保存图片')
            .attr('data-status', 'save');

            // 裁切
            imageCrop();
        }
    });

});