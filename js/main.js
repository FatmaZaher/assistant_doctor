$(document).ready(function () {
	/*====================================
		Nice Select JS
	======================================*/
	$('select').niceSelect();

	/*=====================================
		Date Picker JS
	======================================*/
	$(function () {
		$("#datepicker").datepicker();
	});

	$('.check-ai').click(function () {
		$('.result-of-check').show()
	});
	$('#photo-upload').change(function (event) {
		var fileName = $(this).val().split('\\').pop();
		$(this).siblings('label').text(fileName);
	});
});

/*====================
	Preloader JS
======================*/
$(window).on('load', function () {
	$('.preloader').addClass('preloader-deactivate');
});



