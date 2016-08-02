/*jQuery(document).ready(function($) {
	$('.btn').on('click', function() {
		var panelID = $(this).attr('data-panelId');

		$('#' + panelID).fadeToggle();
	});		
});
*/

// SLIDER1

$(document).ready(function($) {

	//configuration
	var width = 720;
	var	animationSpeed = 1000;
	var currentSlide = 1;
	var position = 0;

	// cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	// navigation
	var $left = $('.left-arrow');
	var $right = $('.right-arrow');


	function nav() {
		$right.stop().on('click', function() {
			position = Math.max(position - width * currentSlide, -width * ($slides.length - currentSlide));

			$slideContainer.stop().animate({
				marginLeft: position + 'px' 
			}, animationSpeed, function() {

			});
		});

		$left.stop().on('click', function() {
			position = Math.min(position + width * currentSlide, 0)

			$slideContainer.stop().animate({
				marginLeft:  position + 'px'
			}, animationSpeed, function() {

			});
		});
	}

	nav();
});




// SLIDER2

$(document).ready(function($) {

	//configuration
	var width = 720;
	var	animationSpeed = 1000;
	var currentSlide = 1;
	var position = 0;

	// cache DOM
	var $slider = $('#slider2');
	var $slideContainer = $slider.find('.slides2');
	var $slides = $slideContainer.find('.slide2');

	// navigation
	var $left = $('.left');
	var $right = $('.right');


	function nav() {
		$right.stop().on('click', function() {
			position = Math.max(position - width * currentSlide, -width * ($slides.length - currentSlide));

			$slideContainer.stop().animate({
				marginLeft: position + 'px' 
			}, animationSpeed, function() {

			});
		});

		$left.stop().on('click', function() {
			position = Math.min(position + width * currentSlide, 0)

			$slideContainer.stop().animate({
				marginLeft:  position + 'px'
			}, animationSpeed, function() {

			});
		});
	}

	nav();
});



// SLIDER2

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


	function stopSlider() {
		clearInterval(intervalID);
	}

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

});
