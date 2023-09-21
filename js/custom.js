(function ($) {
    $('.scrollTop').click(function(){
        $('html').animate({'scrollTop':'10'},5000);
        return false;
    });

    $(window).scroll(function(){
        let uporthekeScroll = $(window).scrollTop();
        if (uporthekeScroll > 10){
            $('.sas-heading-area').addClass('fixed')
        }
        else{
            $('.sas-heading-area').removeClass('fixed')
        }
        
    });
    $('.sas-testimonial-slider-area').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    $('.journal-left-contant-about-cerosoul').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
})(jQuery);