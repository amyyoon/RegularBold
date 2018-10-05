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
	contentLi.eq(i).children('dl').addClass('show');
	contentLi.eq(i).addClass('active');
	

});

contentLi.on('mouseleave',function(e){
	e.preventDefault();
	var i = $(this).index();
	contentLi.eq(i).children('dl').removeClass('show');
	contentLi.eq(i).removeClass('active');
	
});


var titleLi= $('.title').find('li');
var contentUl=$('.contentUl');

contentUl.eq(0).addClass('active');

titleLi.on('click',function(e){
	e.preventDefault();
	var i = $(this).index();
	contentUl.eq(i).addClass('active');
	contentUl.eq(i).siblings().removeClass('active');
})













})(jQuery);