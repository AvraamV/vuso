jQuery(document).ready(function ($) {
	//back to top
		let btn = $('.back_to_top');  
	  $(window).scroll(function() {     
	    if ($(window).scrollTop() > 300) {
	       btn.addClass('show');
	     } else {
	       btn.removeClass('show');
	     }
	   });
	   btn.on('click', function(e) {
	     e.preventDefault();
	     $('html, body').animate({scrollTop:0}, '300');
	   });

	//input phone mask
  	$('input[type="tel"]').mask('+38 (099) 999-99-99');

	//sliders
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
	
	//language switcher
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

	//flip on card
		$('.benefit_item').on('click', function(){
			$(this).toggleClass('clicked');
			$(this).find('.frontside').toggleClass('clicked');
			$(this).find('.backside').toggleClass('clicked');
		});

	//accordion
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

	//mpbile menu	
		$('.menu_btn').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('open');
			$('header .footer_list').toggleClass('open');
		});

	//odometer settings
	
		function startOdometer(){
			$('.odometer').fadeIn();
			let scrollToBlock = $('.payment_section').offset().top - $(window).outerHeight();

			if($(window).scrollTop() > scrollToBlock){
				$('.odometer.year').html(97946453);
				$('.odometer.month').html(13854628);
				$('.odometer.week').html(4321749);			
			}

			let numbersCount1 = $('.odometer.year .odometer-digit').length;
			let numbersCount2 = $('.odometer.month .odometer-digit').length;
			let numbersCount3 = $('.odometer.week .odometer-digit').length;

			if(numbersCount1 < 9){
				$('.odometer.year').addClass('blue_blocks');
			}else{
				$('.odometer.year').removeClass('blue_blocks');			
			}

			if(numbersCount2 < 9){
				$('.odometer.month').addClass('blue_blocks');
			}else{
				$('.odometer.month').removeClass('blue_blocks');			
			}

			if(numbersCount3 < 8){
				$('.odometer.week').addClass('blue_blocks');
			}else{
				$('.odometer.week').removeClass('blue_blocks');			
			}
		}

		if($('.odometer').length){
			$(window).scroll(function(){
				startOdometer()
			});
			startOdometer();
		}

	//init plugins
		$('.js-range-slider').ionRangeSlider({
	      min: 100000,
	      max: 3000000
	  });
	  if($('select').length){
		  $('select').select2({
		  	minimumResultsForSearch: Infinity
		  });
		  $(window).on('resize', function(){
		  	$('select').select2({
		  		minimumResultsForSearch: Infinity
		  	});
		  });	
		}

});