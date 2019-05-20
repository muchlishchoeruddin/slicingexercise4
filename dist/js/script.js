$('.dropdown-md').click(function(){
	$('.md-menu',this).toggleClass('dropdown-show');
});
$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 335
  }
});
$('.filter a').click(function(){
	$('grid-item:not('+$(this).attr("data-filter")+')').addClass('productdisable');
});
$(window).scroll(function(){
	if ($(this).scrollTop()>=60) {
		$('.navbar').css({
			'background-color':'white',
		});
		$('.navpage .navbar').css({
			'top':'0'
		});
	}else{
		$('.navbar').css({
			'background-color':'transparent',
		});
		$('.navpage .navbar').css('top','4em');
	}
});