
$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 335
  }
});
$('.filter a').click(function(){
	// alert('asd');
	// alert()
	var filterval = $(this).attr("data-filter");
	$('.grid').isotope({ filter: filterval });
	$('.filter a').removeClass('active');
	$(this).addClass('active');
});
if ($(window).scrollTop()>=60) {
	$('.navbar').css({
		'background-color':'white',
	});
	$('.navpage .navbar').css({
		'top':'0',
		'padding-top':'1em',
		'padding-bottom':'1em',
	});
}else{
	$('.navbar').css({
		'background-color':'transparent',
	});
	$('.navpage .navbar').css({
		'top':'4em',
		'padding-top':'2em',
		'padding-bottom':'2em',
	});
}
$(window).scroll(function(){
	if ($(this).scrollTop()>=60) {
		$('.navbar').css({
			'background-color':'white',
		});
		$('.navpage .navbar').css({
			'top':'0',
			'padding-top':'1em',
			'padding-bottom':'1em',
		});
	}else{
		$('.navbar').css({
			'background-color':'transparent',
		});
		$('.navpage .navbar').css({
			'top':'4em',
			'padding-top':'2em',
			'padding-bottom':'2em',
		});
	}
});