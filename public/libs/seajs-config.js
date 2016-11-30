
// 配置文件
seajs.config({
	base: '/assets',
	alias: {
		jquery: 'jquery/jquery.js',
		form: 'jquery-form/jquery.form.js',
		uploadify: 'uploadify/jquery.uploadify.js',
		jcrop: 'Jcrop/js/Jcrop.js',
		region: 'region/jquery.region.js',
		bootstrap: 'bootstrap/js/bootstrap.js',
		datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.js',
		language: 'bootstrap-datepicker/js/bootstrap-datepicker.zh-CN.min.js',
		nprogress: 'nprogress/nprogress.js',
		echarts: 'echarts/echarts.js',
		template: 'artTemplate/template-native.js',
		ckeditor: 'ckeditor/ckeditor.js'
	},
	preload: ['bootstrap', '/scripts/common']
});