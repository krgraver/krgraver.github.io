// JavaScript Document

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#headerBG').css('top',(0-(scrolled*.75))+'px');
}