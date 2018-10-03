(function(){
	var topBtn = $('.topBtn');
$(window).on('scroll',function(e){
	e.preventDefault();
	var thisTop=$(this).scrollTop();
	if(thisTop<1000){
		topBtn.stop().show();
	}else{
		topBtn.stop().hide();
	};
});

topBtn.on('click',function(e){
	e.preventDefault();
	$('html','body').animate({scrollTop:0},500);
});
})(jQuery);