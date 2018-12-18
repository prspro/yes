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

$(document).on("click", function(e) {
    const id = e.target.id;
    const overlay = $("#js_overlay");
        
    if (id === "js_overlay" || id === "js_popup-close" || id === "js_btn") {
        overlay.fadeToggle();
        //console.log(overlay)
    }
    //console.log(c[0].className)
});