jQuery(document).ready(function ($) {
	$('.main_slider').slick({
		infinite: false,
		dots: true
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


});