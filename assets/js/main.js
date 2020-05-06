//owlcarousel
$(".welcome-area").owlCarousel({
  items: 1,
  autoplay: true,
  loop: true,
  nav: false,
  dots: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  autoplayTimeout:5000
});


$(".demo-list-slide").owlCarousel({
  items: 1,
  autoplay: true,
  loop: true,
  nav: false,
  dots: true,
  animateOut: 'slideOutLeft',
  animateIn: 'slideInRight',
  autoplayTimeout:5000
});

$(".clients").owlCarousel({
  items: 2,
  autoplay: false,
  loop: true,
  nav: false,
  dots: true,
  animateOut: 'slideOutLeft',
  animateIn: 'slideInRight',
  autoplayTimeout:5000,
  responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
    },
    1000:{
    }
}
});

$(".work").owlCarousel({
  items: 6,
  autoplay: true,
  loop: true,
  nav: false,
  dots: true,
  animateOut: 'slideOutLeft',
  animateIn: 'slideInRight',
  autoplayTimeout:5000,
  responsive:{
    0:{
        items:3,
        nav:false
    },
    600:{
    },
    1000:{
    }
}
});

// Barfiller	
	$('#bar1').barfiller({
		barColor: 'blue'
	});
	$('#bar2').barfiller({
		barColor: 'blue'
	});
	$('#bar3').barfiller({
    barColor: 'blue'
	});
	$('#bar4').barfiller({
		barColor: 'blue'
  });


   /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 20) {
          $('.header-area').addClass("sticky");
      } else {
          $('.header-area').removeClass("sticky");
      }
  });
  
  $.scrollUp({
    scrollText: '<i class="fas fa-arrow-alt-circle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 1000,
    animation: 'fade'
});

$('#nav').onePageNav({
  currentClass: 'current',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
});


$('.image').magnificPopup({
  type: 'image',
  gallery: {
      enabled:true
  }
})