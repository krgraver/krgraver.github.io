// JavaScript Document

$(document).ready(function () {
	$(document).on('scroll', onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off('scroll');

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on('scroll', onScroll);
		});
	});
});

function onScroll(event){
	var scrollPosition = $(document).scrollTop();
	$('nav a').each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr('href'));
		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
			$('nav ul li a').removeClass('active');
			currentLink.addClass('active');
		}
		else{
			currentLink.removeClass('active');
		}
	});
}

$(window).scroll(function() {
	if ($('body').scrollTop() > 60 && $(window).width() > 870) {
		$('#navContent .logo').addClass('scroll');
		$('#navContent ul').addClass('scroll');
	} else {
		$('#navContent .logo').removeClass('scroll');
		$('#navContent ul').removeClass('scroll');
	}

	if ($('body').scrollTop() > 60) {
		$('nav').addClass('scroll');
	} else {
		$('nav').removeClass('scroll');
	}
});

$(function() {
	$('#navContent a').click(function(){
		$('#navContent a').removeClass('active');
		$(this).addClass("active");
	});
});

$('#arrow img')
	.delay(8000)
	.animate({opacity: .6}, {duration: 1000, queue: true});

$('#topBtn').click(function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: 0}, 1000);
});

$(function() {
	$('#localGuide a, #flint a, #sprightly a, #sufo a').fluidbox({
		stackIndex: 10
	});
});






