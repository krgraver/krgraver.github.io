// JavaScript Document

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#headerBG').css('top',(0-(scrolled*.75))+'px');
}

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});