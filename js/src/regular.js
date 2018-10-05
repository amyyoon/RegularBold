(function(){
	var topBtn = $('.topBtn');
$(window).on('scroll',function(e){
	e.preventDefault();
	var thisTop=$(this).scrollTop();
	if(thisTop<500){
		topBtn.stop().show();
	}
});

topBtn.on('click',function(e){
	e.preventDefault();
	$('html','body').animate({scrollTop:0},500);
});

var contentUl =$('.contentUl');
var contentLi =contentUl.children('li');

contentLi.on('mouseover',function(e){
	e.preventDefault();
	var i = $(this).index();
	contentLi.eq(i).addClass('active');
	contentLi.eq(i).children('dl').addClass('show');

});

contentLi.on('mouseleave',function(e){
	e.preventDefault();
	var i = $(this).index();
	contentLi.eq(i).removeClass('active');
	contentLi.eq(i).children('dl').removeClass('show');
});

})(jQuery);