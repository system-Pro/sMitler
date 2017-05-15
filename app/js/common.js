$(function () {

	// MMENU
	$("#my-menu").mmenu({
		"extensions": ["theme-dark", "pagedim-black", "effect-menu-slide"],
		"navbar": {
			"title": '<a href="#" class="logo"><span class="logo-first">S&</span><span class="logo-second">Mitler</span></a>'
		},
		"offCanvas": {
			"position": "right"
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});

	// OWL CAROUSEL
	$('.carousel-services').on('initialized.owl.carousel', function () {
		setTimeout(function(){
			carouselService()
		}, 100);
	});
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		singleItem: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	// (function () {
	// 	$('.carousel-services-item').each(function () {
	// 		var ths = $(this);
	// 		var thsh = ths.find('.carousel-services-content').outerHeight();
	// 		ths.find('.carousel-services-image').css('min-height', thsh);
	// 	});
	// })();

	function carouselService() {
		$('.carousel-services-item').each(function () {
			var ths = $(this);
			var thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}

	$('.carousel-services-composition .h3').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});


	function onResize(){
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function(){
		onResize()
	}

});
