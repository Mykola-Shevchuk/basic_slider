jQuery(document).ready(function($) {
	$('.btn').on('click', function() {
		var panelID = $(this).attr('data-panelId');

		$('#' + panelID).fadeToggle();
	});		
});


// SLIDER

$(document).ready(function($) {

	//configuration
	var width = 720;
	var	animationSpeed = 2000;
	var pause = 4000;
	var currentSlide = 1;

	// cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	// navigation
	var $left = $('.left');
	var $right = $('.right');

	// slider id
	var inntervalId;

	function startSlider() {
		intervalID = setInterval(function() {
			$slideContainer.animate({
				marginLeft: '-=' + width 
			}, animationSpeed, function() {
				currentSlide++;
				if (currentSlide === $slides.length) {
	                currentSlide = 1;
	                $slideContainer.css('margin-left', 0);
	            }
			});
		}, pause);
	}

/*	function nav() {
		$right.on('click', function() {
			$slideContainer.animate({
				marginLeft: '-=' + width 
			}, animationSpeed, function() {

				if (currentSlide === $slides.length) {
	                currentSlide = 1;
	                $slideContainer.css('margin-left', 0);
	            }
			});
		});
	}*/

	function stopSlider() {
		clearInterval(intervalID);
	}

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	startSlider();

	/*nav();*/
});
