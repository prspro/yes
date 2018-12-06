//Some JS
$(document).ready(function(){
    $('.carousel').slick({
        infinite: false,
        dots: true,
        dotsClass: 'custom-dots',
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,  
        adaptiveHeight: true    
    });
});