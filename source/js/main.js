
$('.header__search__img').click(function(){
   	$(".header__search__hidden").slideToggle();
});

$('.tab__title').click(function(){
   	var activeTab = $(this).attr('data-href');
   	$(".tab__title").removeClass("tab__title--active");
   	$(".tab__content").removeClass("tab__content--active");
   	$(this).addClass("tab__title--active");
   	$(activeTab).addClass("tab__content--active");
});


    var show = true;
    var countbox = ".number__title";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   
 
        var w_top = $(window).scrollTop();        
        var e_top = $(countbox).offset().top;     
 
        var w_height = $(window).height();       
        var d_height = $(document).height();    
 
        var e_height = $(countbox).outerHeight(); 

       
 
        //if(w_top + e_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        if(w_top + w_height - 50 > e_top ){ 
 
            $(".number__title").spincrement({
                thousandSeparator: "",
                duration: 1800
            });
 
            show = false;
        }
    });


 var slideout = new Slideout({
    'panel': document.getElementById('page'),
    'menu': document.getElementById('menu__mobile'),
    'padding': 256,
    'tolerance': 70,
    'touch' : false
  });

$('#hamburger').on('click', function() {
    slideout.toggle();
});


  $('#hamburger').click(function(){
    $(this).toggleClass('is-active');
  });
