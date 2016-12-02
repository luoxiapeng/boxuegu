
// 配置文件
seajs.config({
	base: '/assets',
	alias: {
		jquery: 'jquery/jquery.js',
		bootstrap: 'bootstrap/js/bootstrap.js',
		nprogress: 'nprogress/nprogress.js',
		echarts: 'echarts/echarts.js',
		form: 'jquery-form/jquery.form.js',
		ckeditor: 'ckeditor/ckeditor.js',
		uploadify: 'uploadify/jquery.uploadify.js',
		region: 'region/jquery.region.js',
		datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.js',
		language: 'bootstrap-datepicker/js/bootstrap-datepicker.zh-CN.min.js',
		template: 'artTemplate/template-native.js'
	},
	preload: ['bootstrap', '/scripts/common']
});