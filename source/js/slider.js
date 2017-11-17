$('.owl__slider').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:0, 
    dots:true,
    autoplay:true, 
    nav:true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="owl__slider__nav" viewBox="0 0 490 490" xml:space="preserve"><path d="M474.459,0v490L15.541,244.991L474.459,0z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="owl__slider__nav" viewBox="0 0 490 490" xml:space="preserve"><path d="M15.541,490V0l458.917,245.009L15.541,490z"/></svg>'],
    autoplayTimeout:5000, 
    responsive:{ 
         0:{
            items:1
         },
         600:{
            items:1
         },
         1000:{
            items:1
         }
        }
});


var owl = $('.owl__slider');
owl.owlCarousel();
owl.on('changed.owl.carousel', function(event) {
    $('.owl__slider__wrapper').fadeOut(500);
    setTimeout(function() { $('.owl__slider__wrapper').fadeIn(1000); }, 1000);
})  
