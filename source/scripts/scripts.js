$(document).ready(function() {
	// слайдер
	$(".slider-1").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false, 
	});

	// меню
	$('.top-menu').click(function() {
		$(this).toggleClass('active');
		$('.top-menu__dropbox').toggleClass('active');
		$('.top-menu__item').toggleClass('animated bounceInDown');
	});
	$('.top-menu__item').click(function() {
		$('.top-menu__item').removeClass('active');
		$(this).addClass('active');

		setTimeout(function() {
			$('.top-menu__dropbox').removeClass('active');
			$('.top-menu').removeClass('active');
			$('.top-menu__item').removeClass('animated bounceInDown');

		}, 500);
		
	});

	//плавный скроллинг
	$(".top-menu__item").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

	

})