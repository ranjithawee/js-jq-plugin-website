$(document).ready(function(){



	// counter js
	$('.counter').counterUp();
	// wow js 
	new WOW().init();
	// maxitup activation code
	var mixer = mixitup("#items", {
		animation: {
			duration: 400
		}
	});

	// slick plugin

	$('.slick_slider').slick({
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 3,
		autoplay: true,
		dots: true,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	  });

	//   owl
	  $(".owl-carousel").owlCarousel({
		autoPlay: true,
		slideSpeed: 200
	  });
		   

	// curved text
	var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });

	// loadmore
	$('.load_more').simpleLoadMore({
		item: '.c_load',
		itemsToLoad: 2,
		easing: 'fade',
		easingDuration: 300
		
	  });

	//   pre loader
	$(window).load(function () {
		$("#loading").fadeOut(500);
	  });



});



// javaScript code ====================================


// aos animation
AOS.init({
	duration: 1000,
});

// lightbox js

lightbox.option({
	'resizeDuration': 300,
	'wrapAround': true
  });

// swiper js

const swiper = new Swiper('.swiper', {
	speed: 400,
	autoplay: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
  });
