jQuery(document).ready(function ($) {
	$('.main_slider').slick({
		infinite: false,
		dots: true
	});

	$('.benefits_slider').slick({
		arrows: false,
		dots: true
	});

	$('.package_slider').slick({
		slidesToShow: 2,
		arrows: false,
		dots: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 575,
				settings:{
					slidesToShow: 1
				}
			}
		]
	});
	
	$('.current_lang').on('click', function(){
		$(this).siblings('.another_lang').fadeToggle(200);
		$(this).parent().toggleClass('open');
	});

	$(function(){
	  $(document).click(function(e) {
	    if ($(e.target).closest('.lang_switcher').length) return;
	    $('.another_lang').fadeOut(200);
	    $('.lang_switcher').removeClass('open');
	    e.stopPropagation();
	  });
	});

	$('.benefit_item').on('click', function(){
		$(this).toggleClass('clicked');
		$(this).find('.frontside').toggleClass('clicked');
		$(this).find('.backside').toggleClass('clicked');
	});


	$('.question_btn').on('click', function(){
		$(this).toggleClass('open');
		$(this).siblings('p').slideToggle();
	});

	$('.footer_item h3').on('click', function(){
		if($(window).width() < 576){
			$(this).toggleClass('show');
			$(this).siblings('ul').slideToggle();
		}
	});

	$('.menu_btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('header .footer_list').toggleClass('open');
	})
	
});