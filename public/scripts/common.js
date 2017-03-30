define(function (require, exports, module) {

	var $ = require('jquery');

	var NProgress = require('nprogress');

	// 折叠效果
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 选中状态
	$('.navs a').each(function () {
		var _this = $(this),
			pathname = location.pathname,
			href = _this.attr('href').slice(1);

		if(pathname.indexOf(href) == 1) {

			_this.addClass('active');
			_this.closest('ul').show();

			return false;
		}
	});

	NProgress.start();
	NProgress.done();
	
	// Ajax进度条
	$(document).ajaxStart(function () {
		NProgress.start();
	}).ajaxStop(function () {
		NProgress.done();
	});
})